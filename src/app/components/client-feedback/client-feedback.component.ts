import { Component } from '@angular/core';
import { ClientFeedbackCardComponent } from "./client-feedback-card/client-feedback-card.component";

@Component({
  selector: 'app-client-feedback',
  standalone: true,
  imports: [ClientFeedbackCardComponent],
  templateUrl: './client-feedback.component.html',
  styleUrl: './client-feedback.component.scss'
})
export class ClientFeedbackComponent {

}
