/**
 * Created by Farmas on 21.02.2017.
 */
import * as express from "express";
import * as schedule from "node-schedule";
import * as req from "request";


const app = express();
const PORT = 1000;

const getUsersGithubInfo = (user: string, callback) => {
  req.get(`https://api.github.com/users/${user}`,
    {headers: {'User-Agent': 'Awesome-Octocat-App'}},
    (error, res, body) => {
      callback(body)
    });
};

app.get('/find-me-on-github/:user', (request, response) => {
  getUsersGithubInfo(request.params.user, (body) => response.send(`
<pre>${JSON.stringify(JSON.parse(body), null, 2)}</pre>
`));

});


app.listen(PORT, () => {
  const scheduled = schedule.scheduleJob('1 * * * * *', () =>
    console.log('hello from scheduledJob')
  );
  console.log(`Start is up and running on localhost:${PORT}`)
});
