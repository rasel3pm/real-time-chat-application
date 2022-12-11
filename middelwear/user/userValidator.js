const { check, validationResult } = require("express-validator");
const { unlink } = require("fs");
const createHttpError = require("http-errors");
const path = require("path");
const User = require("../../models/People");
const addUserValidator = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-us", { ignore: " _" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),

  check("email")
    .isEmail()
    .withMessage("Email is required")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });

        if (user) {
          throw createHttpError("Email already is use");
        }
      } catch (err) {
        throw createHttpError(err.message);
      }
    }),

  check("mobile")
    .isMobilePhone("bn-BD", {
      strictMode: true,
    })
    .withMessage("mobile number must be Bangladeshi")
    .custom(async (value) => {
      try {
        const user = await User.findOne({ mobile: value });

        if (user) {
          throw createHttpError("mobile already is use");
        }
      } catch (err) {
        throw createHttpError(err.message);
      }
    }),

  check("password")
    .isStrongPassword()
    .withMessage(
      "password  must be at least 8 carecter,1 lowercase,1 uppercase,1 number,1 symbol"
    ),
];

const addUserValidationResult = function (req, res, next) {
  const errors = validationResult(req);
  const mapedError = errors.mapped();
  if (Object.keys(mapedError).length === 0) {
    next();
  } else {
    if (req.files.length === 0) {
      const { filename } = req.files[0];
      unlink(
        path.join(__dirname, `/../public/uploads/avaters/${filename}`),
        (err) => {
          if (err) console.log(err);
        }
      );
    }
    res.status(500).join({
      errors: mapedError,
    });
  }
};

module.exports = {
  addUserValidator,
  addUserValidationResult,
};
