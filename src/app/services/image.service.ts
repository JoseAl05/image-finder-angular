import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL = 'http://localhost:4000/api/getImages'

  constructor(private http: HttpClient) { }

  getImages(query:string,page:number):Observable<Image[]>{
    return this.http.get(this.URL + `?query=${query}&page=${page}`) as Observable<Image[]>;
  }


}
