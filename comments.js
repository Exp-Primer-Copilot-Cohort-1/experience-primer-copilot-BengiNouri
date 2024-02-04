// Create web server for comments
// Exports: router

const express = require('express');
const router = express.Router();

const Comment = require('../models/comment');

router.get('/', function (req, res) {
    Comment.find({}, function (err, comments) {
        if (err) {
            res.status(500).send('Error reading comments');
        } else {
            res.send(comments);
        }
    });
});

router.post('/', function (req, res) {
    const comment = new Comment({