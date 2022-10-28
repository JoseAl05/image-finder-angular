import { Component, OnInit } from '@angular/core';
import { Image } from './models/image.model';
import { ImageService } from './services/image.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  query: string = '';


  constructor() {
  }


  ngOnInit(): void {}


}
