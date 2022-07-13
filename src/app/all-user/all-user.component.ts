import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css'],
  providers:[UserService]
})
export class AllUserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: {name: string, job: string, gender: string, country: string, age: number, avatar: string}[]= [];
  ngOnInit(): void {
    this.users = this.userService.users;
  }
  showDetails(user: {name: string, job: string, gender: string, country: string, age: number, avatar: string}){
   this.userService.showUserDetails(user);
  }
}
