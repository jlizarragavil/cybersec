import { Component, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',

})
export class SideMenuComponent {

  breadcrumbItems: MenuItem[] = [];

  tieredItems: MenuItem[] = [];
  gfg: MenuItem[] = [];
  items: MenuItem[] = [];

  routeItems: MenuItem[] = [];

  megaMenuItems: MenuItem[] = [];

  panelMenuItems: MenuItem[] = [];

  stepsItems: MenuItem[] = [];

  slideItems: MenuItem[] = [];

  menuItems: MenuItem[] = [];

  plainMenuItems: MenuItem[] = [];
  ngOnInit() {

    this.tieredItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home',
        styleClass: 'menuItemColor'
      },
      {
        label: 'Conceptos',
        icon: 'pi pi-book',
        styleClass: 'menuItemColor',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Shell reversa',
          icon: 'pi pi-sync',
          styleClass: 'menuItemColor',
          routerLink: '/revershell'
        },
        {
          label: 'SQL Injection',
          icon: 'pi pi-database',
          styleClass: 'menuItemColor',
          routerLink: '/sql-injection'
        },
        {
          label: 'XSS',
          styleClass: 'menuItemColor',
          icon: 'pi pi-code',
          routerLink: '/xss'
        }

        ]
      },
      {
        label: 'Escaneo y reconocimiento',
        icon: 'pi pi-search',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Escaneo',
          icon: 'pi pi-map',
          routerLink: '/nmap',
        },
        {
          label: 'Reconocmiento',
          icon: 'pi pi-id-card',
          routerLink: '/xss'
        }

        ]
      },
      {
        label: 'Hacking Web',
        icon: 'pi pi-globe',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'SQL Injection',
          icon: 'pi pi-database',
          routerLink: '/sql-injection'
        },
        {
          label: 'XSS',
          icon: 'pi pi-code',
          routerLink: '/xss'
        },
        {
          label: 'Local File Inclusion',
          icon: 'pi pi-file',
          routerLink: '/lfi'
        },
        {
          label: 'Remote File Inclusion',
          icon: 'pi pi-file',
          routerLink: '/rfi'
        }
        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Ataques a contraseñas',
        icon: 'pi pi-shield',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Online',
          icon: 'pi pi-user',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Offline',
          icon: 'pi pi-times',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      }
    ];
  }
}
