"use strict";

var express = require('express');

var bcryptjs = require('bcryptjs');

var User = require('../models/user');

var authRouter = express.Router();
authRouter.post("/api/signup", function _callee(req, res) {
  var _req$body, name, email, password, existingUser, hashPassword, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
          existingUser = _context.sent;

          if (!existingUser) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            msg: "User With same email alread exists!"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(bcryptjs.hash(password, 8));

        case 9:
          hashPassword = _context.sent;
          user = new User({
            name: name,
            email: email,
            password: hashPassword
          });
          _context.next = 13;
          return regeneratorRuntime.awrap(user.save());

        case 13:
          user = _context.sent;
          res.json(user);
          _context.next = 20;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](1);
          res.status(500).json({
            error: _context.t0.message
          });

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 17]]);
});
module.exports = authRouter;