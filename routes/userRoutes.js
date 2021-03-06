const userController = require('../controllers/userController.js');

module.exports = (app) => {

  app
    .route('/users/create')
    .post(userController.createUser);

  app
    .route('/users/find')
    .post(userController.findUsers);

  app
    .route('/users/login')
    .post(userController.userLogin);

  app
    .route('/users/me')
    .post(userController.authenticateUser, userController.getMe);
  //.put();

  app
    .route('/users/me/token')
    .delete(userController.authenticateUser, userController.removeToken);

  // app
  //   .route('/users/:userId')
  //   .get(userController.findUser);
}
