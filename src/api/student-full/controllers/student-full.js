module.exports = {
	async getFullData(ctx) {
		try {
			const { documentId, semister } = ctx.params;

			// 1) Fetch student with result relation
			const studentRes = await strapi.entityService.findMany("api::student.student", {
				filters: { documentId },
				populate: {
					result: true, // summary table
					branch: true
				}
			});

			if (!studentRes || studentRes.length === 0) {
				return ctx.notFound("Student not found");
			}

			const student = studentRes[0];

			// 2) Fetch marks for the student and selected semester
			const marks = await strapi.entityService.findMany("api::mark.mark", {
				filters: {
					student: { documentId },
					semister
				},
				populate: {
					subject: true
				}
			});

			// 3) Find summary result for this semester
			const summary = await strapi.entityService.findMany("api::result.result", {
				filters: {
					students: { documentId },
					semister
				}
			});

			return {
				student,
				marks,
				result: summary[0] || null
			};
		} catch (err) {
			ctx.badRequest("Error fetching student full data", err);
		}
	}
};
