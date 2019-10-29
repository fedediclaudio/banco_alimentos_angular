import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizacionDonanteComponent } from './organizacion-donante/organizacion-donante.component';
import { NewOrganizacionDonanteComponent } from './new-organizacion-donante/new-organizacion-donante.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OrganizacionDonanteComponent },
  { path: 'new-organizacion-donante', component: NewOrganizacionDonanteComponent },
  { path: 'modify-organizacion-donante/:idx', component: NewOrganizacionDonanteComponent }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
