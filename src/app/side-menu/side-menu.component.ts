import { Component,ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  
})
export class SideMenuComponent {

  breadcrumbItems: MegaMenuItem[] = [];

  tieredItems: MegaMenuItem[] = [];
  gfg: MegaMenuItem[] = [];
  items: MegaMenuItem[] = [];

  routeItems: MegaMenuItem[] = [];

  megaMenuItems: MegaMenuItem [] = [];

  panelMenuItems: MegaMenuItem[] = [];

  stepsItems: MegaMenuItem[] = [];

  slideItems: MegaMenuItem[] = [];

  menuItems: MegaMenuItem [] = [];

  plainMenuItems: MegaMenuItem[] = [];
  ngOnInit() {

    this.gfg = [ 
      { 
        label: 'DSA - Self Paced', 
        items: [ 
          [ 
            { 
              label: 'Batch 1', 
              items: [{ label: 'Batch 1.1' },  
              { label: 'Batch 1.2' }], 
            }, 
            { 
              label: 'Batch 2', 
              items: [{ label: 'Batch 2.1' },  
              { label: 'Batch 2.2' }], 
            }, 
          ], 
          [ 
            { 
              label: 'Batch 3', 
              items: [{ label: 'Batch 3.1' },  
              { label: 'Batch 3.2' }], 
            }, 
            { 
              label: 'Batch 4', 
              items: [{ label: 'Batch 4.1' },  
              { label: 'Batch 4.2' }], 
            }, 
          ], 
        ], 
      }, 
  
      { 
        label: 'COmplete Interview Preparation', 
        items: [ 
          [ 
            { 
              label: 'Batch 1', 
              items: [{ label: 'User 1.1' },  
              { label: 'User 1.2' }], 
            }, 
            { 
              label: 'Batch 2', 
              items: [{ label: 'Batch 2.1' },  
              { label: 'Batch 2.2' }], 
            }, 
          ], 
          [ 
            { 
              label: 'Batch 3', 
              items: [{ label: 'Batch 3.1' },  
              { label: 'Batch 3.2' }], 
            }, 
            { 
              label: 'Batch 4', 
              items: [{ label: 'Batch 4.1' },  
              { label: 'Batch 4.2' }], 
            }, 
          ], 
          [ 
            { 
              label: 'Batch 5', 
              items: [{ label: 'Batch 5.1' },  
              { label: 'Batch 5.2' }], 
            }, 
            { 
              label: 'Batch 6', 
              items: [{ label: 'Batch 6.1' },  
              { label: 'Batch 6.2' }], 
            }, 
          ], 
        ], 
      }, 
    ]; 

    /*this.tieredItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Conceptos',
        icon: 'pi pi-book',
        //routerLink: '/hackingWeb',
        items: [
            {
                label: 'SQL Injection',
                icon: 'pi pi-database',
                routerLink: '/sql-injection'
            },
            {
              label: 'XSS',
              icon: 'pi pi-code',
              routerLink:'/xss'
          }
        ]
      },
      {
        label: 'Escaneo y reconocimiento',
        icon: 'pi pi-search',
        //routerLink: '/hackingWeb',
        items: [
          {
            label: 'Escaneo',
            icon: 'pi pi-map',
            routerLink: '/nmap',
          },
          {
            label: 'Reconocmiento',
            icon: 'pi pi-id-card',
            routerLink:'/xss'
          }
        ]
      },
      {
        label: 'Hacking Web',
        icon: 'pi pi-globe',
        //routerLink: '/hackingWeb',
        items: [
          {
              label: 'SQL Injection',
              icon: 'pi pi-database',
              routerLink: '/sql-injection'
          },
          {
            label: 'XSS',
            icon: 'pi pi-code',
            routerLink:'/xss'
          },
          {
            label: 'Local File Inclusion',
            icon: 'pi pi-file',
            routerLink:'/lfi'
          }
        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [
            {
                label: 'Online',
                icon: 'pi pi-user',
                routerLink: '/onlinePasswordAttack'
            },
            {
              label: 'Offline',
              icon: 'pi pi-times',
              routerLink:'/offlinePasswordAttack'
          }
        ]
      }
    ]; */
  } 
}
