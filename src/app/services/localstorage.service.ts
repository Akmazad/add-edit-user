import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';
 
@Injectable()
export class LocalstorageService {

  constructor(protected localStorage: AsyncLocalStorage) { }

  updateUser (name: string, email: string, dateOfBirth: Date, address: string) {
    let user: User = { name: name, email: email, dateOfBirth: dateOfBirth, address: new Address(address) };

    return this.localStorage.setItem('user', user);
  }

  getUser () {
    return this.localStorage.getItem<User>('user');
  }

}
