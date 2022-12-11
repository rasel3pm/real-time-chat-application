const bcrypt = require("bcrypt");
const User = require("../models/People.js");

function getUser(req, res, next) {
  res.render("users.ejs");
}

async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avater: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  try {
    const saveUser = await newUser.save();
    res.status(200).json({ message: "User added succesfully!" });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error",
        },
      },
    });
  }
}

module.exports = {
  getUser,
  addUser,
};
