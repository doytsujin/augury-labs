import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';

const routes: Routes = [{ path: 'lazy', component: LazyLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadRoutingModule {}
