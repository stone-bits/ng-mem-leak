import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CompBComponent } from './comp-b/comp-b.component';

const routes: Routes = [
  {
    path: '',
    component: CompBComponent,
  },
  //{ path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [CompBComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeatureBModule {}
