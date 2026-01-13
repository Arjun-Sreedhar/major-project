const express= require("express");
const router=express.Router({mergeParams: true});
const wrapAsync=require("../util/wrapAsync.js");
// const ExpressError = require("../util/ExpressError.js");
const Review=require("../models/review.js");
const Listing = require("../models/listing");
const {isLoggedIn,isReviewAuthor,validateReview}=require("../middleware.js");
const reviewController = require("../controllers/reviews.js");





// Post Reviews route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

// Delete Reviews Post
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;
