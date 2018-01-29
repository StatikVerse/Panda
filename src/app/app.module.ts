import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { LandingSliderComponent } from './landing-slider/landing-slider.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { MissionsComponent } from './missions/missions.component';
import { GoalsComponent } from './goals/goals.component';
import { CompanyComponent } from './company/company.component';
import { SettingsComponent } from './settings/settings.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: '**', redirectTo: '/home', pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LandingSliderComponent,
    StartButtonComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    ProfileComponent,
    MissionsComponent,
    GoalsComponent,
    CompanyComponent,
    SettingsComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
