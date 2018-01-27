import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Name: {{name}}</h1>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies ? 'Hide Hobbies' : 'Show Hobbies'}}</button>
    <div *ngIf="showHobbies">
        <h3>Hobbies</h3>
        <ul>
            <li *ngFor="let hobby of hobbies; let i = index">
                {{hobby}} <button (click)="deleteHobby(i)">X</button>
            </li>
        </ul>
        <form (submit)="addHobby(hobby.value)">
            <label>Add Hobby: </label> <br />
            <input type="text" #hobby /> <br />
        </form>
    </div>
    <hr />
    <h3>Edit User</h3>
    <form>
        <label>Name: </label> <br />
        <input type="text" name="name" [(ngModel)]="name" /> <br />
        <label>Email: </label> <br />
        <input type="text" name="email" [(ngModel)]="email" /> <br />
        <label>Street: </label> <br />
        <input type="text" name="address.street" [(ngModel)]="address.street" /> <br />
        <label>City: </label> <br />
        <input type="text" name="address.city" [(ngModel)]="address.city" /> <br />
        <label>State: </label> <br />
        <input type="text" name="address.state" [(ngModel)]="address.state" />
    </form>
    `,
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
      this.name = 'Christian Vladimir Uhdre Mulato';
      this.email = 'chmulato@hotmail.com';
      this.address = {
        street: 'Rua Ari Manfron, 123',
        city: 'Curitiba',
        state: 'PR'
      }
      this.hobbies = ['Musics','Movies','Reading Books'];
      this.showHobbies = false;
      //console.log('constructor ran');
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
        this.showHobbies = false;
    } else {
        this.showHobbies = true;
    }
     // console.log('show');
  }

  addHobby(hobby: string) {
      this.hobbies.push(hobby);
      //console.log(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i, 1);
  }
  
}

// this is a interface declaration type
interface address {
    street: string,
    city: string,
    state: string
}