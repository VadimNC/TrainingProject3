import {Component, OnInit} from '@angular/core';
import {SessionService} from '../session.service';
import {Tab} from '../tab';

@Component({
  selector: 'app-vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.css']
})
export class VerticalTabsComponent implements OnInit {
  items: Tab[] = [];
  public selectedRole: string = 'USER';


  constructor(private sessionService: SessionService) {
  }

  // getTabs(): void {
  //   this.sessionService.getTabsByRole();
  // }

  // onSelect(tab: Tabs): void {
  //   this.selectTab = tab;
  // }

  ngOnInit() {
    this.items = this.sessionService.getTabsByRole(this.selectedRole);
  }

}
