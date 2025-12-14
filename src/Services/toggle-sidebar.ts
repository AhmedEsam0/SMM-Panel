import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebar {
  private readonly BREAKPOINT = 850;

  isMobile(): boolean {
    return window.innerWidth < this.BREAKPOINT;
  }

  private _sidebarOpen = new BehaviorSubject<boolean>(window.innerWidth >= this.BREAKPOINT);

  sidebarOpen$ = this._sidebarOpen.asObservable();

  toggleSidebar() {
    if (window.innerWidth < this.BREAKPOINT) {
      this._sidebarOpen.next(!this._sidebarOpen.value);
    }
  }

  closeSidebar() {
    this._sidebarOpen.next(false);
  }

  onResize() {
    const isDesktop = window.innerWidth >= this.BREAKPOINT;
    this._sidebarOpen.next(isDesktop);
  }
}
