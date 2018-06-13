// Product here is the model name that is exported in server -> models -> <resource>.js
const Product = require('mongoose').model('Product');

// server-side logic for each route defined in server -> config -> routes -> <resource>.routes.js
//Note: you'll see these console.log comments in the terminal window (where you're running > nodemon server.js)
module.exports = {

  // index route gets all products in database
  index(request, response) {
    console.log('CONTROLLER in config->controllers->products.js index');

    Product.find({})
    .then(products => response.json(products))
    .catch(console.log);
    },


  show(request, response) {
    console.log('CONTROLLER in config->controllers->products.js show w/ request.params:', request.params);

    Product.findById(request.params._id)
    .then(product => {
      console.log('CONTROLLER in config->controllers->products.js Product.findById success w/ product:',product);
      response.json(product);
    })
    .catch(error => {
      console.log('CONTROLLERS products - show failure --> catch error:', error);
    });
  },


  update(request, response) {
    console.log('CONTROLLER in config->controllers->products.js update w/ request.body:', request.body);

    Product.findByIdAndUpdate(request.params._id, request.body, {new: true, runValidators: true} )
    .then(product => {
      console.log('CONTROLLER in config->controllers->products.js Product.update success w/ product:',product)
      response.json(product);
    })
    .catch(error => {
      console.log('CONTROLLERS products -update failure --> catch error:', error);
      const errors = Object.keys(error.errors).map(
        key => error.errors[key].message
        );
      response.status(400).json(errors);
    });
  },


  create(request, response) {
    console.log('CONTROLLER in config->controllers->products.js create w/ request:', request.body);

    // this does a create on the mongodb model Product
    Product.create(request.body)
    .then(product => {
      console.log('CONTROLLER in config->controllers->products.js Product.create  success w/ product:',product)
      response.json(product);
    })
    .catch(error => {
      console.log('CONTROLLERS products -create failure --> catch error:', error);
      const errors = Object.keys(error.errors).map(
        key => error.errors[key].message
        );
      response.status(400).json(errors);
    });
  },



  destroy(request, response) {
    console.log('CONTROLLER in config->controllers->products.js destroy w/ request.params:', request.params);

    Product.findByIdAndRemove(request.params._id)
    .then(product => response.json(product))
    .catch(console.log);
    }
	};
