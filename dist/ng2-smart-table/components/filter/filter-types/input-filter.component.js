var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import { DefaultFilter } from './default-filter';
let InputFilterComponent = class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .skip(1)
            .distinctUntilChanged()
            .debounceTime(this.delay)
            .subscribe((value) => this.setFilter());
    }
};
InputFilterComponent = __decorate([
    Component({
        selector: 'input-filter',
        template: `
    <input [(ngModel)]="query"
           [ngClass]="inputClass"
           [formControl]="inputControl"
           class="form-control"
           type="text"
           placeholder="{{ column.title }}" />
  `,
    }),
    __metadata("design:paramtypes", [])
], InputFilterComponent);
export { InputFilterComponent };
//# sourceMappingURL=input-filter.component.js.map