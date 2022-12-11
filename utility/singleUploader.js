const createError = require("http-errors");
const multer = require("multer");
function uploader(subfolder_path, allowed_file_size, max_file_size, error_msg) {
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolder_path}`;

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExit = path.extname(file, originalname);
      const filename =
        file.originalname
          .replace(fileExit, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();
      cb(null, filename + fileExit);
    },
  });

  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cd) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });
  return upload;
}
module.exports = uploader;
