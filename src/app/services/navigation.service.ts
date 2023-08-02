import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private hasEnteredSecondPage: boolean = false;

  setEnteredSecondPage(value: boolean) {
    this.hasEnteredSecondPage = value;
  }

  getEnteredSecondPage() {
    return this.hasEnteredSecondPage;
  }
}
