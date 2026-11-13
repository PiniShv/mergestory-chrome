const assert = require('node:assert');
const { embedUrl } = require('./embed.js');

assert.equal(embedUrl('https://www.youtube.com/watch?v=aTvCur8bKgc'), 'https://www.youtube-nocookie.com/embed/aTvCur8bKgc?autoplay=1');
assert.equal(embedUrl('https://youtu.be/aTvCur8bKgc'), 'https://www.youtube-nocookie.com/embed/aTvCur8bKgc?autoplay=1');
assert.equal(embedUrl('https://drive.google.com/file/d/1AbCdEfGhIjKlMnOp/view?usp=sharing'), 'https://drive.google.com/file/d/1AbCdEfGhIjKlMnOp/preview');
for (const bad of [
  'not a url',
  'http://www.youtube.com/watch?v=aTvCur8bKgc',
  'https://www.youtube.com.evil.example/watch?v=aTvCur8bKgc',
  'https://www.youtube.com/watch?v=a/../../x',
  'https://www.youtube.com/watch?v=abc%22onload',
  'https://youtu.be/abc/def',
  'https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOp',
  'https://example.com/watch.html',
  'javascript:alert(1)',
]) assert.equal(embedUrl(bad), null, bad);
console.log('ok');
