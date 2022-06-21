import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompAComponent } from './comp-a/comp-a.component';

const routes: Routes = [
  {
    path: '',
    component: CompAComponent,
  },
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [CompAComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureAModule {}
