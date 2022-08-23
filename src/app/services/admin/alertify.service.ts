import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

declare var alertify:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  Message(message:string,messageType:MessageType,position:Position,dismissOthers:Boolean = false,wait:Number = 3){
    alertify.set('notifier','position', position);
    const messageObject = alertify[messageType](message,wait);
    if(dismissOthers)
      messageObject.dismissOthers();
  }

  DissmisAll(){
    alertify.dismissAll();
  }
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
