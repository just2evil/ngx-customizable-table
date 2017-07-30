var path = require('path');
var ghpages = require('gh-pages');

var dir = path.resolve(path.join(__dirname, '../', 'dist'));
ghpages.publish(dir, {
  user: {
    name: 'Colin Wilkinson',
    email: 'wilca014@gmail.com'
  },
  message: '(deploy): CI',
  logger: function(message) {
    console.log('gh-pages: ', message);
  }
});
