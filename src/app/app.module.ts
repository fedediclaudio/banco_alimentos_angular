import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ListaBultosComponent } from './components/operario-almacen/carga-bulto/lista-bultos/lista-bultos.component';
import { ListaPaquetesComponent } from './components/admin/lista-paquetes/lista-paquetes.component';
import { ListaProductosComponent } from './components/admin/lista-productos/lista-productos.component';
import { IngresoBultoComponent } from './components/donante/ingreso-bulto/ingreso-bulto.component';
import { CreacionPaqueteComponent } from './components/operario-almacen/carga-bulto/creacion-paquete/creacion-paquete.component';
import { ListaBultosDonanteComponent } from './components/donante/lista-bultos-donante/lista-bultos-donante.component';
import { ListaUsuariosComponent } from './components/admin/lista-usuarios/lista-usuarios.component';
import { InsignasOtorgadasComponent } from './components/admin/insignas-otorgadas/insignas-otorgadas.component';
import { ListaEnviosComponent } from './components/operario-almacen/carga-envio/lista-envios/lista-envios.component';
import { ListaPaquetesPendientesComponent } from './components/operario-almacen/carga-envio/lista-paquetes-pendientes/lista-paquetes-pendientes.component';
import { ListaBeneficiariosComponent } from './components/operario-almacen/carga-envio/lista-beneficiarios/lista-beneficiarios.component';
import { ListaVoluntariosComponent } from './components/operario-almacen/carga-envio/lista-voluntarios/lista-voluntarios.component';

import { ConfiguracionVoluntarioComponent } from './components/voluntario/configuracion-voluntario/configuracion-voluntario.component';
import { InicioVoluntarioComponent } from './components/voluntario/inicio-voluntario/inicio-voluntario.component';
import { NotificacionesVoluntarioComponent } from './components/voluntario/notificaciones-voluntario/notificaciones-voluntario.component';
import { ConfiguracionDonanteComponent } from './components/donante/configuracion-donante/configuracion-donante.component';
import { InicioDonanteComponent } from './components/donante/inicio-donante/inicio-donante.component';
import { NotificacionesDonanteComponent } from './components/donante/notificaciones-donante/notificaciones-donante.component';
import { InicioBeneficiarioComponent } from './components/beneficiario/inicio-beneficiario/inicio-beneficiario.component';
import { NotificacionesBeneficiarioComponent } from './components/beneficiario/notificaciones-beneficiario/notificaciones-beneficiario.component';
import { ConfiguracionBeneficiarioComponent } from './components/beneficiario/configuracion-beneficiario/configuracion-beneficiario.component';
import { DonacionesBeneficiarioComponent } from './components/beneficiario/donaciones-beneficiario/donaciones-beneficiario.component';
import { ConfiguracionAdminComponent } from './components/admin/configuracion-admin/configuracion-admin.component';
import { InicioAdminComponent } from './components/admin/inicio-admin/inicio-admin.component';
import { NotificacionesAdminComponent } from './components/admin/notificaciones-admin/notificaciones-admin.component';
import { EnviosVoluntarioComponent } from './components/voluntario/envios-voluntario/envios-voluntario.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { RegistroComponent } from './components/registro/registro.component';
import { CreacionBultoComponent } from './components/operario-almacen/carga-bulto/creacion-bulto/creacion-bulto.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaBultosComponent,
    ListaPaquetesComponent,
    ListaProductosComponent,
    
    IngresoBultoComponent,
    CreacionPaqueteComponent,
    ListaBultosDonanteComponent,
    ListaUsuariosComponent,
    InsignasOtorgadasComponent,
    ListaEnviosComponent,
    ListaPaquetesPendientesComponent,
    ListaBeneficiariosComponent,
    ListaVoluntariosComponent,
    
    InicioComponent,
    ConfiguracionVoluntarioComponent,
    InicioVoluntarioComponent,
    NotificacionesVoluntarioComponent,
  
    ConfiguracionDonanteComponent,
    InicioDonanteComponent,
    NotificacionesDonanteComponent,
  
    InicioBeneficiarioComponent,
    NotificacionesBeneficiarioComponent,
    ConfiguracionBeneficiarioComponent,
    DonacionesBeneficiarioComponent,
    ConfiguracionAdminComponent,
    InicioAdminComponent,
    NotificacionesAdminComponent,
    EnviosVoluntarioComponent,
    
    RegistroComponent,
    
    CreacionBultoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
