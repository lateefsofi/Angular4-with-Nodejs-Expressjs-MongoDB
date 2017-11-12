import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

//MODELS
import { ContactModel } from '../models/contacts-model';
//SERVICES
import { ApiMappingService } from '../services/api-mapping.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private apiMappingService: ApiMappingService, private route: ActivatedRoute, private router: Router) { }
  
  contactId: string;
  isUpdate: boolean= false;
  addContactForm: FormGroup;
 
  ngOnInit() {
  	this.initAddContactForm();
    this.contactId= this.route.snapshot.params['id'];
    if(this.contactId && this.apiMappingService.contact){
      this.isUpdate= true;
      const contact= this.apiMappingService.contact;
      this.addContactForm.setValue({firstName: contact.firstName, lastName: contact.lastName, phone: contact.phone} );
    }
  }
  
  initAddContactForm(){
  	this.addContactForm= new FormGroup({
  		firstName: new FormControl('', [Validators.required]),
  		lastName: new FormControl('', [Validators.required]),
  		phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
  	})
  }

  //Save the contact
  onAddForm(){
  	if(this.addContactForm.invalid){
  		Object.keys(this.addContactForm.controls).forEach(field => {
		  const control = this.addContactForm.get(field);            
		  control.markAsTouched({ onlySelf: true });       
		});
  		//this.addContactForm._pristine=true;
  		return;
  	}
  	const formControlsObj= this.addContactForm.controls;
  	const contactDetails= new ContactModel(formControlsObj.firstName.value, formControlsObj.lastName.value, formControlsObj.phone.value);
    if(this.contactId){
      //update existing contact
      this.apiMappingService.updateContact(this.contactId, contactDetails).subscribe(
        (response: any)=>{
          this.addContactForm.reset();
          if(response.status==200){
            this.apiMappingService.contact= null;
            alert( response.message );
            this.router.navigateByUrl("/list");
          }
        }
      );
    }else{
      //save new contact
     	this.apiMappingService.saveContact(contactDetails).subscribe(
        (response: any)=>{
          this.addContactForm.reset();
          if(response.status==200)
            alert( response.message );
        }
      );
    }
  }
}
