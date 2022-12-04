import {Component, Input, OnInit} from '@angular/core';
import {UserDTO} from "../../interface/user-dto";
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  user: UserDTO | undefined;

  constructor(private route: ActivatedRoute, // current route information to extract id
              private location: Location, // api to interact with browser, e.g. allows us to redirect back to main screen
              private userService: UserService)  { // our own service
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(){
    const uuid = this.route.snapshot.paramMap.get('uuid');
    if(uuid) {
      this.userService.getUserByUuid(uuid).subscribe({
        next: data => {
          this.user = data;
        }, error: () => {
          location.assign('/user')
        }
      });
    }
  }

}
