import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {
  trigger,
  transition,
  query,
  style,
  group,
  animate,
} from '@angular/animations';
import { routeAnimations } from '../../shared/animation';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  animations: [routeAnimations],
})
export class SideBarComponent implements OnInit {
  ngOnInit(): void {
    // Load the sidebar state from local storage on initialization
    const savedState = localStorage.getItem('sidebarState');
    this.isOpened = savedState === 'true'; // Convert string to boolean
  }
  isOpened = false;

  toggleSidebar() {
    this.isOpened = !this.isOpened;
    localStorage.setItem('sidebarState', String(this.isOpened));
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
