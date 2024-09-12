import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/Person';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup;

 constructor(private fb: FormBuilder,
  private service: ServiceService,
  private router: Router){

 }
  ngOnInit(): void {
   this.signUpForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]

    });
  }


  signUp() {
    if (this.signUpForm.valid) {
      const signUpRequest: Person = this.signUpForm.value;
      this.service.signup(signUpRequest).subscribe(() => {
      });
      console.log(signUpRequest)
    }

    this.signUpForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: ['', Validators.required]

      });

  }
}
