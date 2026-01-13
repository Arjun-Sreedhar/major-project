app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"));
});