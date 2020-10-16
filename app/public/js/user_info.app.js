var app = new Vue({
  el: '#userTable',
  data: {
    uName:'',
    uOrigin:'',
    uBirthdate:'',
    uAge:'',
    uEmail:'',
    uImgLarge:'',
    uImgMedium:'',
    uList: [],
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser: function() {
      fetch("https://randomuser.me/api/")
      .then( response => response.json() )
      .then( data => {
        var userData = data.results[0];
        console.log(userData);
        this.uName = userData.name.first + " " + userData.name.last;
        this.uOrigin = userData.location.country;
        this.uBirthdate = userData.dob.date;
        this.uAge = userData.dob.age;
        this.uEmail = userData.email;
        this.uImgLarge = userData.picture.large;
        this.uImgMedium = userData.picture.medium;

      });
    },
       formatDate(d) { return moment(d).format("MMM Do YYYY");
       }
     },
  })
