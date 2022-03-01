/* eslint-disable prettier/prettier */
import express from "express";
import routes from './routes/resizeImageRoute';

/* initialize an instance of application */
const app: express.Application = express();

/* initialize the port */
const port = 5000;

/* the main endpoint */
app.use('/api', routes);
app.listen(port, () => {
  console.log(`the server on localhost: ${port}`);
});

/* send message to the user */
app.use('/', (req: express.Request, res: express.Response) => {
  res.send(
    `welcome there ! \n 
    the request work on api/resize..... \n
    use imageName & width & height \n
    existing images are['encenadaport', 'fjord', 'icelandwaterfall', 'palmtunnel', 'santamonica']`
  );
});

export default app;