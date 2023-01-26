const axios = require("axios");

function getData(repoData) {
	const pulls = [];
	for (const pull of repoData)
		pulls.push({
			id: pull.id,
			user: pull.user["login"],
			title: pull.title,
			state: pull.state,
			created_date: pull.created_at,
		});
	console.log(pulls);
}

function getPullRequests(owner, repoName, startDate, endDate) {
	axios
		.get(`https://api.github.com/repos/${owner}/${repoName}/pulls?state=all`)
		.catch((err) => {
			throw new Error("Error 404 User or Repo Not Found");
		})
		.then((response) => {
			startDate = new Date(startDate);
			endDate = new Date(endDate);
			const filteredData = response.data.filter(
				(data) =>
					(new Date(data.created_at) >= startDate &&
						new Date(data.created_at) <= endDate) ||
					(new Date(data.closed_at) >= startDate &&
						new Date(data.closed_at) <= endDate) ||
					(new Date(data.updated_at) >= startDate &&
						new Date(data.updated_at) <= endDate) ||
					(new Date(data.merged_at) >= startDate &&
						new Date(data.merged_at) <= endDate)
			);
			getData(filteredData);
		});
}

getPullRequests("Faceboo", "React", "2022-07-01", "2022-09-06");
//getPullRequests("Umuzi-org", "ACN-syllabus", "2022-01-01", "2022-08-23");
