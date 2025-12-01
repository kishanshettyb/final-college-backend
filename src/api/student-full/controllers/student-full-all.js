module.exports = {
	async getAllFullData(ctx) {
		try {
			const students = await strapi.entityService.findMany("api::student.student", {
				populate: {
					results: { populate: "*" }, // now gives ALL sem results
					branch: true
				}
			});

			const marks = await strapi.entityService.findMany("api::mark.mark", {
				populate: {
					student: true,
					subject: true
				}
			});

			return {
				count: students.length,
				students,
				marks
			};
		} catch (err) {
			ctx.badRequest("Error fetching all students full data", err);
		}
	}
};
