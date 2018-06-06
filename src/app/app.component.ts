import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  componentSelected: boolean = false;
  index: number;

  selectComponent(){
    this.componentSelected = true;
    this.index = Math.floor(Math.random() * 3);
    console.log('index', this.index);
  }
}

