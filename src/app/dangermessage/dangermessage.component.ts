import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dangermessage',
  template: `
  <button id="btn1" href="#" onclick="document.getElementById('hiddenText').style.display='block'; return false;">
  DANGER!!</button>
  <div style="display: none;" id="hiddenText"><p>severe danger ahead.</p>
  
  `,
  styles: [`
  
  button#btn1{
    color:red;
    font-size: 50px;
    font-weight: bold;
    padding:35px 3px;
}
p{
    font-size:20px;
    color: red;
    font-weight: bold;
}
  `]
})
export class DangermessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
