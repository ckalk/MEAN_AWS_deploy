const mongoose = require('mongoose');
	const { Schema } = mongoose;

	const productSchema = new Schema({
 		name: {
  		  type: String,
    		required: [true, 'Name is required'],
  		  trim: true,
   		  minlength: [3, 'Name must be at least 3 characters'],
      },
      qty:  {
        type: Number,
        min: [0, 'Qty must be greater than 0'],
        required: [true, 'Qty is required']
      },
  		price:  {
        type: Number,
        min: [0, 'Price must be greater than 0'],
        required: [true, 'Price is required']
      },
    },
	{
  		timestamps: true
	}
	);
	// makes collection ==> products
  module.exports = mongoose.model('Product', productSchema);


