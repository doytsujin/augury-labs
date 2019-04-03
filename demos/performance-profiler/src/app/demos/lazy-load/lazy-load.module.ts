import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';

import { LazyLoadComponent } from './components/lazy-load/lazy-load.component';

@NgModule({
  imports: [CommonModule, LazyLoadRoutingModule],
  declarations: [LazyLoadComponent],
})
export class LazyLoadModule {}
