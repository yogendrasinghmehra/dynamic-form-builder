import {  Component, Input, OnInit, ViewChildren, ViewContainerRef } from '@angular/core';
import { CompactType, DisplayGrid, GridType, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { TextboxControlComponent } from '../form-component/textbox-control/textbox-control.component';
import { ButtonControlComponent } from '../form-component/button-control/button-control.component';
import { DropdownControlComponent } from '../form-component/dropdown-control/dropdown-control.component';
import { ComponentDetails } from '../form-component/component.type';
import ComponentData from '../form-component/components.json';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TextboxSettingsComponent } from '../form-component/control-setting/textbox-settings/textbox-settings.component';

const componentConfig = [
{ 
  name:"Textbox",
  component: TextboxControlComponent
},
{
  name:"Button",
  component: ButtonControlComponent
},
{
  name:"Dropdown",
  component: DropdownControlComponent
}
]


@Component({
  selector: 'app-add-layout',
  templateUrl: './add-layout.component.html',
  styleUrls: ['./add-layout.component.scss']
})
export class AddLayoutComponent implements OnInit {
  @Input() ComponentName:string;
  @ViewChildren('container',{ read: ViewContainerRef }) container:any;
  options!: GridsterConfig;
  items: Array<GridsterItem> = [];
  data :ComponentDetails[] = ComponentData;
  draggingIndex:number;
  constructor(private modalService: NgbModal,config: NgbModalConfig) { 
    config.backdrop = 'static';
		config.keyboard = false;
    config.size = 'lg';
    config.centered=true;
  }
  
  ngOnInit() {
   
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.CompactLeft,
      displayGrid:DisplayGrid.None,
      minCols: 6,
      minRows: 6,
      margin:1,
      mobileBreakpoint: 640,     
      pushItems: true, 
      setGridSize: true,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      addEmptyRowsCount: 2, 
     
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };
  }

  onDragStart(index: number): void {
    this.draggingIndex = index;
  }

  onDragEnd(index: number): void {
    this.items.push(this.data[index])
    setTimeout(()=>{
      this.loadComponent(this.data[index]);
    },300)
    
  }
  loadComponent(component: any) {
    if(component)
    {
      const index = componentConfig.findIndex(c=>c.name == component.controlName);  
      this.container.last.createComponent(componentConfig[index].component);
    }
  }
  
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  onControlSettingClick($event: MouseEvent | TouchEvent, item:any):void
  {
    $event.preventDefault();
    $event.stopPropagation();
    const modalRef =  this.modalService.open(TextboxSettingsComponent);
    modalRef.componentInstance.activeModal = this.modalService
    
    
  }

  removeItem($event: MouseEvent | TouchEvent, item:any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.items.splice(this.items.indexOf(item), 1);
  }

  onSaveLayoutClick()
  {
    localStorage.setItem('layout', '');
  }
 

}
