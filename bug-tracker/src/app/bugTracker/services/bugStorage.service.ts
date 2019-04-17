import { Bug } from '../models/Bug';

export class BugStorageService{
	
	private currentBugId = 0;
	private storage = window.localStorage;

	save(bugData : Bug) : Bug {
		if (bugData.id === 0){
			bugData.id = ++this.currentBugId;
		}
		this.storage.setItem(bugData.id.toString(), JSON.stringify(bugData));
		return bugData;
	}
	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id.toString());
	}
	getAll() : Bug[] {
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index);
			let rawData = this.storage.getItem(key);
			let bug = JSON.parse(rawData);
			this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id;
			result.push(bug);
		}
		return result;
	}
}