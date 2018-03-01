import { Component, OnInit, Input } from '@angular/core';
import { IMovies } from '../movies';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})

export class SubmittedComponent implements OnInit {

  @Input() movieDetail;

  imageUrl = 'assets/moviepic.jpg';

  movieList: IMovies;  

  constructor() { }

  ngOnInit() {
  }

}
