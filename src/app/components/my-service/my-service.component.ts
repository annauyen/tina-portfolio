import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';
import { MyServiceCardComponent } from "./my-service-card/my-service-card.component";

@Component({
  selector: 'app-my-service',
  standalone: true,
  imports: [MyServiceCardComponent],
  templateUrl: './my-service.component.html',
  styleUrl: './my-service.component.scss',
  animations: [fadeInOut],
})
export class MyServiceComponent {
  text1 = "1-1.5 hour shooting 15. Retouched from your choice. All the photos from the shooting"
  text2 = "Please contact me for details"
}
