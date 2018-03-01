import { Injectable } from '@angular/core';
import { IMovies } from './movies';
import { IMovieRating } from './rating';

@Injectable()
export class MovieService {

  movieList: IMovies[] = [];

  constructor() { }

  addMovies(movieDetail: IMovies) {
    this.movieList.push(movieDetail);
  }

  getMovies(): IMovies [] {
    return this.movieList;
  }
}
