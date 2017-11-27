import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from './student';
@Component({
    selector: 'child-one',
    template: `
	            <h3>{{childTitle}}</h3>
	            <b> {{ctMsg}}</b>
				<ul>
				 <li *ngFor = "let cname of myctArray">
				    {{cname}}
				 </li>
				</ul>

			    <b>{{addMsg}}</b><br/>
				<div>
					First Name:<input (input)="student.fname=$event.target.value" /> <br/>
					Last Name:<input (input)="student.lname=$event.target.value" />
					<br/> <button (click)="addStudent()">Add Student</button>
				</div>

				<br/><b>{{message}}</b><br/>
				<div>
					Message :<input (input)="msg=$event.target.value" />
					<br/> <button (click)="sendMsg()">Send</button>
				</div>
			 `
})
export class ChildOneComponent {

	@Input()
	ctMsg : string;

	@Input('ctArray')
	myctArray : Array<string>;

    @Input('studentAddMsg')
	addMsg : string;

  	@Output('addStudentEvent')
	addStdEvent = new EventEmitter<Student>();

  	@Output()
	sendMsgEvent = new EventEmitter<string>();

	student = new Student();
	childTitle = '---Child One---';
	message = 'Send Message'
	msg : string;

	addStudent() {
	      this.addStdEvent.emit(this.student);
    }
	sendMsg() {
	      this.sendMsgEvent.emit(this.msg);
    }
}