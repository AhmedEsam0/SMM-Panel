import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { ToggleSidebar } from '../../../Services/toggle-sidebar';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  initializeNotificationComponent() {
    throw new Error('Method not implemented.');
  }
  isSidebarOpen = false;

  constructor(private sidebarService: ToggleSidebar) {}

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }

  sidebarBtnClicked() {
    this.sidebarService.toggleSidebar();
  }


}
