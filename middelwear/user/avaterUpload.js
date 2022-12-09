function avaterUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg,", "image/png,"],
    1000000,
    "Only .jpg,jpeg or png fromat allow!"
  );
}

module.exports = avaterUpload;
