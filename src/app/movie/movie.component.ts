import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '..//movie.service';
import { IMovies, IMoviesModel } from '..//movies';
import { IMovieRating } from '..//rating';
import { MovieratingService } from '../movierating.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {

  movieArray: IMovies[] = [];
  movieRating: IMovieRating[] = [];

  movieM: IMoviesModel;
  movieDetail: IMovies;

  
  constructor(private movieService: MovieService, private movieratingService: MovieratingService) { }

  ngOnInit() {

    this.movieM = {
      movieName: '',
      releaseDate: '',
      description: '',
      movieRating: '', 
    };

    this.movieRating = this.movieratingService.getMovieRating()
  }

  addMovies(values) {
    this.movieDetail = {
      movieName: values.movieName,
      releaseDate: values.releaseDate,
      description: values.description,
      movieStar: values.movieRating,  
    };
    
    this.movieService.addMovies(this.movieDetail);
    
    this.movieArray = this.movieService.getMovies();      
   
  };
  
  resetForm(movieForm) {
    movieForm.reset();
  };

}
