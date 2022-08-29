import { Component } from '@angular/core';
import { AlertifyService } from './services/admin/alertify.service';
import { CustomToastrMessageType, CustomToastrPosition, CustomToastrService } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';

  constructor(private customToastr:CustomToastrService) {
    customToastr.Message("furkan",{messageType:CustomToastrMessageType.Error,position:CustomToastrPosition.BottomLeft})
  }
}

