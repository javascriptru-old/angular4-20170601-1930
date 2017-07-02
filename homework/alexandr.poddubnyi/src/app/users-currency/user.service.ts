import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Observable/throw';
import { IUser } from 'app/users-currency/shared/user';

@Injectable()
export class UserService {
  apiUrl = 'https://learn.javascript.ru/courses/groups/api/participants?key=1fxf2pg';
  users: IUser[];

  constructor(private http: Http) { }

  getUsers(): Observable<IUser[]> {
    if (!this.users) {
      return this.http.get(this.apiUrl)
        .map(res => res.json())
        .map((users) => {
          users.map((user) => user.email = 'example@gmail.com');
          return users;
        })
        .map(users => this.users = users)
        .catch(this.handleError);
    } else {
      return new Observable(observer => {
        observer.next(this.users);
      });
    }
  }

  updateUser(index, user) {
    this.users[index] = user;
    return user;
  }

  isUniqueField(fieldName: string, value: string) {
    let valid: any;

    console.log(this.users);

    return new Observable(observer => {
      if (this.users) {
        for (const user of this.users) {
          if (user[fieldName] === value) {
            valid = { asyncInvalid: true };
            break;
          }
        }
      }

      valid = valid || null;

      observer.next(valid);
    }).debounceTime(1000).first();
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}
