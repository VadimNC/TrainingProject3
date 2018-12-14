import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private listUsers: User[] = [
    {userId: 111, userName: 'USER'},
    {userId: 222, userName: 'ADMIN'},
    {userId: 333, userName: 'KEEPER'}
  ]

  getAllUsers(): Observable<User[]> {
    return of(this.listUsers);
  }

  getUser(id: number): Observable<User> {
    return of(this.listUsers.find(myUser => myUser.userId === id));
  }

}
