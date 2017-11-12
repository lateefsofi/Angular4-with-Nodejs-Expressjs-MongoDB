module.exports = {
	HTTP_OK: 200, //The request was fulfilled.
	CREATED: 201, //Following a POST command, this indicates success
	ACCEPTED: 202, //The request has been accepted for processing, but the processing has not been 		               //completed
	PARTIAL_INFORMATION: 203, 
	NO_RESPONSE: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500,
	NOT_IMPLEMENTED: 501,
	FOUND: 302,
	NOT_MODIFIED: 304
}