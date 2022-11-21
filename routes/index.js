import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

/* GET localhost:[port]/api page. */
router.get('/', async (req, res) => {

  const apikey = 'CWB-DB593618-C1C4-48D2-892B-73C9CB68C91E';
  const dataid = 'M-A0085-001';
  const countyName = '臺北市';
  const townName = '大安區';
  
  let fetchData = await fetch(`https://opendata.cwb.gov.tw/api/v1/rest/datastore/${dataid}?Authorization=${apikey}&limit=1&format=JSON&CountyName=${countyName}&TownName=${townName}`);
  fetchData = await fetchData.json();

  if(fetchData){
    let allData = fetchData.records.Locations[0].Location[0].Time;
    res.status(200);
    res.set({'Content-Type':'text/html; charset=UTF-8'});
    for (let value of allData){
      res.write(`<p>${value.IssueTime}: 熱傷害指數 ${value.WeatherElements.HeatInjuryIndex}</p>`, 'UTF-8');
    }
    res.end();
  }
  res.send().end

});

export default router;