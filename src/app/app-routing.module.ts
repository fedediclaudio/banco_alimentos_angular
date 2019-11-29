import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaBultosComponent } from './components/lista-bultos/lista-bultos.component';
import { ListaPaquetesComponent } from './components/lista-paquetes/lista-paquetes.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ListaBultosComponent  },
  { path: 'lista-bultos', component: ListaBultosComponent  },
  { path: 'lista-paquetes', component: ListaPaquetesComponent  },
  { path: 'lista-productos', component: ListaProductosComponent  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
