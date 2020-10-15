var app = new Vue({
  el: '#comments',
  data: {
    commentList: [{
      id: '',
      commentText: ''
    }],
    newComment: {
      id: '',
      commentText: ''
    }
  },

  methods:{
    fetchUser(){
      fetch('api/comment/')
      .then(json => {
        this.commentList=json;
        console.log(this.commentList);
      });
    },

    createComment() {
      this.newComment.id
      fetch('api/comment/create.php', {
        method:'POST',
        body: JSON.stringify(this.newComment),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.commentList.push(json[0]);
        this.newComment = this.newCommentData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newComment);
    },
    newCommentData() {
      return {
        id: "",
        comments: ""
      }
    }

  },
  created() {
    this.fetchUser();
  }
});
