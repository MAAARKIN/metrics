export default {

	set(key, data) {
		let chromeObj = {};
		chromeObj[key] = data;
		// console.log(chromeObj);

		chrome.storage.sync.set(chromeObj);
	},

	get(key, callback) {
		return chrome.storage.sync.get(key, (res) => {
			callback(res[key]);
		});
	}
}