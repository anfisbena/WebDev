import { promises as fs } from 'fs';
import crypto from 'crypto';

export default class UserManager {
  constructor(path) {
    this.path = path;
    this.users = null;
  }

  async getUsers() {
    try {
      const data = await fs.readFile(this.path);
      this.users = JSON.parse(data);
    } catch (err) {
      console.log(err);
    }
  }

  async addUser(usuario) {
    // validation rules
    if (!usuario.nombre || !usuario.email || !usuario.contrasena) {
      return 'error';
    }

    this.users ??= await this.getUsers();
    // encrypt password
    usuario.salt = crypto.randomBytes(128).toString('base64');
    usuario.contrasena = crypto.createHmac('sha256', usuario.salt).update(usuario.contrasena).digest();

    // update database
    try {
      const newUserList = [...this.users, usuario];
      await fs.writeFile(this.path, JSON.stringify(newUserList, null, '\t'));
      this.users = newUserList;
    } catch (err) {
      console.log(err);
    }
  }
}