import express from "express";
import bodyParser from "body-parser";
import {body} from "./model/Body";
import {myMap} from "./model/MyMap"
import {parseMap} from "./services/reqServices";


const app = express();
const jsonParser = bodyParser.json();
let rotas: myMap = {}


app.get('/', (req, res) => {
    res.send(parseMap(rotas));
})

app.post('/', jsonParser, (req, res) => {
  let rota = new body(req.body.servidor, req.body.workflow, req.body.contabilidade, req.body.empresa, req.body.tipo, req.body.id);
  delete rotas[rota.id];
  rotas[rota.id] = rota;
  res.send('Status registered successfully');
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));