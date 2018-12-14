import {Component, OnInit} from '@angular/core';
import {SessionService} from '../session.service';
import {Tab} from '../tab';
import {User} from '../user';


@Component({
  selector: 'app-vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.css']
})
export class VerticalTabsComponent implements OnInit {
  items: Tab[] = [];
  public selectedRole: number = 222;


  constructor(private sessionService: SessionService) {
  }

  ngOnInit() {
    this.items = this.sessionService.getTabsByRole(this.selectedRole);
  }

}
