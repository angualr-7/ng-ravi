import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EventService {
  public eventEmmiter = new EventEmitter<any>();
  public deleteVlaue = new EventEmitter<any>();
  constructor() {}

  getEvent(value) {
    this.eventEmmiter.emit(value);
  }
  showEvent(callback) {
    this.eventEmmiter.subscribe(resp => callback(resp));
  }

  getDeleteUser(value) {
    this.deleteVlaue.emit(value);
  }
  showDeleteVlaue(callback) {
    this.deleteVlaue.subscribe(resp => callback(resp));
  }
}
