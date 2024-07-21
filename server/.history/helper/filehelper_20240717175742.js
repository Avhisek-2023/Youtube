import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    return cb(null, `${Date.now}-${file.originalname}`);
  },
});
