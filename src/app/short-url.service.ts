import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  constructor(private http: HttpClient) { }
    
  shortMyUrlService(shortMyUrl:any){
    return this.http.post("http://localhost:3000/url/post-url", shortMyUrl)
  }
}
