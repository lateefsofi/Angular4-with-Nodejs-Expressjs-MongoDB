import  { Directive, HostListener, HostBinding, Input, ViewContainerRef } from '@angular/core';

import  { DragService } from '../services/drag.service';

@Directive({
  selector: '[draggableElement]'
})
export class DraggableElementDirective {
  constructor(private viewContainer: ViewContainerRef, private dragService: DragService) {
  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input('draggableElement') options: DraggableOptions;
  
  data: string= JSON.stringify({"type": "text", "name": "userName"});
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
      this.dragService.data = this.viewContainer.element.nativeElement.cloneNode(true);
  }
}
export interface DraggableOptions {
  type?: string;
  value?: any;
}