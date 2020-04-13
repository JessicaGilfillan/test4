
function loadProducts(url, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        callback(request.response);

    };
}

fetch('https://200427063.github.io/Lab4/wired.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

//callback function

function producttypes(jsonObj) {
    let producttypes = jsonObj.producttypes;

    let div = document.querySelector('div');
    for (let i = 0; i < producttypes.length; i++) {
        //build the new html element on our page
        let article = document.createElement('article');
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let ul = document.createElement('ul')


        img.setAttribute('src', 'https://200427063.github.io/Lab4/assets/' +
            producttypes[i].image);
        img.setAttribute('alt', producttypes[i].image);
        h2.textContent = producttypes[i].name;
        p1.textContent = 'price : ' + producttypes[i].price;
        p2.textContent = 'details : ' + producttypes[i].details;

        function myFunction() {
            p2.document.getElementById("details").innerHTML = +producttypes[i].details;
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        div.appendChild(article);

    }


}
loadProducts('https://200427063.github.io/Lab4/wired.json', producttypes);
