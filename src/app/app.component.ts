import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user = 'placeholder';

  constructor(
    private themeService: ThemeService,
    private kc: KeycloakService,
    ) {}

  showAlert = false;
  showSubnav = false;
  showSidenav = true;

  title = 'itt';

  ngOnInit(): void {
    this.kc.loadUserProfile().then((rs) => {
      this.user = rs.email;
    });
  }

  setLightTheme(): void {
    this.themeService.setTheme(0);
  }

  setDarkTheme(): void {
    this.themeService.setTheme(1);
  }

  logout() {
    this.kc.logout(window.location.origin + '/');
  }
}
