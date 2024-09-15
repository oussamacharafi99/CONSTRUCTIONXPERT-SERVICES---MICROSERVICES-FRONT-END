import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeLink: string = '';
  username : string = '';

  constructor() { }

  ngOnInit(): void {
    this.activeLink = '/dashboard';
    this.loadUserName();

  }

  setActive(link: string): void {
    this.activeLink = link;
  }

  loadUserName(): void {
    const jwtData = localStorage.getItem('jwtData');
    if (jwtData) {
      const jwtToken = JSON.parse(jwtData).token;
      const decodedToken: any = jwtDecode(jwtToken);
  
      this.username = `${decodedToken.sub}`;
    } else {
      console.log('JWT not found!');
    }
  }
}
