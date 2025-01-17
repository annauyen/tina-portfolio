import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-client-feedback-card',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './client-feedback-card.component.html',
  styleUrl: './client-feedback-card.component.scss'
})
export class ClientFeedbackCardComponent {

}
