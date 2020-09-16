var app = new Vue({
  el: '#userTable',
  data: {
    fake: [
      {
        "patientGuid": "SOME-REALLY-LONG-1234",
        "firstName": "Sylvia",
        "lastName": "Hernandez",
        "dob": "2012-09-01",
        "sexAtBirth": "F",
        "priority": "critical"
      },
      {
        "patientGuid": "SOME-REALLY-SHORT-5678",
        "firstName": "Vish",
        "lastName": "Balasubramanian",
        "dob": "1950-12-15",
        "sexAtBirth": "M",
        "priority": "urgent"
      },
      {
        "patientGuid": "SOME-UNIQUE-ABCDE1",
        "firstName": "John",
        "lastName": "Doe",
        "dob": "1997",
        "sexAtBirth": "M",
        "priority": "minor"
      }
    ],
    uList: [],
    user: {}
  },

  created() {
    fetch("https://randomuser.me/api/")
    .then( response => response.json() )
    .then( json => {
      this.uList = json;
      console.log(json)}
    );
  }
})
