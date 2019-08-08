import { Injectable } from '@angular/core';
import { Observable, from } from "rxjs";
// import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: string[] = ['Butter', 'Bread', 'Salt'];
  getItems(): string[] {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
    return this.items;
  }

  user: any[] = [
    { Username: 'abhaypurohit10', Password: 'Password', FirstName: "Abhay", LastName:"Purohit" },
    { Username: 'heisenberg10', Password: 'PAssword', FirstName: "Abhay", LastName:"Purohit" }
  ];
  getuser(model: any): Observable<any[]>{
    return from([this.user.filter(x => x.Username == model.Username && x.Password == model.Password)])
  }

  addUser(useradd: any){
    this.user.push(useradd);
    console.log(this.user);
  }
  
  constructor() { }
}
