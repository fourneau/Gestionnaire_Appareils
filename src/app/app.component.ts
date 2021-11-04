import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Sèche-Linge',
      status: 'allumé'
    },
    {
      name:'Télévision',
      status:'éteint'
    }
  ];
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log('On allume tout');
  }
}
function ms(callback: any, arg1: () => void, arg2: number, ms: any) {
  throw new Error('Function not implemented.');
}

