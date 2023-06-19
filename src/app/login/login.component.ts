import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  //data: any;
  username!: string;
  password!: string;
  formdata!: FormGroup;
  constructor(private r1: RecordService, private router: Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl('chrajnalwar@gmail.com'),
      password: new FormControl('chandroday'),
    });
  }

  onclicksubmit(data: any) {
    this.username = data.username;
    this.password = data.password;

    let responce = this.r1.login(this.username, this.password);
    if (responce == true) {
     this.router.navigate(['/loggedin']);
    }
    else {
      this.router.navigate(['/notloggedin']);
     }
  }

}


