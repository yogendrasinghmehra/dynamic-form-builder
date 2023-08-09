import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messageSource = new BehaviorSubject(null);
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeMessage(message: any) {
    this.messageSource.next(message)
  }
}
