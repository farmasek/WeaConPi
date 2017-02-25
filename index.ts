/**
 * Created by Farmas on 21.02.2017.
 */
import * as express from "express";
import * as schedule from "node-schedule";
import * as req from "request";
import { GraphqlServer } from "./graphql/index";
import { fillDB, creteHour } from "./repository/index";
import { Hour } from "./repository/models/Hour/model";
import { Weather } from "./repository/models/Weather/model";
const app = express();
const PORT = 1000;
const PORTQRAPHQLSERVICE = 2000;

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
app.get('/trigger', async(request, response) => {
  const newHour = await creteHour(new Hour({
      hour: 0,
      currentWeather: new Weather({
        temperature: 60,
        date: 'just sain'
      }),
      predictedWeather:new Weather({
        temperature: 99,
        date: 'just sain - 984488'
      }),
      predictedValues: "ye well ye"
    })
  )
  response.send(newHour)
});


app.listen(PORT, () => {
  const scheduled = schedule.scheduleJob('0 30 * * * *', () =>
    console.log('hello from scheduledJob')
  );
  console.log(`Start is up and running on localhost:${PORT}`)
});

GraphqlServer.listen(PORTQRAPHQLSERVICE, () => {
  console.log(`QraphQL is up and running on localhost:${PORTQRAPHQLSERVICE}`)
});
