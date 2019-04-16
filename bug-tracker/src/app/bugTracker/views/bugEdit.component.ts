import { Component, EventEmitter, Output } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';

import { Bug } from '../models/Bug';

@Component({
	selector : 'app-bug-edit',
	template : `
		 <section class="edit">
		 	<label for="">Bug Name :</label>
		 	<input type="text" #txtBugName>
		 	<input type="button" value="Add New" (click)="onAddNewClick(txtBugName.value)">
		 </section>
	`
})
export class BugEditComponent{

	@Output()
	public bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}
	onAddNewClick(newBugName : string){
		let newBug : Bug = this.bugOperations.createNew(newBugName);
		this.bugAdded.emit(newBug);
	}	
}