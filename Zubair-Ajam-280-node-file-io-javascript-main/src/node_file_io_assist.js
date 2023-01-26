const errors = {
	invalidName: "Full name is invalid",
	assistantName: "The assistants name is invalid",
};
function formatName(name) {
	const nameArray = name.split(" ");
	const nameSplit = name.split(" ").join("_").toLowerCase();
	const fileName = `./visitor_${nameSplit}.json`;
	const nameRegex = /^([a-z']+(-| )?)+$/i;
	for (let i = 0; i < nameArray.length; i++) {
		if (nameArray[i].length <= 1 || !nameRegex.test(name)) {
			throw Error(errors.invalidName);
		}
	}
	return fileName;
}
function checkAssistantName(name) {
	const assistantNameSplit = name.split(" ");
	for (let i = 0; i < assistantNameSplit.length; i++) {
		if (assistantNameSplit[i].length <= 1) {
			throw Error(errors.assistantName);
		}
	}
}
module.exports = { formatName, checkAssistantName, errors };
