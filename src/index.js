const fs = require('fs');
const path = require('path');
const _ = require('lodash');
let public = require('./resume-public.json');
let private = require('./resume-private.json');

const resume = JSON.stringify(_.merge(public, private), null, 2);

fs.mkdir(path.resolve(__dirname, '..', 'build'), () => {
  fs.writeFile(path.resolve(__dirname, '..', 'build', 'resume.json'), resume, (err) => {
    if(err) return console.log(`Error writing resume: ${err.message}`);
    
    console.log('Build finished');
  });
});
