import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	user:any = {};

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login() {
  	if(this.user.name && this.user.password) {
  		localStorage.setItem('name',this.user.name);
  		this.router.navigate(['/']);
  	}

  }

}
