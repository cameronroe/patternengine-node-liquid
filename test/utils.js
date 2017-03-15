var expect = require('chai').expect;
var utils = require('../lib/util_liquid');
var engine = require('../lib/engine_liquid');

describe('Utils', function() {

  it('should find {{ include }} snippets', function (done) {
    var snippet = "<div>\n\n{{ include 'snippet-template' }}\n\n</div>"
    // expect(snippet.match(utils.partialsRE)).to.equal("{{ include 'snippet-template' }}")
    // var matches = engine.findPartials(snippet)
    // done()
  });

});
