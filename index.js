const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const db = {
  feedback: [
    {
      id: 1,
      rating: 10,
      user_name: 'Tony Stark',
      text: 'You are the ironman of this world',
    },
    {
      id: 2,
      rating: 9,
      user_name: 'Bruce Wayne',
      text: 'You are the batman of this world',
    },
    {
      id: 3,
      rating: 8,
      user_name: 'Peter Parker',
      text: 'You are the spiderman of this world',
    },
  ],
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
