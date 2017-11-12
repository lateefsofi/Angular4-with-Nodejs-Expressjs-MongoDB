const express= require('express');
var router= express.Router();

var contact= require('./models/contacts');
var statusCodes= require('./models/statuscodes');

router.get('/contacts', (req, res, next)=>{
	contact.find((err, contacts)=>{
		res.json(contacts);
	});
	
});

router.post('/contact', (req, res, next)=>{
	try{
		const newContact= new contact({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phone: req.body.phone
		});
		newContact.save((err, success)=>{
			res.setHeader('Content-Type', 'application/json');
			if(err){
				res.status(statusCodes.BAD_REQUEST);
				res.json({status: statusCodes.BAD_REQUEST, message: err, data: null});
			}else{
				res.status(statusCodes.HTTP_OK);
				res.json({status: statusCodes.HTTP_OK, message: 'Contact saved successfully!', data: null});
			}
		});
	}
	catch(err){
		res.status(statusCodes.BAD_REQUEST);
		res.json({status: statusCodes.BAD_REQUEST, message: 'Contact not saved!', data: null});
	}
});

router.put('/contact', (req, res, next)=>{
	try{
		contact.findById(req.body._id, (err, existingContact)=>{
			if(err){
				res.status(statusCodes.BAD_REQUEST);
				res.json({status: statusCodes.BAD_REQUEST, message: updateErr, data: null});
			}
			existingContact.firstName= req.body.firstName;
			existingContact.lastName= req.body.lastName;
			existingContact.phone= req.body.phone;
			existingContact.save((updateErr, success)=>{
				res.setHeader('Content-Type', 'application/json');
				if(updateErr){
					res.status(statusCodes.BAD_REQUEST);
					res.json({status: statusCodes.BAD_REQUEST, message: updateErr, data: null});
				}else{
					res.status(statusCodes.HTTP_OK);
					res.json({status: statusCodes.HTTP_OK, message: 'Contact updated successfully!', data: null});
				}
			});
		})
		
	}
	catch(err){
		res.status(statusCodes.BAD_REQUEST);
		res.json({status: statusCodes.BAD_REQUEST, message: 'Contact not updated!', data: null});
	}
});

router.delete('/contact/:id', (req, res, next)=>{
	try{
		contact.remove({_id: req.params.id}, (err, result)=>{
			if(err){
				res.status(statusCodes.BAD_REQUEST);
				res.json({status: statusCodes.BAD_REQUEST, message: err, data: null});
			}else{
				res.status(statusCodes.HTTP_OK);
				res.json({status: statusCodes.HTTP_OK, message: 'Contact deleted successfully!', data: null});
			}
		});
	}
	catch(err){
		res.status(statusCodes.BAD_REQUEST);
		res.json({status: statusCodes.BAD_REQUEST, message: 'Contact not saved!', data: null});
	}
});

module.exports= router;