import { Component, EventEmitter, Output } from '@angular/core';
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
  constructor(private sidebarService: ToggleSidebar) {}

  isSidebarOpen: boolean = false;

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe((state) => {
      this.isSidebarOpen = state;
    });
  }
  sidebarBtnClicked() {
    this.sidebarService.toggleSidebar();
  }
}
