const fetchCategories = require('./fetchcategories.js');
const writeCategories = require('./writecategories.js');

const categoryURI = "http://jservice.io/api/categories?count=100&offset=";

const randomOffset = () => Math.floor(Math.random()*18001);

const saveFile = async () => {
  const categories = await fetchCategories(categoryURI + randomOffset());
  writeCategories(categories);
}

saveFile();

//This does the same thing as above but was playing around to see what else works.
// fetchCategories(categoryURI + randomOffset()).then(categories => {
//   console.log(categories);
//   writeCategories( categories );
// });

