const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // Check for session cookie
  Promise.resolve(req.cookies.shortlyid)
  .then(hash =>{
    if (!hash) {
      throw hash;
    }
  }).catch(hash => {
    // if !exist -> make new session
    return models.Sessions.create()
      .then({insertId} =>{
        // attempt to load session from database
        models.Sessions.get({id: insertId})
          .tap(sessionData => {

          })
      })
  }).then();

  // if !exist -> make new session
  // otherwise -> session on req object

  next();


  // if (!req.headers.cookie) {
  //   models.Sessions.create().then(data => {
  //     let id = data.insertId;
  //     models.Sessions.get({id}).then(data => {
  //       // console.log({hash: data.hash});
  //       req.session = {
  //         hash: data.hash,
  //         user: {
  //           username: '//TODO'
  //         },
  //         userId: '//TODO'
  //       };
  //       if (data.user) {
  //         req.session.user = data.user
  //       }
  //       res.cookie('shortlyid', data.hash);
  //       next();

  //     });
  //   }).catch(err =>{
  //     throw err;
  //   });
  // }else{
  //   console.log('There is a  cooookie')
  // }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

