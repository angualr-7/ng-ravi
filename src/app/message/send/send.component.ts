import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-send",
  templateUrl: "./send.component.html",
  styleUrls: ["./send.component.scss"]
})
export class SendComponent implements OnInit {
  public input2: string;

  @Input() sendMessage;
  @Output() sendBackMessage = new EventEmitter<any>();

  public myMessage = "";

  getMessageList = [];
  constructor() {}

  ngOnInit() {
    //
  }
  ngOnChanges() {
    console.log(
      "this.sendMessage",
      this.sendMessage,
      this.getMessageList.length > 0
    );

    this.getMessageCall(this.sendMessage);
  }

  clickSend(val) {
    this.myMessage = val;
    this.sendBackMessage.emit(this.myMessage);
    this.getMessageCall(this.myMessage);
    this.input2 = "";
  }

  getMessageCall(value) {
    console.log("value");
    if (value) {
      this.getMessageList.push(value);
    }
  }
}
