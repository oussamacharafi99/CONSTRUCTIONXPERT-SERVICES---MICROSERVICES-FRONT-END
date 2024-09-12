import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent {
  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout().then(() => {
      // Redirect to Keycloak logout endpoint with correct parameters
      window.location.href = 'http://localhost:8080/realms/micro/protocol/openid-connect/logout?post_logout_redirect_uri=http://localhost:4200';
    }).catch(error => {
      console.error('Logout failed', error);
      alert('Logout failed, please try again.');
    });
  }
}
