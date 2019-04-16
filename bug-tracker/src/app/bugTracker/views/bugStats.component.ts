import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Bug } from '../models/Bug';


@Component({
	selector : 'app-bug-stats',
	template : `
		<div>{{getCurrentTime()}}</div>
		<section class="stats">
		 	<span class="closed">{{bugList | closedCount }}</span>
		 	<span> / </span>
		 	<span>{{bugList.length}}</span>
		 </section>
	`,
	changeDetection : ChangeDetectionStrategy.OnPush
})
export class BugStatsComponent{

	@Input('data')
	bugList : Bug[] = [];

	getCurrentTime(){
		return Date();
	}
}