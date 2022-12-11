const upload = require("../../utility/singleUploader");

function avaterUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg,", "image/png,"],
    1000000,
    "Only .jpg,jpeg or png fromat allow!"
  );

  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avater: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

module.exports = avaterUpload;
