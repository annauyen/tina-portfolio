import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations: [fadeInOut],
})
export class PortfolioComponent {}
