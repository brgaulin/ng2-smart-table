var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
let TbodyCustomComponent = class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TbodyCustomComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TbodyCustomComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TbodyCustomComponent.prototype, "source", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyCustomComponent.prototype, "custom", void 0);
TbodyCustomComponent = __decorate([
    Component({
        selector: 'ng2-st-tbody-custom',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
    })
], TbodyCustomComponent);
export { TbodyCustomComponent };
//# sourceMappingURL=custom.component.js.map