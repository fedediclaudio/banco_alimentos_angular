import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VistaOrganizacionDonanteComponent } from './components/vista-organizacion-donante/vista-organizacion-donante.component';
import { VistaOrganizacionBeneficiariaComponent } from './components/vista-organizacion-beneficiaria/vista-organizacion-beneficiaria.component';
import { VistaBultoProductoPaqueteComponent } from './components/vista-bulto-producto-paquete/vista-bulto-producto-paquete.component';
import { VistaVoluntarioComponent } from './components/vista-voluntario/vista-voluntario.component';
import { VistaContactoComponent } from './components/vista-contacto/vista-contacto.component';
import { VistaBultoComponent } from './components/vista-bulto/vista-bulto.component';
import { VistaCategoriaVoluntarioComponent } from './components/vista-categoria-voluntario/vista-categoria-voluntario.component';
import { VistaEnvioComponent } from './components/vista-envio/vista-envio.component';
import { VistaInsigniaComponent } from './components/vista-insignia/vista-insignia.component';
import { VistaPaqueteComponent } from './components/vista-paquete/vista-paquete.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { VistaVehiculoComponent } from './components/vista-vehiculo/vista-vehiculo.component';
import { ListaBultosComponent } from './components/lista-bultos/lista-bultos.component';
import { ListaPaquetesComponent } from './components/lista-paquetes/lista-paquetes.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaOrganizacionDonanteComponent,
    VistaOrganizacionBeneficiariaComponent,
    VistaBultoProductoPaqueteComponent,
    VistaVoluntarioComponent,
    VistaContactoComponent,
    VistaBultoComponent,
    VistaCategoriaVoluntarioComponent,
    VistaEnvioComponent,
    VistaInsigniaComponent,
    VistaPaqueteComponent,
    VistaProductoComponent,
    VistaVehiculoComponent,
    ListaBultosComponent,
    ListaPaquetesComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
