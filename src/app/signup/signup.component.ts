import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	user:any = {};

  constructor(private router:Router) { }

  ngOnInit() {
  }
  signup() {
  	if(this.user.name && this.user.password) {
  		localStorage.setItem('name',this.user.name);
  		this.router.navigate(['/']);
  	}

  }

}
