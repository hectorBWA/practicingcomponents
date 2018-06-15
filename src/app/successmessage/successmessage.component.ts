import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'successmessage',
  templateUrl: './successmessage.component.html',
  styles: [`
    .success {
      color: green;
      font-size:50px;
      font-weight: bold;
      padding:0px;
  }
  p[class$="success2"]{
    color:green;
    font-weight: bold;
    font-size: 20px;
  }
  
  `]
})
export class SuccessmessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
