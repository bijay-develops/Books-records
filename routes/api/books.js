const express = require('express');
const router = express.Router(); 

//loading book Model 
const Book = require('../../models/Books');

// @route   Get api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.send('book route testing!'));


// @route   Get api/books
// @desc    Get all books 
// @access  public 
router.get('/', (req, res) => {
    Book.find() 
            .then(books => res.json(books))
            .catch(err => res.status(404).json({ nobooksfound: 'No Books found'}));
});

// @route   Get api/books/:id 
// @desc    Get single book by id 
// @access  Public
router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No Book found'}));
});

// @route   POST api/books
// @desc    Add/save book
// @access  Public 
router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book Added Successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to add this book'}));
});

// @route   PUT api/books/:id 
// @desc    Update book by id 
// @access  Public 
router.put('/:id', (req, res) => {
    Book.findByAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Upadted successfully'}))
        .catch(err => res.status(400).json({error: 'Unable to update the Database'}));
});

// @route   Delete api/books/:id
// @desc    Delete book by id 
// @access  Public 
router.delete('/', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(book => res.json({ msg: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a book'}));
});

module.exports = router;