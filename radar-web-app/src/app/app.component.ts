import { Component, OnInit } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{  
  title = 'radar-web-app';
  constructor(private keycloakService: KeycloakService) { 
    
  }

  ngOnInit(): void {
  }

  public logout () {
    this.keycloakService.logout();
  }
}
