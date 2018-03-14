import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [MatIconRegistry]
})
export class AppComponent {
  baseURL: string;
  
  constructor(private iconReg: MatIconRegistry, sanitizer: DomSanitizer) {
    console.log("__NODE_ENV__ =="+__NODE_ENV__);
    if(__NODE_ENV__ == "production"){
      this.baseURL = __BASE_URL__;
    }else{
      this.baseURL = "./";
    }
	  iconReg.addSvgIcon('arrow', sanitizer.bypassSecurityTrustResourceUrl(this.baseURL+'./assets/images/arrow.svg'));
  }
}
