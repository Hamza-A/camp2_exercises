const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const FB = require("fb");

const fs = require("fs");
const fetchWeather = require("./fetchWeather");

const queries = require("./queries");

const { Pool } = require("pg");

const pool = new Pool();

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

app.use(require("cookie-parser")());
app.use(require("body-parser").urlencoded({ extended: true }));

app.use(
  require("express-session")({
    secret: "kjsdhfkjhdfkjshdfkjh76876876gf4534!!jjjds%£",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, callback) {
  return callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  return findUserById(id).then(user => {
    callback(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.REDIRECT_URI
    },
    function(accessToken, refreshToken, profile, callback) {
      FB.api(
        "me",
        { fields: "id,name,email", access_token: accessToken },
        function(user) {
          findOrCreateUser(user)
            .then(user => {
              callback(null, user);
            })
            .catch(error => {
              callback(error);
            })
        }
      );
    }
  )
);

app.listen(port, function () {
  console.log("Server listening on port:" + port);
});

app.get("/", function(request, result) {
  result.redirect("/home");
});

app.get("/home", function(request, result){
  fs.readFile("home.html", "utf8", (error, html) => {
    result.send(html);
  });
});

app.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    authType: "rerequest",
    scope: ["email"]
  })
);

app.get(
  "/auth/callback",
  passport.authenticate("facebook", { failureRedirect: "/" }),
  function(request, result) {
    result.redirect("/profile");
  }
);

app.get("/login", function(request, result){
  fs.readFile("login.html", "utf8", (error, html) => {
    result.send(html);
  });
  }
)

app.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function(request, result) {
    result.render("profile", {
      id: request.user.id,
      name: request.user.name,
      emails: request.user.emails
    });
});

app.get("/weather/:city", function(request, result){
  const myCity = request.params.city
  fetchWeather.fetchWeather(myCity)
  .then((weatherObject) => {
    fs.readFile("weather.html", "utf8", (error, html) => {
      result.send(
        html
          .replace("{{myCity}}", weatherObject.name)
          .replace("{{temp}}", weatherObject.main.temp)
          .replace("{{description}}", weatherObject.weather[0].description)
          .replace("{{humidity}}", weatherObject.main.humidity)
          .replace("{{wind}}", weatherObject.wind.speed)
          .replace("{{sunrise}}", weatherObject.sys.sunrise)
          .replace("{{sunset}}", weatherObject.sys.sunset)
      );
    });
  })
});

app.post("/create_user", function(request, result){
  queries.createUser(request.body, pool)
    .then((res) => result.redirect("/profile/" + res.rows[0].id))
    .catch((error)=>console.warn(error))
});

app.get("/profile/:id", function(request, result){
  const id = request.params.id;
  queries.getUser(id, pool)
    .then((res) => result.send(res))
});
