import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPageTitle: string = '';

  @ViewChild('mainContent') mainContent!: ElementRef;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("NavigationEnd event detected");
        const currentRoute = this.router.url;
        const routeParts = currentRoute.split('/');
        const pageTitle = routeParts[routeParts.length - 1];
        this.currentPageTitle = pageTitle;
        this.scrollToTop();
      }
    });
  }
  scrollToTop() {
    if (this.mainContent && this.mainContent.nativeElement) {
      this.mainContent.nativeElement.scroll({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
    }
  }
}
