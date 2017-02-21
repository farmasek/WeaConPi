/**
 * Created by Farmas on 21.02.2017.
 */
import * as express from 'express';
const app = express();
const PORT = 1000;

app.get('/hello-world', (request, response) => {
    response.send('Hello from hello world endpoint');
});

app.listen(PORT, () => {
    console.log(`Start is up and running on localhost:${PORT}`)
});