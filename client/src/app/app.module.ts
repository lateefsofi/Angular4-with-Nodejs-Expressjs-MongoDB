import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

//MODULES
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { FormBuilderModule } from './formBuilder/form-builder.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header-component';

@NgModule({
  declarations: [
  	HeaderComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    CoreModule,
   // ContactsRouterMudule,
    ContactsModule,
    FormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
