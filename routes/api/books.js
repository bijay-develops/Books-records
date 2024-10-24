const express = require('express');
const router = express.Router(); 

//loading book Model 
const book = require('../../models/Books');

// @route   Get api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.send('book route testing!'));


// @route   Get api/books
// @desc 