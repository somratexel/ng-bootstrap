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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-content',
            templateUrl: 'app/templates/modal-component-template.html'
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbActiveModal])
    ], NgbdModalContent);
    return NgbdModalContent;
}());
exports.NgbdModalContent = NgbdModalContent;
var NgbdModalComponent = (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        core_1.Component({
            selector: 'ngbd-modal-component',
            templateUrl: 'app/templates/modal-component.html'
        }), 
        __metadata('design:paramtypes', [ng_bootstrap_1.NgbModal])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());
exports.NgbdModalComponent = NgbdModalComponent;
//# sourceMappingURL=modal.component.js.map