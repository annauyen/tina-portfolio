import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';

@Component({
  selector: 'app-my-service',
  standalone: true,
  imports: [],
  templateUrl: './my-service.component.html',
  styleUrl: './my-service.component.scss',
  animations: [fadeInOut],
})
export class MyServiceComponent {}
