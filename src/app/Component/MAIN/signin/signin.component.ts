import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { LoginDto } from 'src/app/dto/LoginDto';
import { Role } from 'src/app/enums/Role';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.valide();
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
          this.router.navigate(['/user']);
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
}
