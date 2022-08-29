import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr:ToastrService) { }

  Message(message:string,toastrOptions:Partial<CustomToastrOptions>){
      this.toastr[toastrOptions.messageType](message,"",{positionClass:toastrOptions.position});
  }
}

export class CustomToastrOptions{
  messageType:CustomToastrMessageType
  position:CustomToastrPosition
}

export enum CustomToastrMessageType{
  Error = "error",
  Success = "success",
  Warning = "warning",
  Info="info"
}

export enum CustomToastrPosition{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
}
