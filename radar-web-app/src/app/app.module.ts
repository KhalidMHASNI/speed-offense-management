import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { InfractionsComponent } from './infractions/infractions.component';
import { InfractiondetailComponent } from './infractiondetail/infractiondetail.component';
import { VehicledetailComponent } from './vehicledetail/vehicledetail.component';
import { RadarComponent } from './radar/radar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadardetailComponent } from './radardetail/radardetail.component';
import { HomeComponent } from './home/home.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'radarmax-realm',
        clientId: 'radarmax-client',
      },
      initOptions: {
        onLoad: 'login-required',
        flow: 'standard',
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    InfractionsComponent,
    InfractiondetailComponent,
    VehicledetailComponent,
    RadarComponent,
    RadardetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
