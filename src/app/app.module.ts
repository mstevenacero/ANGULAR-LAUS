import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';

const routes:Routes=[
{ path:'inicio',component:InicioComponent},
{path:'productos',component:ProductosComponent},
{ path: '', component : InicioComponent, pathMatch: 'full' },
{ path: '**', redirectTo: '/', pathMatch: 'full' },



]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
