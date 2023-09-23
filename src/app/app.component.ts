import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-state-managementangular-state-managementangular-state-managementangular-state-managementangular-state-managementangular-state-managementangular-state-management';
  colSpan=2;
  isActive = true;
  email:string = "nafeedjmi@gmail.com";
  date = new Date().toString();

  post = {
    userTitle:'Title',
    isFavorite: 'Hell'
  }

  users = [
    {
      name:'Nafeed',
      age:20,
      fName:'Alam'
    },
    {
      name:'Nafeed',
      age:20,
      fName:'Alam'
    },
    {
      name:'Nafeed',
      age:20,
      fName:'Alam'
    },
    {
      name:'Nafeed',
      age:20,
      fName:'Alam'
    }
  ];

  tweet={
    likes:false,
    likeCount:  0
  }

  public getUserAlert():Array<object>{
    return this.users;
  }
  
  public isFavoriteChange(obj:object){
    console.log(obj)
  }

  public likeCount(arg:object){
    console.log(arg)
  }
}
