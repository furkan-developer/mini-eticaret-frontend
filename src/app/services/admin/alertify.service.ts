import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  Message(message:string,alertfiyOptions:Partial<AlertifyOptions>){
    alertify.set('notifier','position', alertfiyOptions.position);
    const messageObject = alertify[alertfiyOptions.messageType](message,alertfiyOptions.wait);
    if(alertfiyOptions.dismissOthers)
      messageObject.dismissOthers();
  }

  DissmisAll(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  dismissOthers:Boolean = false
  wait:Number = 3
  position:Position
  messageType:MessageType
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Success = "success",
  Warning = "warning"
}

export enum Position{
  TopRight = "top-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}
