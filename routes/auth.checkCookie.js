module.exports.checkCookie = function (req, res, next) {
    console.log(typeof req.signedCookies['userId'])
    if (!req.signedCookies['userId']) {
        console.log("You must login ~!")
        return res.redirect('/auth/login');
    }
    next();
}