var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
let TheadFormRowComponent = class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
};
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TheadFormRowComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TheadFormRowComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TheadFormRowComponent.prototype, "createConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TheadFormRowComponent.prototype, "create", void 0);
TheadFormRowComponent = __decorate([
    Component({
        selector: '[ng2-st-thead-form-row]',
        template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `,
    })
], TheadFormRowComponent);
export { TheadFormRowComponent };
//# sourceMappingURL=thead-form-row.component.js.map