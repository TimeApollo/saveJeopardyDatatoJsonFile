module.exports = function (hydratedBody) {
  const fs = require("fs");

  const textCategories =JSON.stringify(hydratedBody);

  fs.writeFile( 'categories.txt' , textCategories , (err) => {
    if (err) throw err;
    console.log( 'saved in categories.txt')
  });
}