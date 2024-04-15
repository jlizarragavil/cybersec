import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Importa tu AppRoutingModule u otro módulo de enrutamiento
import { SideMenuComponent } from './side-menu/side-menu.component'
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
import { NmapComponent } from './nmap/nmap.component';
import { TableModule  } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { HomeComponent } from './home/home.component';
import { MegaMenuModule } from 'primeng/megamenu';

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
    HomeComponent
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
    MegaMenuModule
  ],
  providers: [PrimeIcons ],
  bootstrap: [AppComponent]
})
export class AppModule { }
