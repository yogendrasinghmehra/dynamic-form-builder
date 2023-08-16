import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLayoutComponent } from './add-layout.component';
import { GridsterModule } from 'angular-gridster2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLayoutComponent
  ],
  imports: [
    CommonModule,
    GridsterModule
  ],
  exports:[AddLayoutComponent],
})
export class AddLayoutModule { }
