var supertest = require('supertest'),
app = require('server');

exports.car_should_return_cars = function(done){
  supertest(app)
  .get('/api/car')
  .expect(200)
  .end(done);
};