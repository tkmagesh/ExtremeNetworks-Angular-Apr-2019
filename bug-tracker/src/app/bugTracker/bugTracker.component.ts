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
		
	}

	onNewBugCreated(newBug : Bug){
		this.bugList = [...this.bugList, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugList = this.bugList.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		return this.bugList.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}