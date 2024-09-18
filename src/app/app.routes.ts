import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta para la página principal
  { path: 'sobre-nosotros', component: SobreNosotrosComponent }, // Ruta para "Sobre Nosotros"
  { path: 'pedidos', component: PedidosComponent }, // Ruta para "Pedidos"
];
