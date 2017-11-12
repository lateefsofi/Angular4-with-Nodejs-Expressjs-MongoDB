import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRouterMudule } from './router.module';
import { HomeComponent } from './home/home.component';


@NgModule({
	declarations: [HomeComponent],
	imports: [ CommonModule ],
	exports: [ CoreRouterMudule ]
})
export class CoreModule{}