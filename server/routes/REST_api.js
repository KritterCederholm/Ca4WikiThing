var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var wiki = mongoose.model('wiki');

/*/Hvad er grunden til at dette ikke fungere? Hvordan kan det komme til at virke! Svar: skriv '/api' før 'Hello'.
router.get('/Hello', function(req, res) {
   res.send("Hello there...");
});
*/

router.get('/wiki', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;
    }
    wiki.find({}, function (err, wiki) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type","application/json");
        res.end(JSON.stringify(wiki));
    });
});

/*
function getWiki(title) {
    if(typeof global.mongo_error !== "undefined"){
        return "Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)";
    }
    wiki.findByTitle(title,function (obj) {
        return obj;
    })

    return "some wikipage";
}
/* GET A wiki From The DataBase //

router.get('/getWiki/:title', function(req, res) {
  if(typeof global.mongo_error !== "undefined"){
    res.status(500);
    res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
    return;

  }
    var requestedTitle =  req.params.title;
  wiki.find({ title : requestedTitle}, function (err, wikiSchema) {
    if (err) {
      res.status(err.status || 400);
      res.end(JSON.stringify({error: err.toString()}));
      return;
    }
      console.log(requestedTitle);
    res.header("Content-type","application/json");
    res.end(JSON.stringify(wikiSchema));
  });
});

router.get('/findWiki/:searchString', function(req, res) {
    if(typeof global.mongo_error !== "undefined"){
        res.status(500);
        res.end("Error: "+global.mongo_error+" To see a list of users here, make sure you have started the database and set up some test users (see model-->db.js for instructions)");
        return;

    }
    var requestedSearchString = req.params.searchString;
    wiki.find( $or [{ title : requestedSearchString}, {}], function (err, wikiSchema) {
        if (err) {
            res.status(err.status || 400);
            res.end(JSON.stringify({error: err.toString()}));
            return;
        }
        res.header("Content-type","application/json");
        res.end(JSON.stringify(wikiSchema));
    });
});
*/

module.exports = router;

//getWiki(title);
//findWiki(searcgString);
//getCategories();
//getWikiesWithCategory(category);
