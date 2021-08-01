const fs = require('fs');
const date = Date.now();
const contents = {
  name: 'world-one',
  age: 18,
}

fs.writeFile(`createFile/createFile_${date}.ts`, `const userInfo = ${JSON.stringify(contents, null, 2)}`, function (err: any) {
  if (err) throw err;
  console.log('File is created successfully.');
});