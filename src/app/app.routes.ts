import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BookingComponent } from './components/booking/booking.component';
import { MyServiceComponent } from './components/my-service/my-service.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'service', component: MyServiceComponent },
];
