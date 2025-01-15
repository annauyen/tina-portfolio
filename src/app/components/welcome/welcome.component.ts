import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fadeInOut } from '../../shared/animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  animations: [fadeInOut],
})
export class WelcomeComponent {}
