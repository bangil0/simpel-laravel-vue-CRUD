<template id="delete-post">
  <div class="container">
    <h3>Delete Post {{ post.title }}</h3>
    <p>Action cant be undone</p>
    <form v-on:submit.prevent = "deletePost">
      <button type="submit" class="btn btn-xs btn-danger" name="button">Delete Post</button>
      <router-link class="btn btn-xs btn-warning" v-bind:to="'/'">Cancel</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data:function(){
    return {post:{title:'',body:''}}
  },
  created:function(){
    let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
    Axios.get(uri).then((response) => {
      this.post = response.data;
    })
  },
  methods:{
    deletePost:function(){
      let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
      Axios.delete(uri, this.post).then((response) => {
        this.$router.push({name: 'Listposts'});
      });
    }
  }
}
</script>
