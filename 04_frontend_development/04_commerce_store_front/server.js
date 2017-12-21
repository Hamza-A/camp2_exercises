const express = require("express");
const nunjucks = require("nunjucks");
const queries = require("./queries.js")

const app = express();
const port = process.env.PORT || 3000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.set("views", __dirname + "/views");
app.set("view engine", "njk");

app.get("/", function(request, result) {
  queries.getCategories()
    .then((categories) => result.render("home", {"categories": categories}));
});

app.get("/categories/:param", function(request, result) {
  queries.getProducts(request.params.param)
    .then((products) => result.render("products", {"products": products}));
});

app.get("/products/:param", function(request, result) {
  queries.getDetails(request.params.param)
    .then((details) => result.render("details", {"details": details}));
});

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});
