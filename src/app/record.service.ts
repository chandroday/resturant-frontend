import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private h1:HttpClient) { }

  isuserloggedin:any;
  
  login(username:string,password:string)
    {

      this.isuserloggedin = (username == 'chrajnalwar@gmail.com' &&  password == 'chandroday' );
      
      localStorage.setItem("isuserloggedin",this.isuserloggedin ? "true" : "false" );
      
      return (this.isuserloggedin);
    }
}
