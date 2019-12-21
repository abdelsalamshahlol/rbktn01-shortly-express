const parseCookies = (req, res, next) => {
  // get cookies from request header
  let cookie = req.headers.cookie;
  let cookiesObj = {};

  if (cookie) {
    // convert the string into object
    let splitCookie = cookie.split('; ');
    splitCookie.forEach(cookieStr =>{
      let [key, val] = cookieStr.split('=');
      cookiesObj [key] = val;
    });
  }

  // set the object to req
  // console.log(cookiesObj)
  req.cookies = cookiesObj;
  next();
};

module.exports = parseCookies;