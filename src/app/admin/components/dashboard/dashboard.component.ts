import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private alertifyService:AlertifyService) { }

  ngOnInit(): void {
  }

  show(){
    this.alertifyService.Message("furkan",MessageType.Success,Position.TopCenter)
  }

  dismissAll(){
    this.alertifyService.DissmisAll();
  }
}
