import multer from "multer";

const storage = multer.diskStorage({
    destination :(req,res,cb) => {
        cb()
    },
    filename: (req,file,cb) => {
