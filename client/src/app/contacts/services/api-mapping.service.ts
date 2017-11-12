import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { ContactModel } from '../../contacts/models/contacts-model';

@Injectable()
export class ApiMappingService{
	contact: ContactModel;
	constructor(private http: Http){}
	saveContact(contact: ContactModel){
		return this.http.post('http://localhost:3000/api/contact', contact).map(
			(response: Response)=>{
				return response.json();
			}
		);
	}
	updateContact(id: string, contact: ContactModel){
		contact._id= id;
		return this.http.put('http://localhost:3000/api/contact/', contact).map(
			(response: Response)=>{
				return response.json();
			}
		);
	}

	listContacts(){
		return this.http.get('http://localhost:3000/api/contacts').map(
			(response: Response)=>{
				return response.json();
			}
		);
	}

	deleteContact(id: string){
		return this.http.delete('http://localhost:3000/api/contact/'+id).map(
			(response: Response)=>{
				return response.json();
			}
		);
	}
}