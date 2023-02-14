import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public isDropdownHidden: boolean = true;

  onBurgerMenuClick() {
    this.isDropdownHidden = !this.isDropdownHidden;
  }
}
