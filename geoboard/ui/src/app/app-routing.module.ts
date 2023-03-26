import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'map', component: EditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }