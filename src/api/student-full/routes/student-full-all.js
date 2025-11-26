module.exports = {
	routes: [
		{
			method: "GET",
			path: "/student-full-all",
			handler: "student-full-all.getAllFullData",
			config: {
				auth: false
			}
		}
	]
};
