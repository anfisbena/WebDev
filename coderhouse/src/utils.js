import multer from "multer";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

//configuracion multer
const storage = multer.diskStorage({
  destination: (req,file,cb)=>{cb(null,`${__dirname}/public/images`)},
  filename: (req,file,cb)=>{cb(null,`${Date.now()}-${file.originalname}`)}
});

export const uploader = multer({storage})
export default __dirname;