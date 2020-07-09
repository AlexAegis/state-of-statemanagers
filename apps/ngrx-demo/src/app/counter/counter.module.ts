import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CounterComponent } from './counter.component';
import { CounterStoreModule } from './store/counter-store.module';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
	declarations: [CounterComponent],
	imports: [CommonModule, SharedModule, RouterModule.forChild(routes), CounterStoreModule],
})
export class CounterModule {}
