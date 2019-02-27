import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query
    }

    async getResults() {
        const key = '14c4ee4509a4ac69e3ede12db237082b';
        try {
          const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
          this.result = res.data.recipes;
        } catch (error) {
          alert(error)
        }
    }
}


