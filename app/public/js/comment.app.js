var app = new Vue({
  el: '#userTable',
  data: {
    commentList: [],
    newCommentForm: {}
  },

  methods: {
    newCommentData() {
      return {
        id: "",
        comments: ""
      }
    };

    handleNewCommentForm( evt ) {

      fetch('api/comment/index.php', {
        method:'POST',
        body: JSON.stringify(this.newCommentForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.commentList.push(json[0]);
        this.newCommentForm = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCommentForm);
    },

  },
  created() {
    fetch("api/comment/")
    .then( response => response.json() )
    .then( json => {
      this.newCommentForm = json;

      console.log(json)}
    );

    this.newCommentForm = this.newCommentData();
  }
  })
