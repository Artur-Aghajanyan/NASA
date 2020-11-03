<template>
  <div>
    <button type="button" class="btn btn-primary"><a :href="response" target="_blank">VIDEO</a></button>
    <img src="../assets/NASAHalloweenSun.jpg" alt="" >
  </div>
</template>

<script>
import axios from 'axios';

export default {
name: "Home",
  data(){
    return{
      response: ''
    }
  },
  created(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
          console.log(res.data.url)
          this.response = res.data.url
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        });
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
a{
  color: white;
}
</style>