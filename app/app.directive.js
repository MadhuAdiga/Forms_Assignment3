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
var forms_1 = require('@angular/forms');
// validation function
function validateJuriNameFactory() {
    return function (c) {
        var isValid = c.value === 'Juri';
        if (isValid) {
            return null;
        }
        else {
            return {
                juriName: {
                    valid: false
                }
            };
        }
    };
}
var JuriNameValidator = (function () {
    function JuriNameValidator() {
        this.validator = validateJuriNameFactory();
    }
    JuriNameValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    JuriNameValidator = __decorate([
        core_1.Directive({
            selector: '[juriName][ngModel]',
            providers: [
                { provide: forms_1.NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], JuriNameValidator);
    return JuriNameValidator;
}());
exports.JuriNameValidator = JuriNameValidator;
//# sourceMappingURL=app.directive.js.map