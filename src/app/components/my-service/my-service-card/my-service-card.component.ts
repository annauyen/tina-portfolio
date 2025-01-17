import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-service-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './my-service-card.component.html',
  styleUrl: './my-service-card.component.scss'
})
export class MyServiceCardComponent {
  @Input() img!: string;
  @Input() service!: string;
  @Input() price!: string;
  @Input() description!: string;
}
