var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
let ActionsTitleComponent = class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], ActionsTitleComponent.prototype, "grid", void 0);
ActionsTitleComponent = __decorate([
    Component({
        selector: '[ng2-st-actions-title]',
        template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
    }),
    __metadata("design:paramtypes", [ElementRef])
], ActionsTitleComponent);
export { ActionsTitleComponent };
//# sourceMappingURL=actions-title.component.js.map