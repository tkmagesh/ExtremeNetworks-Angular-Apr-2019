import { Component } from '@angular/core';
import { Bug } from './models/Bug';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugList : Array<Bug> = [];

	onAddNewClick(newBugName : string){
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		this.bugList.push(newBug);
	}
}