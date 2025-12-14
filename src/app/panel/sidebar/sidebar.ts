import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleSidebar } from '../../../Services/toggle-sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isSidebarOpen = false;
  isSubmenuOpen = false;

  constructor(
    private router: Router,
    public sidebarService: ToggleSidebar
  ) {}

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe(state => {
      this.isSidebarOpen = state;
    });
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  isModerationActive(): boolean {
    return this.router.url.startsWith('/panel/moderation');
  }
}
