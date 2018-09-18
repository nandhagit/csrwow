import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutvideoComponent } from './aboutvideo/aboutvideo.component';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private videoDialog: MatDialog) { }

  ngOnInit() {
  }

  openvideo(){
    this.videoDialog.open(AboutvideoComponent, {width:'500px', height:'400px'})
  }

}
