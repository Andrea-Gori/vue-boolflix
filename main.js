var app = new Vue ({
  el: '#root',
  data: {
    films:[],
    serieTv: [],
    search:"",
  },
  methods:{
    film: function () {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=74a361da41ac0bbd2519a0e9061e81d3&query=${this.search}&lenguage=IT`).then((response) => {
        this.films = response.data.results;
        console.log(response.data.results);
      });
    },
    serieTv: function () {
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=74a361da41ac0bbd2519a0e9061e81d3&query=${this.search}&lenguage=IT`).then((response) => {
        this.serieTv = response.data.results;
        console.log(response.data.results);
      });
    },
  },
})
