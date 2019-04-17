import { NgModule } from '@angular/core';

import { TrimTextPipe } from './pipes/trimText.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { ElapsedPipe } from './pipes/elapsed.pipe';

@NgModule({
	declarations : [
		TrimTextPipe
	    , SortPipe
	    , ElapsedPipe
	],
	exports : [
		TrimTextPipe
	    , SortPipe
	    , ElapsedPipe
	],
	imports : [],
	providers : [],
	bootstrap : []
})
export class UtilsModule{

}