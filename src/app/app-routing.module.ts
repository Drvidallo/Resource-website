import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FrontendComponent } from './views/frontend/frontend.component';
import { BackendComponent } from './views/backend/backend.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home page' },
  { path: 'front', component: FrontendComponent },
  { path: 'back', component: BackendComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
