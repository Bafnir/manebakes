import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule] // Importar RouterModule para que funcione routerLink
})
export class HeaderComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
