import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private themeService: ThemeService) {}

  showAlert = false;
  showSubnav = false;
  showSidenav = true;

  title = 'itt';

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  setLightTheme(): void {
    this.themeService.setTheme(0);
  }

  setDarkTheme(): void {
    this.themeService.setTheme(1);
  }
}
