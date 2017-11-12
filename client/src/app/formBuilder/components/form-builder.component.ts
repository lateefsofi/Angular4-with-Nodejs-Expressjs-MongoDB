import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//MODELS
import { ControlModel } from '../models/control.model';
//COMPONENTS
//import { TextBoxComponent } from '../controls/textBoxControls/components/text-box.component';
//SERVICES

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

	draggableForm;
	textBox: {name: 'xxx', text:''};
	/* =new FormGroup({
		textBox: new FormControl(null),
		textArea: new FormControl(null),
		label: new FormControl(null),
		radio: new FormControl(null),
		checkBox: new FormControl(null),
		dropDown: new FormControl(null),
	});*/
	dropForm 
	//=new FormGroup({});
  	constructor() { }
  	onDrop(data){
  	debugger
  		//console.log(data);
  		console.log(this.dropForm);
  		console.log(this.draggableForm);
  	}
	controls={
	  	textBox: { 
	  		type: 'textBox',
	  		name: 'textBox',
	  		minLength: 0,
	  		maxLength: 100
	  	}
  	}  
	ngOnInit() {
		//this.draggableForm= 
		//this.dropForm= new FormGroup();
	}

    allowDrop(ev) {
    debugger
	    ev.preventDefault();
  	}

  	drag(ev) {
    debugger

	    ev.dataTransfer.setData("text", ev.target.id);
	}
/*
	drop(ev) {
    debugger
	
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data).cloneNode(true));
	}
*/
}
