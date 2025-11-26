module.exports = {
	async getAllFullData(ctx) {
		try {
			// 1) Fetch all students with result & branch
			const students = await strapi.entityService.findMany("api::student.student", {
				populate: {
					result: true, // all semester results
					branch: true
				}
			});

			// 2) Fetch all marks for all students
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
