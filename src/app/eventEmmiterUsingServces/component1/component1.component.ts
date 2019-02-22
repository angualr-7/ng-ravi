import { Component, OnInit } from "@angular/core";
import { EventService } from "../event.service";

@Component({
  selector: "app-component1",
  templateUrl: "./component1.component.html",
  styleUrls: ["./component1.component.scss"]
})
export class Component1Component implements OnInit {
  public userName: string;
  public msg: string;
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.showDeleteVlaue(resp => {
      console.log("resp", resp);
      this.msg = resp;
    });
  }

  click(userName: string) {
    this.eventService.getEvent(userName);
    this.userName = "";
  }
}
