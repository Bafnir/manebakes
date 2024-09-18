import { Component, HostListener } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  // Escuchar el evento de scroll
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const maxZoomOut = 145; // Definimos el tamaño mínimo para el zoom out (100%)
    const zoomFactor = Math.max(150 - scrollPosition / 10, maxZoomOut); // Ajustar la imagen desde 200%

    const heroSection = document.querySelector('.hero') as HTMLElement;
    if (heroSection) {
      heroSection.style.backgroundSize = `${zoomFactor}%`;
    }
  }
}
