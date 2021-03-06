import { Component, OnInit} from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-one';
  isAuth = false ;
  // lastUpdate =new Date();
  lastUpdate:Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  appareils: any[] = [];
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

ngOnInit(){
this.appareils = this.appareilService.appareils;
}

onAllumer() {
  this.appareilService.switchOnAll();
}

onEteindre() {
  this.appareilService.switchOffAll();
}

}
function ms(callback: any, arg1: () => void, arg2: number, ms: any) {
  throw new Error('Function not implemented.');
}

