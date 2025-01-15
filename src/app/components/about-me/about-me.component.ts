import { Component } from '@angular/core';
import { fadeInOut } from '../../shared/animation';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [fadeInOut],
})
export class AboutMeComponent {
  introText =
    'Xin chào, hi and bonjour! I’m Tina, a photographer based in Belgium, and I’m passionate about capturing timeless moments that tell a story. With every frame, I aim to create art that tell your stories, immerse them with cinematic tone and vintage aesthetic that feels uniquely yours.' +
    '\n' +
    'Whether you’re looking for an elegant portrait or a dreamy couple shoot, my ultimate goal in photography is to turn your moments into cherished memories that will last.' +
    '\n' +
    'Ready for something special for yourself? Contact me for more details!';
}
