import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommsComponent } from './comms.component';

const routes: Routes = [{ path: '', component: CommsComponent }];

@NgModule({
	declarations: [CommsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CommsModule {}
