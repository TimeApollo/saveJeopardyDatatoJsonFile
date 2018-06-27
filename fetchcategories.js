module.exports = function (uri) {
const fetch = require('node-fetch');

  const fetching = async uri => {
    const response = await fetch(uri);
    const hydratedBody = await response.json();
    console.log(hydratedBody);
    return hydratedBody;
  }

  return fetching(uri);
}