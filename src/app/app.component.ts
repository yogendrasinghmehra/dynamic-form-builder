import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  droppedItemDetails = {};
  ngOnInit() {
    
  }

  receiveMessage($event:any) {
    this.droppedItemDetails = $event;
  }
  
}
