import { Injectable } from '@angular/core';
import { IMovieRating } from './rating';

@Injectable()
export class MovieratingService {

  movieRating: IMovieRating[] = [];

  constructor() { }

  getMovieRating() {
    return this.movieRating = [
      {
        id: 1,
        type: ''
      },
      {
        id: 1,
        type: ''
      },
      {
        id: 2,
        type: ''
      },
      {
        id: 2,
        type: ''
      },
      {
        id: 5,
        type: ''
      },      
    ]
  }
}
