///<reference path="neural/service/NNUse.ts"/>
/**
 * Created by Farmas on 21.02.2017.
 */
import * as express from "express";
import * as schedule from "node-schedule";
import * as req from "request";
import { GraphqlServer } from "./graphql/index";
import { insertHour } from "./service/HourService";
import { example } from "./datasourceexample";
import { calculateExampleLSTM } from "./neural/index";
import { CalculateResult } from "./neural/controller";
const app = express();
const PORT = 1000;
const PORTQRAPHQLSERVICE = 2000;

const getUsersGithubInfo = (user: string, callback) => {
  req.get(`https://api.github.com/users/${user}`,
    { headers: { 'User-Agent': 'Awesome-Octocat-App' } },
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
  console.log("trigger shall begun")

  const insertedThingy = await insertHour(example);
  console.log(insertedThingy)
  response.send(insertedThingy)
});
app.get('/trigger2', (request, response) => {
  calculateExampleLSTM()
  response.send("hello")
});
//20	3	2016	11	6	14	Rain , Snow	23	1	1	95		0.2	0.03	0.2016	0.11	0.106	0.23		1	1	0.95			{input:[0.2,0.03,0.2016,0.11,0.106,0.23],output:[1,1,0.95]},
///calculate?day=20&month=3&year=2016&hour=11&temp=6&houseTemp=23
app.get('/calculate', (request, response) => {
  const day = Number(request.param('day'));
  const month = Number(request.param('month'));
  const year = Number(request.param('year'));
  const hour = Number(request.param('hour'));
  const temp = Number(request.param('temp'));
  const houseTemp = Number(request.param('houseTemp'));
  console.log("triggered calculate")
  console.log(day, month, year, hour, temp, houseTemp);
  const result = CalculateResult(day, month, year, hour, temp, houseTemp);
  response.send(JSON.stringify(result))
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
