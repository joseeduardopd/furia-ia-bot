const { createServer } = require('http');
const { Server } = require('socket.io');

const httpServer = createServer();
const io = new Server(httpServer, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('joinMatch', matchId => {
    let round = 1;
    const interval = setInterval(() => {
      socket.emit('roundUpdate', `Round ${round}: exemplo de evento do round.`);
      if (++round > 30) clearInterval(interval);
    }, 2000);
  });
});

httpServer.listen(3001, () => console.log('WebSocket server on 3001'));
