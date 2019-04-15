import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	
	userName : string = '';
	
	greetMessage : string = '[Dummy greet message]';

	onGreetClick(){
		this.greetMessage = `Hi ${this.userName}, Have a nice day!`;
	}
}
/*export class GreeterComponent{
	
	greetMessage : string = '[Dummy greet message]';

	onGreetClick(userName : string){
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}
}*/

