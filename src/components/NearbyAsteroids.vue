<template>
  <div class="NearbyAsteroids">
    <div>
      <p>Search for Asteroids based on their closest approach date to Earth</p>
    </div>
    <div class="datepicker">
      <date-picker
          v-model="time1"
          valueType="format"
          :aria-placeholder="time1"
      >{{time1}}</date-picker>
      <date-picker
          v-model="time2"
          valueType="format"
          :aria-placeholder="time2"
      >{{time1}}</date-picker>
      <button type="button" class="btn btn-outline-dark">Go</button>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: { DatePicker },
  name: "NearbyAsteroids",
  data() {
    return {
      time1:  new Date().toLocaleString(),
      time2:  new Date().toLocaleString(),
    };
  },
}
</script>
<style scoped>
.datepicker{
  display: flex;
  justify-content: space-evenly;
}
.NearbyAsteroids{
  width: 50%;
  margin: auto;
}
@media only screen and (max-width: 950px){
  .datepicker{
    flex-direction: column;
  }
  #app > div.NearbyAsteroids > div.datepicker > div:nth-child(1),
  #app > div.NearbyAsteroids > div.datepicker > div:nth-child(2){
    width: 100%;
    margin: 15px 0;
  }
  #app > div.NearbyAsteroids > div.datepicker > button{
    margin-top: 15px;
  }
}
</style>