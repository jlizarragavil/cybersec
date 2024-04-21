import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlInjectionPageComponent } from './sql-injection-page/sql-injection-page.component';
import { HomeComponent } from './home/home.component';
import { OfflinePasswordAttackComponent } from './offline-password-attack/offline-password-attack.component';
import { OnlinePasswordAttackComponent } from './online-password-attack/online-password-attack.component';
import { PasswordAttackMenuComponent } from './password-attack-menu/password-attack-menu.component';
import { HackingWebMenuComponent } from './hacking-web-menu/hacking-web-menu.component';
import { XssComponent } from './xss/xss.component';
import { LfiComponent } from './lfi/lfi.component';
import { RfiComponent } from './rfi/rfi.component';
import { NmapComponent } from './nmap/nmap.component';
import { ReverShellComponent } from './rever-shell/rever-shell.component';
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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección a /home
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio
  { path: 'sql-injection', component: SqlInjectionPageComponent }, 
  { path: 'xss', component: XssComponent },
  { path: 'onlinePasswordAttack', component: OnlinePasswordAttackComponent },
  { path: 'offlinePasswordAttack', component: OfflinePasswordAttackComponent },
  { path: 'passwordAttack', component: PasswordAttackMenuComponent },
  { path: 'hackingWeb', component: HackingWebMenuComponent },
  { path: 'lfi', component: LfiComponent },
  { path: 'nmap', component: NmapComponent },
  { path: 'rfi', component: RfiComponent },
  { path: 'revershell', component: ReverShellComponent },
  { path: 'sistemaOperativo', component: SistemaOperativoComponent },
  { path: 'reconocimientoWeb', component: ReconocimientoWebComponent },
  { path: 'unrestrictedFileUpload', component: UnrestrictedFileUploadComponent },
  { path: 'privesc', component: PrivescComponent },
  { path: 'pivoting', component: PivotingComponent },
  { path: 'metasploit', component: MetasploitComponent },
  { path: 'Fases', component: FasesComponent },
  { path: 'explotacionServicios', component: ExplotacionServiciosComponent },
  { path: 'enumeracionDeServicios', component: EnumeracionDeServiciosComponent },
  { path: 'aircrack', component: AircrackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
