import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'a',
    loadChildren: () => import('src/app/feature-a/feature-a.module')
      .then(m => m.FeatureAModule),
  },
  {
    path: 'b',
    loadChildren: () => import('src/app/feature-b/feature-b.module')
      .then(m => m.FeatureBModule),
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
