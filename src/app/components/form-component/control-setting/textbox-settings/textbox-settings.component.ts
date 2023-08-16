import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-textbox-settings',
  templateUrl: './textbox-settings.component.html',
  styleUrls: ['./textbox-settings.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,NgbNavModule]
})
export class TextboxSettingsComponent implements OnInit {
  @Input() activeModal: NgbModal
  textboxSettingFormGroup:FormGroup;
  active = 1;
  constructor() {}

ngOnInit(): void {
 this.createForm();
}
createForm():void
{
  this.textboxSettingFormGroup = new FormGroup({
    height:new FormControl()
  })
}

onFormSubmit():void
{
  console.log(this.textboxSettingFormGroup.value);
}
}
