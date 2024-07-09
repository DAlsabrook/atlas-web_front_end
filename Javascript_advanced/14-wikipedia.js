function createElement (data) {
  let para = document.createElement("p");
  para.innerText = data;
  document.body.append(para);
}

function queryWikipedia (callback) {
  let request = new XMLHttpRequest();
  request.open("GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
    true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 300) {
      let response = JSON.parse(request.responseText);
      callback(response.query.pages[Object.keys(response.query.pages)[0]].extract)
    }
  };
  request.send();
}

queryWikipedia(createElement);
