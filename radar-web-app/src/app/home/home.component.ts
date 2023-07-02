import { Component, OnInit } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  username='';
  email = '';
  fullname = '';

  constructor(private keycloakService: KeycloakService) { 
    
  }

  ngOnInit(): void {
    this.intializeOption();
  }

  intializeOption() {
    this.username = this.keycloakService.getUsername();
    this.email = this.getEmail();
    this.fullname = this.getFullName();

  }

  getEmail(): string {
    const idToken = this.keycloakService.getKeycloakInstance().idTokenParsed;
    return idToken?.['email'] || '';
  }
  getFullName(): string {
    const idToken = this.keycloakService.getKeycloakInstance().idTokenParsed;
    return idToken?.['name'] || '';
  }


  public logout () {
    this.keycloakService.logout();
  }

}
