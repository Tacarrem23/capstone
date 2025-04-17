const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews for an item
router.get('/:itemId', async (req, res) => {
    try {
        const reviews = await Review.find({ item: req.params.itemId }).populate('user', 'username');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
