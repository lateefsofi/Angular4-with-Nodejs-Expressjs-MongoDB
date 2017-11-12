import  { Directive, HostListener, HostBinding, Input, Output, EventEmitter, ViewContainerRef } from '@angular/core';

import  { DragService } from '../services/drag.service';
@Directive({
  selector: '[dropTarget]'
})
export class DropTargetDirective {
  constructor(private viewContainer: ViewContainerRef, private dragService: DragService) {
  }

  @Output('onDrop') drop = new EventEmitter();

  formData= [];
  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
       event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
  debugger
  //this.dragService.data.attributes.draggable= false;
  this.viewContainer.element.nativeElement.appendChild(this.dragService.data);
   /* for(var i=0; i<this.viewContainer.element.nativeElement.childNodes.length;i++){
      if(this.viewContainer.element.nativeElement.childNodes[i].attributes){
          this.dragService.formData.push(JSON.parse(this.viewContainer.element.nativeElement.childNodes[i].attributes.data.value));
          console.log(this.viewContainer.element.nativeElement.childNodes[i].attributes.data.value);
        }
    }*/
    //this.formData= this.dragService.formData;
    this.drop.emit(event);
  }
}
export interface DropTargetOptions {
  
}