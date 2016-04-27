/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Product from '../api/product/product.model';

Product.find({}).remove()
  .then(() => {
    Product.create({
      Title: 'Development Tools',
      Description: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.',
      Author: 'Expert 1',
      Category: 'Web programming',
      Image: '',
      Price: 100,
      Stock: 100,
      Status: 'Available'    
    }, {
      Title: 'Server and Client integration',
      Description: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.',
      Author: 'Expert 2',
      Category: 'Web programming',
      Image: '',
      Price: 200,
      Stock: 100,
      Status: 'Available'
    }, {
      Title: 'Smart Build System',
      Description: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html',
      Author: 'Expert 3',
      Category: 'HTML',
      Image: '',
      Price: 150,
      Stock: 10,
      Status: 'Available'
    }, {
      Title: 'Modular Structure',
      Description: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability',
      Author: 'Expert 4',
      Category: 'OOP',
      Image: '',
      Price: 30,
      Stock: 30,
      Status: 'Available'
    }, {
      Title: 'Optimized Build',
      Description: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.',
      Author: 'Exper 4',
      Category: 'Deployment',
      Image: '',
      Price: 123,
      Stock: 123,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment sadas',
      Description: 'dsfsdfdsfs your app to Heroku or dsdsds with the heroku ' +
             'and openssdfsfhift subgenesdfsdfrators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    }, {
      Title: 'Deployment Ready',
      Description: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators',
      Author: 'Salesforce',
      Category: 'Heroku',
      Image: '',
      Price: 20000,
      Stock: 5,
      Status: 'Available'
    })
    .then(() => {
      console.log('finished populating products');
    });
  });
  
  
/*Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });*/

/*User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      firstname: 'Admin',
      lastname: 'admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });*/
