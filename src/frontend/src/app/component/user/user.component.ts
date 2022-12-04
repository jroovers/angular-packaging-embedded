import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {UserDTO} from "../../interface/user-dto";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users: UserDTO[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

}
