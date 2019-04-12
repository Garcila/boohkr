const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// Matches with "/api/books"
router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// Matches with "/api/books/one/:term"
router.route('/one/:term').get(booksController.findOne);

module.exports = router;
