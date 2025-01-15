import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BookingComponent } from './components/booking/booking.component';
import { MyServiceComponent } from './components/my-service/my-service.component';
import { PortraitComponent } from './components/portfolio/portrait/portrait.component';
import { EventComponent } from './components/portfolio/event/event.component';
import { CoupleComponent } from './components/portfolio/couple/couple.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: { animation: 'Welcome' },
  },
  {
    path: 'about',
    component: AboutMeComponent,
    data: { animation: 'About' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'Portfolio' },
  },
  {
    path: 'booking',
    component: BookingComponent,
    data: { animation: 'Booking' },
  },
  {
    path: 'service',
    component: MyServiceComponent,
    data: { animation: 'Service' },
  },
  {
    path: 'portrait',
    component: PortraitComponent,
    data: { animation: 'portrait' },
  },
  {
    path: 'event',
    component: EventComponent,
    data: { animation: 'event' },
  },
  {
    path: 'couple',
    component: CoupleComponent,
    data: { animation: 'Couple' },
  },
];
