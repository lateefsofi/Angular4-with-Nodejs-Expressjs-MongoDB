import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//MODULES
import { SharedModule } from '../shared/shared.module';
//COMPONENTS
import { ContactsRouterMudule } from './contacts.routes';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
//SERVICES
import { ApiMappingService } from './services/api-mapping.service';

@NgModule({
	declarations: [ AddComponent, ListComponent ],
	imports: [ ReactiveFormsModule, FormsModule, SharedModule ],
	exports: [ ContactsRouterMudule ],
	providers: [ ApiMappingService ]
})
export class ContactsModule{}