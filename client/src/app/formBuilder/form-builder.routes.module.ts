import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FormBuilderComponent } from './components/form-builder.component';

const routes: Routes= [
	{path: 'form-builder', component: FormBuilderComponent},
]
@NgModule({
	imports:[
		FormsModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})

export class FormBuilderRouterMudule{}