<template>
  <div class="AstronmyPictureOfTheDay">
    <div>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
    </div>
    <div class="datepicker">
      <date-picker
          v-model="time1"
          valueType="format"
          :aria-placeholder="time1"
      >{{time1}}</date-picker>
      <button type="button" class="btn btn-outline-dark">Go</button>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
    DatePicker
  },
  name: "AstronmyPictureOfTheDay",
  data(){
    return {
      time1:  new Date().toLocaleString(),
    };
  }
}
</script>

<style scoped>
.datepicker{
  display: flex;
  justify-content: space-evenly;
}
.AstronmyPictureOfTheDay{
  width: 50%;
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
</style>