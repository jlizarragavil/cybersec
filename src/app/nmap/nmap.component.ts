import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { NmapTable } from '../model/NmapTable';
import { Table } from 'primeng/table';
import { Location } from '@angular/common';
interface Section {
  label: string;
  subSections?: Section[];
}

@Component({
  selector: 'app-nmap',
  templateUrl: './nmap.component.html',
  styleUrl: './nmap.component.css'
})
export class NmapComponent {
  pageTitle: string = '';
  sections: Section[] = [
    { label: 'Que es XSS'},
    { label: 'Reflected XSS',
    subSections: [
      { label: 'Ejemplos' },
      { label: 'Test', 
        subSections: [
          { label: 'Subtest' }
        ]
      }
    ]
     },
     { label: 'Stored XSS',
    subSections: [
      { label: 'Ejemplo1: Alert' },
      { label: 'Ejemplo2: Robo de cookie', 
        //subSections: [
          //{ label: 'Subtest' }
        //]
      }
    ]
     }
  ];
  nmapPorts:  string = `sudo nmap -p- --open --min-rate 5000 -sS -n -Pn [IP] -vvv -oN openPorts`;
  nmapServices:  string = `nmap -p[openPorts] -sCV [IP] -vvv -oN services`;
  nmap:  string = `nmap <tipo de escaneo> <opciones> <objetivo>`;
  comando:  string = 'comando';
  //tablaHostDiscovery: NmapTable[] = [];
  tablaEscaneo: NmapTable[] = [];
  tablaHostDiscovery = [
    {opcion: '-iL', nombre: 'List Scan', descripcion:'lista los objetivos a explorar'},
    {opcion: '-sn', nombre: 'Ping Scan', descripcion:'desactiva la exploración de puertos'},
    {opcion: '-Pn', nombre: 'Treat all hosts as online', descripcion:'omitir el descubrimiento de hosts'},
    {opcion: '-PS/PA/PU/PY[portlist]', nombre: 'TCP SYN/ACK', descripcion:'qDescubrimiento TCP SYN/ACK, UDP o SCTPqq'},
    {opcion: '-PE/PP/PM', nombre: '', descripcion:'Descubrimiento ICMP eco, timestamp, solicitud de máscara de red'},
    {opcion: '-PO [protocol list]', nombre: '', descripcion:'Ping de protocolo IP'},
    {opcion: '-n/-R', nombre: '', descripcion:'Nunca/no resolver DNS/Resolver siempre'},
    {opcion: '--dns-servers <serv1[, serv2],...>', nombre: '', descripcion:'qqEspecificar servidores DNS personalizadosq'},
    {opcion: '--system-dns', nombre: '', descripcion:'Usar el resolver DNS del sistema operativo'},
    {opcion: '--traceroute', nombre: '', descripcion:'Rastrear ruta de salto a cada host'}
  ];
  tablaScan = [
    {opcion: '--sS/sT/sA/sW/sM', nombre: '', descripcion:'Escaneos TCP SYN/Connect()/ACK/Window/Maimon'},
    {opcion: '-sU', nombre: '', descripcion:'Escaneo UDP'},
    {opcion: '-n', nombre: '', descripcion:'No hacer resolucion DNS'},
    {opcion: '--scanflafs <flags>', nombre: '', descripcion:'Personalizar banderas de escaneo TCP'},
    {opcion: '-sI <zombie host[:probeport]>', nombre: '', descripcion:'Escaneo en reposo'},
    {opcion: '-sY/sZ', nombre: '', descripcion:'Escaneos SCTP INIT/COOKIE-ECHO'},
    {opcion: '-sO', nombre: '', descripcion:'Escaneo de protocolo IP'},
    {opcion: '--b <FTP relay host>', nombre: '', descripcion:'Escaneo de retransmisión FTP'}
  ];
  tablaPuertos = [
    {opcion: '-p <port ranges>', nombre: '', descripcion:'Escanear solo los puertos especificados'},
    {opcion: '--exclude-ports <port range>', nombre: '', descripcion:'Excluir los puertos especificados'},
    {opcion: '-F', nombre: 'Fast mode', descripcion:'escanear menos puertos que el escaneo predeterminado'},
    {opcion: '-r', nombre: 'recursivo', descripcion:'no aleatorizar'},
    {opcion: '--top-ports <number>', nombre: '', descripcion:'Escanear los <número> puertos más comunes'},
    {opcion: '--port-ratio <ratio>', nombre: '', descripcion:'scanear puertos más comunes que <ratio>'}
  ];
  tablaOutputs = [
    {opcion: '-oN/oX/oS/oG <file>', nombre: '', descripcion:'enviar el escaneo a un archivo'},
    {opcion: '-oA <basename>', nombre: '', descripcion:'Salida en los tres formatos principales al mismo tiempo'},
    {opcion: '-v', nombre: 'Fast mode', descripcion:'Aumentar el nivel de verbosidad (-vvv)'},
    {opcion: '-d', nombre: 'recursivo', descripcion:'Aumentar el nivel de depuración (-ddd)'},
    {opcion: '--reason', nombre: '', descripcion:'Mostrar el motivo por el que un puerto está en un estado particular'},
    {opcion: '--packet-trace', nombre: '', descripcion:'Mostrar todos los paquetes enviados y recibidos'},
    {opcion: '--iflist', nombre: '', descripcion:'Imprimir interfaces de host y enrutador (para depuración)'}
  ];
  constructor(private titleService: Title, private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });
  }
  ngOnInit(): void {
    this.pageTitle = 'Ataques a contraseñas offline';
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
  clear(tabla: Table) {
    tabla.clear();
  }
  generateURL(label: string): string {
    const basePath = this.location.prepareExternalUrl('');
    return `${basePath}xss#${label}`;
  }
}
