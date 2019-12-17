import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaBultosComponent } from './components/operario-almacen/carga-bulto/lista-bultos/lista-bultos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CreacionBultoComponent } from './components/operario-almacen/carga-bulto/creacion-bulto/creacion-bulto.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'home', component: ListaBultosComponent  },
  { path: 'nuevo-bulto', component: CreacionBultoComponent  },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
