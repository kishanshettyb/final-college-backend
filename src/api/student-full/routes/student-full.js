module.exports = {
	routes: [
		{
			method: "GET",
			path: "/student-full/:documentId/:semister",
			handler: "student-full.getFullData",
			config: {
				auth: false
			}
		}
	]
};
