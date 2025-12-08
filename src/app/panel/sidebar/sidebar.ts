import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive} from '@angular/router';
import { ToggleSidebar } from '../../../Services/toggle-sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isSubmenuOpen = false;
  constructor(private router: Router, private sidebarService: ToggleSidebar) {}
  isSidebarOpen: boolean = false;

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe((state) => {
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
