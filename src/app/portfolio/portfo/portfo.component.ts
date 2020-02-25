import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-portfo',
  templateUrl: './portfo.component.html',
  styleUrls: ['./portfo.component.css']
})
export class PortfoComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 8000);
  }

}
