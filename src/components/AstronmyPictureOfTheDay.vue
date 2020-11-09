<template>
  <div class="AstronmyPictureOfTheDay">
    <div>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
    </div>
    <div class="datepicker">
      <Datepicker
          v-model="time1"
          valueType="format"
          :aria-placeholder="time1">
      ></Datepicker>
      <button type="button" @click="getImage()" class="btn btn-outline-dark">Go</button>
    </div>
    <div>
      <h5>{{ request.title }}</h5>
      <p>{{ request.explanation }}</p>
      <img :src="request.hdurl" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
export default {
  components: {
    Datepicker
  },
  name: "AstronmyPictureOfTheDay",
  data(){
    return {
      time1:  new Date(),
      disabledDates: {
        to: new Date(Date.now())
      },
      lastTime1: '',
      request: '',
    };
  },
  methods:{
    getImage(){
      this.lastTime1 = this.time1.getFullYear()+'-' +(this.time1.getMonth()+1)+'-'+ '0' +this.time1.getDate();
      axios.get(`https://api.nasa.gov/planetary/apod?date=`+this.lastTime1+`&api_key=573cUUcMGssr0HUH9lnrDw9i7Q4kGciCZ7fuqGbx`)
          .then(res => {
            this.request = res.data
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          });
    }
  }
}
</script>

<style scoped>
.datepicker{
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
}
.AstronmyPictureOfTheDay{
  width: 75%;
  margin: auto;
}
@media only screen and (max-width: 550px){
  #app > div.AstronmyPictureOfTheDay > div.datepicker{
    flex-direction: column;
  }
  #app > div.AstronmyPictureOfTheDay > div.datepicker > div{
    width: 100%;
    margin-bottom: 30px;
  }
}
.vdp-datepicker {
  text-align: center;
}
#app > div.AstronmyPictureOfTheDay > div.datepicker > button{
  width: 45%;
  margin: auto;
}
#app > div.AstronmyPictureOfTheDay > div:nth-child(3){
  margin-top: 25px
}
#app > div.AstronmyPictureOfTheDay > div:nth-child(3) h5{
  margin-bottom: 25px;
}
#app > div.AstronmyPictureOfTheDay > div.datepicker > div{
  margin: 25px auto;
}
#app > div.AstronmyPictureOfTheDay > div:nth-child(3) img{
  width: 100%;
}
</style>