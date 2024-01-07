import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { FrontendComponent } from './views/frontend/frontend.component';
import { BackendComponent } from './views/backend/backend.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SectionComponent } from './components/section/section.component';
import { TipsComponent } from './views/tips/tips.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontendComponent,
    BackendComponent,
    SectionComponent,
    TipsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, RouterOutlet],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
