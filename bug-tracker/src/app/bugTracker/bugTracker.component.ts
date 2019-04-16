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

	sortAttrName : string = 'name';

	sortDesc : boolean = false;

	/*bugOperations : BugOperationsService;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	constructor(private bugOperations : BugOperationsService){
		this.bugList.push({ name : 'Server communication failure', isClosed : false});
		this.bugList.push({ name : 'User actions not recognized', isClosed : true});
		this.bugList.push({ name : 'Data integrity checks failed', isClosed : false});
		this.bugList.push({ name : 'Application not responding', isClosed : false});
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