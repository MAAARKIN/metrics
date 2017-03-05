import storage from '../repository/storage.js';
import _ from 'lodash';
import uuid from 'uuid'
import Tracker from '../models/tracker.js'
import {TRACKERS} from '../utils/constants.js'

export default {

	data: [],

	initialize() {
		let self = this;
		storage.get(TRACKERS, function(response) {
			//se response existir e for um array
			if (response && Array.isArray(response)) {
				self.data.push(...response);
			}
		});
	},

	saveAllTrackers() {
		storage.set(TRACKERS, this.data);
	},

	create(name) {
		this.data.unshift(new Tracker(name));

		console.log(this.data)

		this.saveAllTrackers();
	},

	delete(id) {
		let idTracker = _.findIndex(this.data, {id: id});
		if(!idTracker) return;

		this.data.slice(idTracker, 1);
		this.saveAllTrackers();
	},

	clearAll() {
		this.data = [];
		this.saveAllTrackers();
	}
}