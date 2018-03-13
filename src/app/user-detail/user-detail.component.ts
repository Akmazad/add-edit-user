import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import moment from 'moment/src/moment';

import {User} from '../models/user.model';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  @Output() editUser = new EventEmitter<string>();
  displayDateOfBirth: string;
  constructor() { }

  ngOnInit() {
    this.displayDateOfBirth = moment(this.user.dateOfBirth).format('MMM DD, YYYY');

  }
  edit () {
    this.editUser.emit('edit');
  }
}
