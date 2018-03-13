import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import {LocalstorageService} from '../services/localstorage.service';

import {User} from '../models/user.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showEditUser: boolean;
  loading: boolean = true;
  user: User;

  constructor(private route: ActivatedRoute, private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.showEditUser = true;
    this.localstorageService.getUser().subscribe((user : User)=>{
      console.log(user);
      if (user) {
        this.user = user;
        this.showEditUser = false;
      }
      this.loading = false;
    });
  }

  editUser() {
    this.showEditUser = true;
  }

  showUserDetail (data) {
    console.log(data);
    this.user = data;
    this.showEditUser = false;
  }

}
