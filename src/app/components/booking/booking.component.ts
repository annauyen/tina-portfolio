import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
  animations: [fadeInOut],
})
export class BookingComponent {}
