var navbar = document.createElement("nav");
    var anchor1 = document.createElement("a");
    var anchor2 = document.createElement("a");
    var anchor3 = document.createElement("a");
    anchor1.style.color ="green"
    anchor2.style.color = "red"
    anchor3.style.color = "purple"
    anchor1.style.padding ="20px"
    anchor3.style.padding = "20px"
document.body.appendChild(navbar);

anchor1.setAttribute("href", "www.kosherfood.com");
anchor2.setAttribute("href", "Kosher foods");
anchor3.setAttribute("href", "Non Kosher Foods");
anchor1.textContent = "Kosherfood.com"
anchor2.textContent = "Kosherfoods"
anchor3.textContent = "Non Kosher Foods"

navbar.appendChild(anchor1);
navbar.appendChild(anchor2);
navbar.appendChild(anchor3);

var h1 = document.createElement("h1");
h1.textContent = "The best Kosher foods in the World!"
document.body.appendChild(h1);
h1.style.color = "red"

var para = document.createElement("p");
para.textContent = `Discover now our comparison of the best Jewish Kosher Foods. It is never easy to choose from the wide range of offers. On the market, you will find an incalculable number of models, all at different prices. And as you will discover, the best Jewish Kosher Foods are not always the ones at the highest prices! Many criteria are used, and they make the richness and relevance of this comparison.
To help you make the best choice among the hundreds of products available, we have decided to offer you a comparison of the Jewish Kosher Foods in order to find the best quality/price ratio. In this ranking, you will find products listed according to their price, but also their characteristics and the opinions of other customers. Also discover our comparisons by categories. You won’t have to choose your products at random anymore.`;
document.body.appendChild(para);

var unorderedList = document.createElement("ul");
    var listItem1 = document.createElement("li");
    var listItem2 = document.createElement("li");
    var listItem3 = document.createElement("li");
    document.body.appendChild(unorderedList);
    listItem1.textContent = "Kosherfood.com"
    listItem2.textContent = "Kosherfoods"
    listItem3.textContent = "Non Kosher Foods"
    unorderedList.appendChild(listItem1);
    unorderedList.appendChild(listItem2);
    unorderedList.appendChild(listItem3);

    var footer = document.createElement("FOOTER");
    var img = document.createElement("img");
    img.setAttribute("src", "https://bohatala.com/wp-content/uploads/2019/04/Kosher-Food-in-Israel-Article-Review.jpg");
    footer.appendChild(img);
    document.body.appendChild(footer);
    

