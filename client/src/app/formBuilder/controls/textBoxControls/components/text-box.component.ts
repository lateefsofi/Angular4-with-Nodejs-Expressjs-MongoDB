import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent implements OnInit {
	@Input() getData(){
		return this.textBox;
	}
	textBox={
		name: 'textBox',
		text: 'This is a test'
	}
  	constructor() { }
	ngOnInit() {

	}
}
