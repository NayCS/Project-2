var db = require("../models");

module.exports = function (app) {
  // load homepage for user
  app.get("/", function (req, res) {
    //Find all people and then return them as a promise
    db.Person.findAll({}).then(result => {
      res.render("index", {
        person: result
      });
    })
  });

  // load second "thank you" page and display hat
  app.get("/hat", function (req, res) {
    res.render("hat", {});
  });

  // render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};