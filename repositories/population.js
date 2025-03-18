import axios from 'axios';
const SERVER_NAME = 'datausa.io';
async function getPopulation({drilldowns, measures}) {
  const urlGetPopulation = `https://${SERVER_NAME}/api/data?drilldowns=${drilldowns}&measures=${measures}`;
  try {
    let result = [];
    let responseData = await axios.get(urlGetPopulation);
    console.log('data');
    responseData.data.data.forEach(function (item) {
      let obj = {};
      (obj.nameNation = item['Nation']),
        (obj.Population = item['Population']),
        (obj.Year = item['Year']),
        result.push(obj);
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export default {getPopulation};
