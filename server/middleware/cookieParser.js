const parseCookies = (req, res, next) => {
  // get cookies from request header
  console.log(req.headers)
  let cookies = {};
  if(req.headers.Cookie){
    let arr = req.headers.Cookie.split('; ');
    console.log({arr})
    arr.forEach(item=>{
    let splittedItem = item.split('=');
    cookies[splittedItem[0]]=splittedItem[1];
    console.log({cookies})
   })

  }

  // convert the string into object
  // set the object to req

  //console.log({cookies: req.cookies});
};

module.exports = parseCookies;