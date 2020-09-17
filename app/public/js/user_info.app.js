var app = new Vue({
  el: '#userTable',
  data: {
    uName:'',
    uOrigin:'',
    uBirthdate:'',
    uAge:'',
    uEmail:'',
    uPicture:'',
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
        this.uOrigin = userData.name.first;
        this.uBirthdate = userData.name.first;
        this.uAge = userData.name.first;
        this.uEmail = userData.name.first;
        this.uPicture = userData.name.first;
      });
    }
  }
})
