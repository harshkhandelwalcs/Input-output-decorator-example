"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var student_1 = require('./student');
var ChildOneComponent = (function () {
    function ChildOneComponent() {
        this.addStdEvent = new core_1.EventEmitter();
        this.sendMsgEvent = new core_1.EventEmitter();
        this.student = new student_1.Student();
        this.childTitle = '---Child One---';
        this.message = 'Send Message';
    }
    ChildOneComponent.prototype.addStudent = function () {
        this.addStdEvent.emit(this.student);
    };
    ChildOneComponent.prototype.sendMsg = function () {
        this.sendMsgEvent.emit(this.msg);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildOneComponent.prototype, "ctMsg", void 0);
    __decorate([
        core_1.Input('ctArray'), 
        __metadata('design:type', Array)
    ], ChildOneComponent.prototype, "myctArray", void 0);
    __decorate([
        core_1.Input('studentAddMsg'), 
        __metadata('design:type', String)
    ], ChildOneComponent.prototype, "addMsg", void 0);
    __decorate([
        core_1.Output('addStudentEvent'), 
        __metadata('design:type', Object)
    ], ChildOneComponent.prototype, "addStdEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildOneComponent.prototype, "sendMsgEvent", void 0);
    ChildOneComponent = __decorate([
        core_1.Component({
            selector: 'child-one',
            template: "\n\t            <h3>{{childTitle}}</h3>\n\t            <b> {{ctMsg}}</b>\n\t\t\t\t<ul>\n\t\t\t\t <li *ngFor = \"let cname of myctArray\">\n\t\t\t\t    {{cname}}\n\t\t\t\t </li>\n\t\t\t\t</ul>\n\n\t\t\t    <b>{{addMsg}}</b><br/>\n\t\t\t\t<div>\n\t\t\t\t\tFirst Name:<input (input)=\"student.fname=$event.target.value\" /> <br/>\n\t\t\t\t\tLast Name:<input (input)=\"student.lname=$event.target.value\" />\n\t\t\t\t\t<br/> <button (click)=\"addStudent()\">Add Student</button>\n\t\t\t\t</div>\n\n\t\t\t\t<br/><b>{{message}}</b><br/>\n\t\t\t\t<div>\n\t\t\t\t\tMessage :<input (input)=\"msg=$event.target.value\" />\n\t\t\t\t\t<br/> <button (click)=\"sendMsg()\">Send</button>\n\t\t\t\t</div>\n\t\t\t "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildOneComponent);
    return ChildOneComponent;
}());
exports.ChildOneComponent = ChildOneComponent;
//# sourceMappingURL=childone.component.js.map