import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL = 'https://image-finder-server-production.up.railway.app/api/getImages'

  constructor(private http: HttpClient) { }

  getImages(query:string,page:number):Observable<Image[]>{
    return this.http.get(this.URL + `?query=${query}&page=${page}`) as Observable<Image[]>;
  }


}
