// Imports
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = express.Router();
const bookController = require("./controllers/bookController");

// Variables
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production")
{
    app.use(express.static("client/build"));
}

// API routes
router
    .route("/")
    .get(bookController.get)
    .post(bookController.post);

router
    .route("/:id")
    .delete(bookController.delete);

app.use(router);

// Send every other request to the React app
app.get("*", function(req, res)
{
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

// Start server
app.listen(PORT, function()
{
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
