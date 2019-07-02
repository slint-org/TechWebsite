import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object;

  constructor(private data: DataService) { }
  
h1Style: boolean = false;
  ngOnInit() {
    this.users = this.data.getUsers();
    // this.data.getUsers().subscribe(data => {
    //   this.users = data;
    //   console.log(this.users);
    //     }
    //  );
  }

  changeCss(){
    console.log('Clicked Worked')
    this.h1Style= !this.h1Style;
  }

  firstClick(){
      this.data.firstClick();
  }

}
