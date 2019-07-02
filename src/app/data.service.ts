import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  firstClick() {
    return console.log('clicked');
  } 
  getUsers() {
    //this.http.get('https://reqres.in/api/users')
    
    return  {  
      "page":1,
      "per_page":3,
      "total":12,
      "total_pages":4,
      "data":[  
         {  
            "id":1,
            "email":"george.bluth@reqres.in",
            "first_name":"George",
            "last_name":"Bluth",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
            "website": "GeaorgeWebsite.com"
         },
         {  
            "id":2,
            "email":"janet.weaver@reqres.in",
            "first_name":"Janet",
            "last_name":"Weaver",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
            "website": "www.JanetWeaverWebsite.com"
         },
         {  
            "id":3,
            "email":"emma.wong@reqres.in",
            "first_name":"Emma",
            "last_name":"Wong",
            "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
            "website": "www.EmmaWongWebsite.com"
         }
      ]
   }
  }

  
}


