import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"]
})
export class MessageComponent implements OnInit {
  constructor() {}
  input1;
  sendMessage = "";
  reseveMessage;
  getMessageList = [];

  ngOnInit() {}

  sendMsg(val) {
    console.log("val", val);
    this.sendMessage = val;
    this.getMessageCall(val);
    this.input1 = "";
  }

  reciveMessage(event) {
    this.reseveMessage = event;
    console.log("event", event);
    this.getMessageCall(event);
  }

  getMessageCall(value) {
    this.getMessageList.push(value);
  }
}
