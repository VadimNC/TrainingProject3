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
    {myId: 1, name: 'My Orders', myRole: 111, url: '/my-orders'},
    {myId: 2, name: 'All My Orders', myRole: 222, url: '/all-my-orders'},
    {myId: 3, name: 'My Page-3', myRole: 333, url: ''},
    {myId: 4, name: 'My Page-4', myRole: 111, url: ''},
    {myId: 5, name: 'My Page-5', myRole: 222, url: ''},
    {myId: 6, name: 'My Page-6', myRole: 333, url: ''},
    {myId: 7, name: 'My Page-7', myRole: 111, url: ''}
  ]

  getTabsByRole(selectedRole): Tab[] {
    this.tabFilter = this.dataTabs.filter((viewTab: Tab) => viewTab.myRole === selectedRole);
    return this.dataTabs = this.tabFilter;
  }
}
