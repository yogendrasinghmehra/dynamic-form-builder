import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { GridsterModule } from 'angular-gridster2';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    GridsterModule
  ],
  exports:[LayoutComponent],
})
export class LayoutModule { }
