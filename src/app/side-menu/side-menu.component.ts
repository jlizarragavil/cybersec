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
        items: [
          {
            label: 'Sistema operativo',
            icon: 'pi pi-sitemap',
            styleClass: 'menuItemColor',
            routerLink: '/revershell'
          },
          {
          label: 'Fases',
          icon: 'pi pi-list',
          styleClass: 'menuItemColor',
          routerLink: '/revershell'
        },
        {
          label: 'Shell reversa',
          icon: 'pi pi-sync',
          styleClass: 'menuItemColor',
          routerLink: '/revershell'
        }]
      },
      {
        label: 'Escaneo y enumeracion',
        icon: 'pi pi-search',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Escaneo',
          icon: 'pi pi-map',
          routerLink: '/nmap',
        },
        {
          label: 'Enumeracion de servicios',
          icon: 'pi pi-server',
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
        },
        {
          label: 'Unrestricted file upload',
          icon: ' pi pi-file-o',
          routerLink: '/rfi'
        },
        {
          label: 'Reconocmiento',
          icon: 'pi pi-id-card',
          routerLink: '/xss'
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
        label: 'Explotacion',
        icon: 'pi pi-flag-fill',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Servicios',
          icon: 'pi pi-folder-open',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Metasploit',
          icon: 'pi pi-desktop',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Post Explotacion',
        icon: 'pi pi-flag-fill',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Escalada de privilegios',
          icon: 'pi pi-arrow-up',
          routerLink: '/onlinePasswordAttack'
        },
        {
          label: 'Pivoting',
          icon: 'pi pi-arrow-right-arrow-left',
          routerLink: '/offlinePasswordAttack'
        }

        ]
      },
      {
        label: 'Auditorias Wifi',
        icon: 'pi pi-wifi',
        //routerLink: '/hackingWeb',
        items: [{
          label: 'Aircrack-ng',
          icon: 'pi pi-wifi',
          routerLink: '/onlinePasswordAttack'
        }

        ]
      }
    ];
  }
}
