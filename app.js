'use strict';

const fs = require('fs');
/**
 *
 *
 * @param {Object} file
 * @desc Alters any file that is passed through, changing all of its contents to uppercase.
 */
const alterFile = (file) => {




  
  
  fs.readFile( file, (err, data) => { //error first callback
    if(err) { throw err; }
  });

  fs.readFile(file, (data) => {
    return new Promise ((resolve, reject) => {
      if(!file) reject(new Error('no file passed'))
      resolve(file)


    })

  })
  



    let text = data.toString().toUpperCase();

    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
