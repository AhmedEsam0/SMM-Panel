import { Component, HostListener } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { ToggleSidebar } from '../../Services/toggle-sidebar';

@Component({
  selector: 'app-panel',
  imports: [Sidebar, Header, RouterOutlet],
  templateUrl: './panel.html',
  styleUrl: './panel.css',
})
export class Panel {
  constructor(private sidebarService: ToggleSidebar) {}

  @HostListener('window:resize')
  onResize() {
    this.sidebarService.onResize();
  }
}
