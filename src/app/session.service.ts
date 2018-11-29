import {Injectable} from '@angular/core';
import {Tab} from './tab';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //public selectedRole: string = 'USER';
  private tabFilter: Tab[];

  private dataTabs: Tab[] = [
    {myId: 1, name: 'My Orders', myRole: 'USER', url: '/my-orders'},
    {myId: 2, name: 'My Page-2', myRole: 'ADMIN', url: ''},
    {myId: 3, name: 'My Page-3', myRole: 'KEEPER', url: ''},
    {myId: 4, name: 'My Page-4', myRole: 'USER', url: ''},
    {myId: 5, name: 'My Page-5', myRole: 'ADMIN', url: ''},
    {myId: 6, name: 'My Page-6', myRole: 'KEEPER', url: ''},
    {myId: 7, name: 'My Page-7', myRole: 'USER', url: ''}
  ]

  getTabsByRole(selectedRole): Tab[] {
    this.tabFilter = this.dataTabs.filter((viewTab: Tab) => viewTab.myRole === selectedRole);
    return this.dataTabs = this.tabFilter;
  }
}
