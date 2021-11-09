import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {

  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';
  moviesList: any = [];
  topRatedMovies: any = [];

  constructor(private moviesServices: MoviesService) {}

  ngOnInit(): void {
    this.moviesServices.getTrendingMovies().subscribe((moviesResult) => {
      this.moviesList = moviesResult.results.slice(10, 19);
      // console.warn(this.moviesList);
    });

    this.moviesServices.getPopularMovies().subscribe((moviesResult) => {
      this.topRatedMovies = moviesResult.results.slice(0, 9);
      // console.warn(this.topRatedMovies);
    });
  }

  
}
