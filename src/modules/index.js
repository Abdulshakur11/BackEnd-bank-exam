const express = require('express');
const router = express.Router();

const { GET_COMPANYS, POST_COMPANY } = require('../modules/company/company');
const { GET_COMPLEX, POST_COMPLEX } = require('./Complex/Complex')
const { GET_NUMBER_OF_ROOMS, POST_NUMBER_OF_ROOMS, DELETE_ROOMS, GET_CALC_FUNCTION} = require('./rooms/rooms');
const { GET_BANKS, POST_BANK, UPDATE_BANK, DELETE_BANK } = require('./bank/bank');
const { POST_REQUESTS, DELETE_REQUESTS, GET_REQUESTS} = require('./users/users');
const { GET_ARCHIVED_REQ } = require('./archive/archive');

router
      // Company
      .get('/company', GET_COMPANYS)
      .post('/company', POST_COMPANY)
      // Complex
      .get('/complex', GET_COMPLEX)
      .post('/complex', POST_COMPLEX)
      // Number of rooms 
      .get('/number_of_romms', GET_NUMBER_OF_ROOMS)
      .post('/number_of_romms', POST_NUMBER_OF_ROOMS)
      .delete('/number_of_romms', DELETE_ROOMS)
      // Banks CRUD
      .get('/bank', GET_BANKS)
      .post('/bank', POST_BANK)
      .put('/bank', UPDATE_BANK)
      .delete('/bank', DELETE_BANK)
      // CALCFUNCTION
      .get('/calc_func', GET_CALC_FUNCTION)
      // User 
      .get('/requests', GET_REQUESTS)
      .post('/requests', POST_REQUESTS)
      .delete('/requests', DELETE_REQUESTS)
      // Arichive
      .get('/archive', GET_ARCHIVED_REQ)





module.exports = router;