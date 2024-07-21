import multer from "multer";

const storage = multer.diskStorage({
    destination :(req,res,cb) => {
        cb(null,'')
    },
    filename: (req,file,cb) => {
