const multer = require("multer");
function uploader(subfolder_path, allowed_file_size, max_file_size, error_msg) {
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExit = path.extname(file, originalname);
      const filename = file.originalname
        .replace(fileExit, "")
        .toLowerCase()
        .split(" ")
        .join("-");
    },
  });
  return upload;
}
module.exports = uploader;
