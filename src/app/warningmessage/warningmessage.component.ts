import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warningmessage',
  template: `
  

  <button id="btn3" href="#" onclick="document.getElementById('hiddenText3').style.display='block'; return false;">
    <h1 [ngStyle]="{'color': 'orange', 'font-size': '50px', 'font-weight': 'bold'}">WARNING!!</h1>
  </button>
  <div style="display: none;" id="hiddenText3">
  <p [ngStyle]="{'color': 'orange', 'font-size': '20px', 'font-weight': 'bold'}">you have been warned.</p>

  
  `,
  styleUrls: ['./warningmessage.component.css']
})
export class WarningmessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
