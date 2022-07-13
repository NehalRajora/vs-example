import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users =[
    {name: 'john', job: 'teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'assets/avatar/john.jpg'},
    {name:'mark', job: 'designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'assets/avatar/mark.jpg'},
    {name:'merry', job: 'lawyer', gender:  'Female', country: 'Ireland', age: 35, avatar: 'assets/avatar/merry.jpg'},
    {name:'steve', job: 'doctor', gender : 'Male', country: 'India', age: 35, avatar: 'assets/avatar/steve.jpeg'}
  ]

  onShowDetailsClick= new EventEmitter<{name: string, job: string, gender: string, country: string, age: number, avatar: string}>();

  showUserDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
    this.onShowDetailsClick.emit(user);
  }
}
