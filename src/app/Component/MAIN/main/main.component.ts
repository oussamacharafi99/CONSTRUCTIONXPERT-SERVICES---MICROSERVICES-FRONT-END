import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginDto } from 'src/app/dto/LoginDto';
import { Role } from 'src/app/enums/Role';
import { Person } from 'src/app/model/Person';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  @ViewChild('container', { static: true }) container!: ElementRef;

  onSignUpClick(): void {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSignInClick(): void {
    this.container.nativeElement.classList.remove('right-panel-active');
  }

  
    loginForm!: FormGroup;
    errorMessage: string | null = null;
  
    constructor(
      private fb: FormBuilder,
      private service: ServiceService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.valide();
      this.signUpForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        role: [Role.CUSTOMER, Validators.required]
  
      });
    }
  
    valide() {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  
    onSubmit(): void {
      if (this.loginForm.invalid) {
        return;
      }
  
      const loginRequest: LoginDto = this.loginForm.value;
  
      this.service.signin(loginRequest).subscribe({
        next: (response) => {
          console.log(response)
          const { token} = response;
          localStorage.setItem('jwt', token);
  
          const decodedToken: any = jwtDecode(response.token);
          console.log(decodedToken);
  
  
          if (decodedToken.roles.includes(Role.ADMIN)) {
            alert("you are admin")
            this.router.navigate(['/dashboard']);
          } 
          else if (decodedToken.roles.includes(Role.CUSTOMER)) {
            alert("you are user")
            this.router.navigate(['/dashboard']);
          } 
           else {
            this.router.navigate(['/add_project']);
          }
  
         
        },
        error: (err) => {
          this.errorMessage = 'Invalid username or password';
        }
      });
    }

    signUpForm!: FormGroup;


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
