import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app-routing.module';

// import { RankingsComponent } from './CricInfo/rankings/rankings.component';
// import { PlayerInfoHomeComponent } from './CricInfo/player-info-home/player-info-home.component';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule, Routes } from '@angular/router';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import { RankingsComponent } from './CricInfo/rankings/rankings.component';
import { PlayerInfoHomeComponent } from './CricInfo/player-info-home/player-info-home.component';
import { AboutComponent } from './Information/about/about.component';
import { PlayerInfoComponent } from './CricInfo/player-info/player-info.component';
import { HomeComponent } from './Information/home/home.component';
import { RecentMatchesComponent } from './CricInfo/recent-matches/recent-matches.component';
import { MatchDescriptionComponent } from './CricInfo/match-description/match-description.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'rankings', component: RankingsComponent },
  { path: 'playerInfo', component: PlayerInfoHomeComponent },
  { path: 'abouMe', component: AboutComponent },
  {path:'playerInfoById/:id',component:PlayerInfoComponent},
  {path:'home',component:HomeComponent},
  {path:'recentMatches',component:RecentMatchesComponent},
  { path: 'recentMatches/matchById/:id', component: MatchDescriptionComponent },




  // { path: 'welcome', component: WelcomeComponent },
];


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    RankingsComponent,
    PlayerInfoHomeComponent,
    AboutComponent,
    PlayerInfoComponent,
    HomeComponent,
    RecentMatchesComponent,
    MatchDescriptionComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzDropDownModule,
    NzTableModule,
    NzSelectModule,
    NzCardModule,
    NzInputModule,
    NzSkeletonModule,
    NzIconModule,
    NzGridModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzSpinModule,
    NzAlertModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
