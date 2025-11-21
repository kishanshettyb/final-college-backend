"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::mark.mark", ({ strapi }) => ({
	async create(ctx) {
		const { data } = ctx.request.body;
		const { subject, student, semister } = data;

		// Check if already exists
		const existing = await strapi.db.query("api::mark.mark").findOne({
			where: {
				subject: { documentId: subject },
				student: { documentId: student },
				semister
			}
		});

		if (existing) {
			return ctx.badRequest("Marks already exist for this student + subject + semester");
		}

		// Continue default creation
		return await super.create(ctx);
	}
}));
