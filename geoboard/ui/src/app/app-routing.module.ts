import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: 'view', component: ViewComponent },
    { path: 'edit', component: EditComponent },
    { path: '',   redirectTo: '/landing', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }