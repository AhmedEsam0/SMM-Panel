import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToggleSidebar {
  // sidebarBtnClicked: EventEmitter<boolean> = new EventEmitter<boolean>();



  private _sidebarOpen = new BehaviorSubject<boolean>(false);

  sidebarOpen$ = this._sidebarOpen.asObservable();

  toggleSidebar() {
    this._sidebarOpen.next(!this._sidebarOpen.value);
  }

  closeSidebar() {
    this._sidebarOpen.next(false);
  }
}
