import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';



@NgModule({
    declarations: [
        CarListComponent
    ],
    exports: [
        CarListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CarsModule { }
