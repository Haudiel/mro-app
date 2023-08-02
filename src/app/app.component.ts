import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mro-app';

  constructor(public router: Router, private navigationService: NavigationService) {
  }

  showButton(): boolean {
    return this.navigationService.getEnteredSecondPage();
  }
}
