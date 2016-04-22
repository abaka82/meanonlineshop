'use strict';

var app = require('../..');
import request from 'supertest';

var newProduct;

function guid() {
	  function s4() {
	    return Math.floor((1 + Math.random()) * 0x10000)
	      .toString(16)
	      .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	    s4() + '-' + s4() + s4() + s4();
};


describe('Product API:', function() {

  describe('GET /api/products', function() {
    var products;

    beforeEach(function(done) {
      request(app)
        .get('/api/products')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          products = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      products.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/products', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/products')
        .send({
      		  Title: 'New Product',
      		  Author: 'Andry Baka',
      		  Description: 'This is a new book',
      		  Category: 'Book',
      		  Image: 'xxx',
      		  Price: 123,
      		  Stock: 5,
      		  Status: 'Ready'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newProduct = res.body;
          done();
        });
    });

    it('should respond with the newly created thing', function() {
      newProduct.Title.should.equal('New Thing');
      newProduct.Author.should.equal('This is the brand new thing!!!');
    });

  });

  describe('GET /api/products/:id', function() {
    var product;

    beforeEach(function(done) {
      request(app)
        .get('/api/products/' + newThing._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          product = res.body;
          done();
        });
    });

    afterEach(function() {
      product = {};
    });

    it('should respond with the requested thing', function() {
      thing.Title.should.equal('New Product');
      thing.Author.should.equal('Andry Baka');
    });

  });

  describe('PUT /api/products/:id', function() {
    var updatedProduct;

    beforeEach(function(done) {
      request(app)
        .put('/api/products/' + newThing._id)
        .send({
          id: guid(),
		  Title: 'New Product',
		  Author: 'Andry Baka',
		  Description: 'This is a new book',
		  Category: 'Book',
		  Image: 'xxx',
		  Price: 123,
		  Stock: 5,
		  Status: 'Ready'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedProduct = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProduct = {};
    });

    it('should respond with the updated thing', function() {
      updatedProduct.Title.should.equal('New Product');
      updatedProduct.Author.should.equal('Andry Baka');
    });

  });

  describe('DELETE /api/products/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/products/' + newProduct._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when thing does not exist', function(done) {
      request(app)
        .delete('/api/products/' + newProduct._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
