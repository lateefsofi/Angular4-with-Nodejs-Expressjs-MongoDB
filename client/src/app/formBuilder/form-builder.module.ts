import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//MODULES
import { FormBuilderRouterMudule } from './form-builder.routes.module';
//COMPONENTS
import { TextBoxComponent } from './controls/textBoxControls/components/text-box.component';
import { FormBuilderComponent } from './components/form-builder.component';
//DIRECTIVES
import  { DraggableElementDirective } from './directives/draggable.directive';
import  { DropTargetDirective } from './directives/drop-target.directive';
//SERVICES
import  { DragService } from './services/drag.service';

@NgModule({
	declarations: [ FormBuilderComponent, DraggableElementDirective, DropTargetDirective, TextBoxComponent],
	imports: [ ReactiveFormsModule, FormsModule, FormBuilderRouterMudule ],
	exports: [ FormBuilderRouterMudule ],
	providers: [DragService]
})
export class FormBuilderModule{}