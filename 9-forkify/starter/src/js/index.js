// 14c4ee4509a4ac69e3ede12db237082b
// https://www.food2fork.com/api/search

import axios from 'axios';

async function getResults(query) {
  const key = '14c4ee4509a4ac69e3ede12db237082b';
  const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=${query}`);
}

getResults('pizza');
