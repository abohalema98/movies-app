import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=cece767a5bbb7a5cbbdd6d9b46615ce0'
    );
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=cece767a5bbb7a5cbbdd6d9b46615ce0&language=en-US&page=1'
    );
  }

  
  getPopularMovies(): Observable<any> {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=cece767a5bbb7a5cbbdd6d9b46615ce0&language=en-US&page=1'
    );
  }



}
