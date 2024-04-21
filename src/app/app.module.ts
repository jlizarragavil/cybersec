import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component'
import { ReverShellComponent } from './rever-shell/rever-shell.component'
import { UnrestrictedFileUploadComponent } from './unrestricted-file-upload/unrestricted-file-upload.component';
import { SistemaOperativoComponent } from './sistema-operativo/sistema-operativo.component';
import { ReconocimientoWebComponent } from './reconocimiento-web/reconocimiento-web.component';
import { PrivescComponent } from './privesc/privesc.component';
import { PivotingComponent } from './pivoting/pivoting.component';
import { MetasploitComponent } from './metasploit/metasploit.component';
import { FasesComponent } from './fases/fases.component';
import { ExplotacionServiciosComponent } from './explotacion-servicios/explotacion-servicios.component';
import { EnumeracionDeServiciosComponent } from './enumeracion-de-servicios/enumeracion-de-servicios.component';
import { AircrackComponent } from './aircrack/aircrack.component';


import { SidebarModule } from 'primeng/sidebar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { OnlinePasswordAttackComponent } from './online-password-attack/online-password-attack.component';
import { OfflinePasswordAttackComponent } from './offline-password-attack/offline-password-attack.component';
import { XssComponent } from './xss/xss.component';
import { SqlInjectionPageComponent } from './sql-injection-page/sql-injection-page.component';
import { ButtonModule } from 'primeng/button';
import { LfiComponent } from './lfi/lfi.component';
import { RfiComponent } from './rfi/rfi.component';
import { NmapComponent } from './nmap/nmap.component';
import { TableModule  } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { HomeComponent } from './home/home.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollTopModule } from 'primeng/scrolltop';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    OnlinePasswordAttackComponent,
    OfflinePasswordAttackComponent,
    XssComponent,
    SqlInjectionPageComponent,
    LfiComponent,
    NmapComponent,
    HomeComponent,
    RfiComponent,
    ReverShellComponent,
    UnrestrictedFileUploadComponent,
    SistemaOperativoComponent,
    ReconocimientoWebComponent,
    PrivescComponent,
    PivotingComponent,
    MetasploitComponent,
    FasesComponent,
    ExplotacionServiciosComponent,
    EnumeracionDeServiciosComponent,
    AircrackComponent
  ],
  imports: [
    ButtonModule,
    CardModule,
    PanelModule,
    DialogModule,
    MenubarModule,
    ClipboardModule,
    BrowserModule,
    RouterModule, // No necesitas importar RouterModule.forRoot([]) aquí si ya lo has hecho en tu AppRoutingModule
    AppRoutingModule, // Importa y agrega tu AppRoutingModule aquí
    SidebarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TableModule ,
    ListboxModule,
    MegaMenuModule,
    MenuModule,
    PanelMenuModule,
    ScrollTopModule
  ],
  providers: [PrimeIcons ],
  bootstrap: [AppComponent]
})
export class AppModule { }
