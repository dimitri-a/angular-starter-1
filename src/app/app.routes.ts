import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { TeamComponent } from './team';

import { NoContentComponent } from './no-content';
import { GameComponent } from "./game";
import { ScheduleComponent } from './schedule';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'game', component: GameComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: '**', component: NoContentComponent },
];
