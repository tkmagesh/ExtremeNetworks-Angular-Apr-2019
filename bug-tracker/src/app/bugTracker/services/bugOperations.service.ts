import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(bugName : string) : Bug {
		let newBugData : Bug = {
			id : 0,
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		let newBug = this.bugStorage.save(newBugData);
		return newBug;
	}

	toggle(bugToToggle : Bug) : Bug {
		//bugToToggle.isClosed = !bugToToggle.isClosed;
		let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
		let toggledBug = this.bugStorage.save(toggledBugData);
		return toggledBug;
	}

	getAll() : Bug[] {
		return this.bugStorage.getAll();
	}

	remove(bugData : Bug) : void {
		this.bugStorage.remove(bugData);
	}
}