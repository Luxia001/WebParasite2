import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ParasiteComponent } from './parasite/parasite.component';

const routes: Routes = [
  {path: '', component: HomepageComponent,}, 
  {path:'parasite/:id', component: ParasiteComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
