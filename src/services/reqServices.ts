import {myMap} from "../model/MyMap";
import {ImapService} from "../model/ImapService";

export function parseMap(map: myMap): ImapService{ 
  let rotas: ImapService = {}
  let s1 = []
  let s2 = []
  let s3 = []
  let s4 = []
  let s5 = []

  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      const element = map[key];
      switch (element.servidor.toLowerCase()) {
        case "s1":
          s1.push(element)
          break;
        case "s2":
          s2.push(element)
          break;
        case "s3":
          s3.push(element)
          break;
        case "s4":
          s4.push(element)
          break;
        case "s5":
          s5.push(element)
          break;
        default:
          break;
      }
    }
  }

  rotas["s1"] = s1;
  rotas["s2"] = s2;
  rotas["s3"] = s3;
  rotas["s4"] = s4;
  rotas["s5"] = s5;

  return rotas;
}