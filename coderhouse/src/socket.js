import { Server } from 'socket.io';

const socket = {};

socket.connect = (server) => {
  socket.io = new Server(server);

  socket.io.on('connect', (socket) => {
    console.log(`${socket.id} connected`);
  });
};

export default socket;