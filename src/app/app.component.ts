import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPageTitle: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Aquí obtienes la URL actual
        const currentRoute = this.router.url;
        // Puedes manipular la URL para mostrar solo la parte relevante que deseas en la cabecera
        const routeParts = currentRoute.split('/');
        const pageTitle = routeParts[routeParts.length - 1]; // Toma la última parte de la URL como título de la página
        // Asigna el título de la página a una propiedad para mostrarlo en la cabecera
        this.currentPageTitle = pageTitle;
      }
    });
  }

  ngOnInit() { 
    this.router.events.subscribe((event) => { 
        if (!(event instanceof NavigationEnd)) { 
            return; 
        } 
        window.scrollTo(0, 0) 
    }); 
} 
}
