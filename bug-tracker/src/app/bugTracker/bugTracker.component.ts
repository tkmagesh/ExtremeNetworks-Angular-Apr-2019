import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{

	bugList : Array<Bug> = [];

	trimLength : number = 30;
	
	/*bugOperations : BugOperationsService;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	constructor(private bugOperations : BugOperationsService){

	}

	onAddNewClick(newBugName : string){
		let newBug : Bug = this.bugOperations.createNew(newBugName);
		this.bugList.push(newBug);
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	onRemoveClosedClick(){
		this.bugList = this.bugList.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}