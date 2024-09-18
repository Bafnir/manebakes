import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: true,
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  imports: [FontAwesomeModule],
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  faFacebook = faFacebook;
  faWhatsapp = faWhatsapp;
}
