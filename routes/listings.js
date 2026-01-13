const express= require("express");
const router=express.Router();
const wrapAsync=require("../util/wrapAsync.js");


// const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");

const listingController=require("../controllers/listings.js");

//index route
router.get("/",wrapAsync(listingController.index));

//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//Create Route
router.post("/",validateListing,isLoggedIn,wrapAsync(listingController.createListing));

//Show route 
router.get("/:id",wrapAsync(listingController.showListing));

//Edit Route
router.get("/:id/edit",isLoggedIn ,isOwner,wrapAsync(listingController.renderEditForm));


//Update Route
router.put("/:id",validateListing,isLoggedIn,isOwner,wrapAsync(listingController.updateListing));

//DELETE Route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.deleteListing));


module.exports=router;
