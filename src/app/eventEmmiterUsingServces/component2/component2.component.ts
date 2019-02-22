import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-component2",
  templateUrl: "./component2.component.html",
  styleUrls: ["./component2.component.scss"]
})
export class Component2Component implements OnInit {
  userList = [];
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.showEvent(data => {
      console.log("data", data);
      this.userList.push(data);
    });
  }

  click(item) {
    console.log("item", item);
    this.userList.slice(item);
    const index: number = this.userList.indexOf(item);
    if (index !== -1) {
      this.userList.splice(index, 1);
    }
    this.eventService.getDeleteUser(item);
  }
}
