var namize = require('../');

describe('namize(string, 20)', function(){
  it('should return a string equal to \'Rene Geronimo Favaloro,\'', function(){
    namize('RENE GERONIMO FAVALORO').should.be.equal('Rene Geronimo Favaloro');
    namize('rene geronimo favaloro').should.be.equal('Rene Geronimo Favaloro');
    namize('reNe geRonImo Favaloro').should.be.equal('Rene Geronimo Favaloro');
  });
});
