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
var ChildTwoComponent = (function () {
    function ChildTwoComponent() {
        this.addNumEvent = new core_1.EventEmitter();
        this.childTitle = '---Child Two---';
        this.addNumMsg = 'Add Number';
    }
    ChildTwoComponent.prototype.addNumber = function () {
        this.addNumEvent.emit(parseInt(this.num1) + parseInt(this.num2));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildTwoComponent.prototype, "studentMsg", void 0);
    __decorate([
        core_1.Input('stdLeader'), 
        __metadata('design:type', student_1.Student)
    ], ChildTwoComponent.prototype, "myStdLeader", void 0);
    __decorate([
        core_1.Output('addNumberEvent'), 
        __metadata('design:type', Object)
    ], ChildTwoComponent.prototype, "addNumEvent", void 0);
    ChildTwoComponent = __decorate([
        core_1.Component({
            selector: 'child-two',
            template: "\n\t            <h3>{{childTitle}}</h3>\n\t\t\t\t<p> {{studentMsg}} : {{myStdLeader.fname +' '+ myStdLeader.lname}}  </p>\n\n\t\t\t\t<b>{{addNumMsg}}</b><br/>\n\t\t\t\t<div>\n\t\t\t\t\tFirst Number :<input (input)=\"num1=$event.target.value\" /> <br/>\n\t\t\t\t\tSecond Number:<input (input)=\"num2=$event.target.value\" /> <br/>\n\t\t\t\t\t<br/> <button (click)=\"addNumber()\">Add Number</button>\n\t\t\t\t</div>\t\t\n\t\t\t  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChildTwoComponent);
    return ChildTwoComponent;
}());
exports.ChildTwoComponent = ChildTwoComponent;
//# sourceMappingURL=childtwo.component.js.map