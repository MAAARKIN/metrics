import uuid from 'uuid'

export default class Tracker {
	constructor(name) {
		this.id = uuid.v4();
		this.name = name;
		this.paused = false;
		this.lastStartDate = Date.now();
	}
}