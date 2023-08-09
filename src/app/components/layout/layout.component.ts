import {  Component, ComponentFactoryResolver, Input, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { CompactType, DisplayGrid, GridType, GridsterConfig, GridsterItem } from 'angular-gridster2';
import { TextboxControlComponent } from '../form-component/textbox-control/textbox-control.component';
import { ButtonControlComponent } from '../form-component/button-control/button-control.component';
import { DropdownControlComponent } from '../form-component/dropdown-control/dropdown-control.component';
import { ComponentDetails } from '../form-component/component.type';
import ComponentData from '../form-component/components.json';

const componentConfig = [
{ 
  name:"TextBox",
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
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() ComponentName:string;
  @ViewChildren('container',{ read: ViewContainerRef }) container:any;
  options!: GridsterConfig;
  items: Array<GridsterItem> = [];
  data :ComponentDetails[] = ComponentData;
  draggingIndex:number;
  constructor() { }
  
  ngOnInit() {
   
    this.options = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      displayGrid:DisplayGrid.None,
      minCols: 6,
      minRows: 6,
      margin:1,
      mobileBreakpoint: 640,     
      setGridSize: true,
      pushItems: true,
      // fixedColWidth: 10,
      // fixedRowHeight: 10,

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
    console.log('start')
  }

  onDragEnd(index: number): void {
    this.items.push(this.data[index])
    setTimeout(()=>{
      this.loadComponent(this.data[index]);
    },300)
    
  }
  private loadComponent(component: any) {
    debugger
    if(component)
    {
      const index = componentConfig.findIndex(c=>c.name == component.controlName);
     // this.container.clear();
      this.container.last.createComponent(componentConfig[index].component);
    }
  }
  
  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item:any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.items.splice(this.items.indexOf(item), 1);
  }


 

}
