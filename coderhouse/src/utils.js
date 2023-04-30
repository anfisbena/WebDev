import multer from 'multer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {hashSync,compareSync,genSaltSync} from 'bcrypt';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/public/images`);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

export const uploader = multer({ storage });

// PASS HASH
export const hash = (password) => hashSync(password, genSaltSync(10)); // Hashea 10 saltos
export const validatePassword =(user, password) => compareSync(password, user.password);// Compara el password con el hash


export default __dirname;