export class ContactModel{
	public _id: string;
	public firstName: string;
	public lastName: string;
	public phone: string;

	constructor(firstName: string, lastName: string, phone: string){
		this.firstName= firstName;
		this.lastName= lastName;
		this.phone= phone;
	}
}