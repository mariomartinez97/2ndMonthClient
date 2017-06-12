import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router';
import { SecuritiesService } from '../services/securities.service';
import {FilterPipe} from '../components/pipes';

@Component({
  selector: 'br-listview',
  templateUrl: './templates/list-view.component.html',
  styleUrls: ['./styles/list-view.component.css'],
  providers: [SecuritiesService]
})

export class ListViewComponent implements OnInit {


  posts: string[];
  prices: string[];


  constructor(private securitiesService: SecuritiesService) {


  		this.securitiesService.getSecurities().subscribe(posts => {
      this.posts = posts;
      //console.log(posts);
    });
  }
  ngOnInit():void{
  }
}
