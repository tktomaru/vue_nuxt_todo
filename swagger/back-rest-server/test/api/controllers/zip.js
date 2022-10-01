var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('zip', function() {

    describe('GET /zip', function() {

      it('should return a default string', function(done) {

        request(server)
          .get('/zip')
          .set('Accept', 'application/zip')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
      });
    });
  });
});
