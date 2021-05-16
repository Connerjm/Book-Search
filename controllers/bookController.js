const db = require("../models/book");

module.exports =
{
    //Find all books.
    get: function(req, res)
    {
        db.Book.find()
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //Add a new book.
    post: function(req, res)
    {
        db.Book.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },

    //Delete a book by id.
    delete: function(req, res)
    {
        db.Book.findById({ _id: req.params.id })
            .then(data => data.remove())
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}