import { Component, HostListener  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CyberSecNotes';
  isHeaderVisible = true;
  lastScrollTop = 0;
  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll === 0) {
      this.isHeaderVisible = true;
    } else {
      this.isHeaderVisible = false;
    }
    this.checkScroll();
  }
  toggleMenu() {
    this.isHeaderVisible = !this.isHeaderVisible; // Cambia la visibilidad del menú
  }

  checkScroll() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollButton = document.querySelector('.scroll-top-button');
    const scrollButton2 = document.querySelector('.scroll-top-button') as HTMLElement;
    if (scrollButton) {
      if (scrollPosition > 300) {
        scrollButton.classList.add('show');
        scrollButton2.style.opacity = '1';
      } else {
        scrollButton.classList.remove('show');
        scrollButton2.style.opacity = '0';
      }
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
