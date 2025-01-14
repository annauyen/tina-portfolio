import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeComponent } from "../welcome/welcome.component";
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, RouterOutlet, MatIconModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  isOpened = false;

  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }
}
