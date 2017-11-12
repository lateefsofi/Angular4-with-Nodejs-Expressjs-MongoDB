import { ControlModel } from './control.model';

export class TextAreaModel{
	constructor(
		public minLength: number,
		public maxLength: number,
	){}
}