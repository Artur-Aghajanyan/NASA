<template>
  <div class="AstronmyPictureOfTheDay">
    <div>
      <p>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
    </div>
    <div class="datepicker">
      <Datepicker
          v-model="time1"
          valueType="format"
          :aria-placeholder="time1"
          :disabledDates="disabledDates">
      >{{time1}}</Datepicker>
      <button type="button" class="btn btn-outline-dark">Go</button>
    </div>
  </div>
</template>

<script>
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
      }
    };
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
.vdp-datepicker {
  text-align: center;
}
#app > div.AstronmyPictureOfTheDay > div.datepicker > button{
  width: 45%;
  margin: auto;
}
</style>