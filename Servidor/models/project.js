// Load required packages
var mongoose 			=	require('mongoose'),

	Schema 				=	mongoose.Schema,

    // Define the schema rules (field names, types and rules)
	ProjectSchema = new Schema({
	   name   		: { type : String, required : true, max : 50 },
       description	: { type : String, required : true },
       employees    : { type: String, required: true },
       manager      : { type: String, required: true },
	   date 		: { type: Date, default: Date.now }
	});

// Export model for application usage
module.exports = mongoose.model('Project', ProjectSchema);