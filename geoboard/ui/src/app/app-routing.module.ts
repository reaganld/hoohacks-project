import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'map', component: EditComponent },
    { path: '',   redirectTo: '/landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }