import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//DIRECTIVES
import { OnlyNumbers } from './directives/only-numbers.directive';
import { OnlyAlphabets } from './directives/only-alphabets.directive';
//PIPES
import { FilterListPipe } from './pipes/filter-list.pipe';
//SERVICES
import { WebApiService } from './services/web-api.service';

@NgModule({
	declarations: [ OnlyNumbers, OnlyAlphabets,  FilterListPipe ],
	imports: [ CommonModule ],
	exports: [ CommonModule,
		OnlyNumbers,
		OnlyAlphabets,
		FilterListPipe 
		],
	providers: [ WebApiService ]
})
export class SharedModule{}