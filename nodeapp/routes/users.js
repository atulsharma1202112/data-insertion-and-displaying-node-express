var express = require('express');
var router = express.Router();
var db=require('../database');
router.get('/form', function(req, res, next) { 
res.render('users'); 
});
router.post('/create', function(req, res, next) {
  
  // store all the user input data
  const userDetails=req.body;
 
  // insert user data into users table
  var sql = 'INSERT INTO students SET ?';
  db.query(sql, userDetails,function (err, data) { 
      if (err) throw err;
         console.log("User dat is inserted successfully "); 
  });
 res.redirect('/users/form');  // redirect to user form page after inserting the data
}); 

// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/user-list', function(req, res, next) {
  var sql='SELECT * FROM students';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('user-list', { title: 'User List', userData: data});
});
});
module.exports = router;