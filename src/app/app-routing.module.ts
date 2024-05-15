import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-grifinoria',
    loadChildren: () => import('./page-grifinoria/page-grifinoria.module').then( m => m.PageGrifinoriaPageModule)
  },
  {
    path: 'page-sonserina',
    loadChildren: () => import('./page-sonserina/page-sonserina.module').then( m => m.PageSonserinaPageModule)
  },
  {
    path: 'page-lufa-lufa',
    loadChildren: () => import('./page-lufa-lufa/page-lufa-lufa.module').then( m => m.PageLufaLufaPageModule)
  },
  {
    path: 'page-corvinal',
    loadChildren: () => import('./page-corvinal/page-corvinal.module').then( m => m.PageCorvinalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
