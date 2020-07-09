import { NgModule } from '@angular/core';
import { MaterialModule } from '../material';

const common = [MaterialModule];
@NgModule({
	imports: [...common],
	exports: [...common],
})
export class SharedModule {}
