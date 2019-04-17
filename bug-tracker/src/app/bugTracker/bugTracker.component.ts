import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperations.service';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

console.log(moment('2019-03-17T05:05:10.603Z').fromNow());


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{

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

	ngOnInit(){

		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugList = bugs);
	}

	onNewBugCreated(newBug : Bug){
		this.bugList = [...this.bugList, newBug];
	}

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		this.bugList
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugOperations
					.remove(closedBug)
					.subscribe(_ => this.bugList = this.bugList.filter(bug => bug !== closedBug));
			});
	}
}