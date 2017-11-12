import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//MODELS
import { ContactModel } from '../models/contacts-model';
//SERVICES
import { ApiMappingService } from '../services/api-mapping.service';


@Component({
  selector: 'app-list',
  
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apiMappingService: ApiMappingService, private router: Router) { }
  contacts;
  searchString: string= '';
  ngOnInit() {
  	this.initContactsList();	
  }

  initContactsList(){
  	this.apiMappingService.listContacts().subscribe(
	  (contacts: ContactModel)=>{
	    if(contacts)
	 	 	this.contacts= contacts;
	  }
   );
  }

  deleteContact(index){
    this.apiMappingService.deleteContact(this.contacts[index]._id).subscribe(
    (response: any)=>{
      if(response.status==200){
        //delete this.contacts[index]; 
        this.contacts.splice(index, 1);
        alert('Contact deleted successfully!');
      }
    }
   );
  }

  editContact(index){
    this.apiMappingService.contact= this.contacts[index];
    this.router.navigateByUrl("/add/"+this.contacts[index]._id);
  }
}
