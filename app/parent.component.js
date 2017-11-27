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
var ParentComponent = (function () {
    function ParentComponent() {
        this.parentTitle = 'Parent Component';
        //Property for child component one
        this.cityMsg = 'Indian City Names';
        this.cityArray = ['Varanasi', 'Delhi', 'Mumbai'];
        this.stdAddMsg = 'Add Student';
        //Property for child component two
        this.stdMsg = 'Student Leader Detail';
        this.stdLeaderObj = new student_1.Student('Narendra', 'Modi');
        //Property used in parent
        this.stdFullName = '';
        this.sum = '';
        this.msg = '';
    }
    ParentComponent.prototype.saveData = function (std) {
        console.log('std', std);
        this.stdFullName = std.fname + ' ' + std.lname;
    };
    ParentComponent.prototype.printSum = function (res) {
        console.log('res', res);
        this.sum = res;
    };
    ParentComponent.prototype.printMsg = function (msg) {
        console.log('msg', msg);
        this.msg = msg;
    };
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'input-output',
            template: "\n\t            <h1>{{parentTitle}}</h1>\n\t\t\t\t<child-one\n\t\t\t\t\t[ctMsg]=\"cityMsg\"\n\t\t\t\t\t[ctArray]=\"cityArray\"\n\t\t\t\t\t[studentAddMsg]=\"stdAddMsg\"\n\t\t\t\t    (addStudentEvent) = \"saveData($event)\"\n\t\t\t\t\t(sendMsgEvent) = \"printMsg($event)\"\t>\n\t\t\t\t</child-one>\n\t\t\t\t<p>Name: {{stdFullName}}</p>\n\t\t\t\t<p>Message: {{msg}}</p>\n\t\t\t\t<child-two\n\t\t\t\t\t[studentMsg] = \"stdMsg\"\n\t\t\t\t\t[stdLeader] = \"stdLeaderObj\"\n\t\t\t\t\t(addNumberEvent) = \"printSum($event)\" >\n\t\t\t\t</child-two>\n\t\t\t\t<p>Sum: {{sum}}</p>\n\t          "
        }), 
        __metadata('design:paramtypes', [])
    ], ParentComponent);
    return ParentComponent;
}());
exports.ParentComponent = ParentComponent;
//# sourceMappingURL=parent.component.js.map