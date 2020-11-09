<template>
  <div class="NearbyAsteroids">
    <div>
      <p>Search for Asteroids based on their closest approach date to Earth</p>
    </div>
    <div class="datepicker">
      <Datepicker
          v-model="time1"
          valueType="format"
          :disabledDates="disabledDates"
          :format="DatePickerFormat"
      ></Datepicker>
      <Datepicker
          v-model="time2"
          valueType="format"
          :format="DatePickerFormat"
          :disabledDates="disabledDates"
      ></Datepicker>
      <button type="button" class="btn btn-outline-dark" @click="getClosestAsteroids()">Go</button>
    </div>
    <div v-if="show" class="table-responsive" style="overflow-x:auto;">
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Distance (km)</th>
          <th scope="col">Absolute Magnitude</th>
          <th scope="col">Is potentially hazardous</th>
          <th scope="col">Diameter (meters)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-bind:key="index" v-for="(item, index) in closestAsteroids">
          <td>{{item.name}}</td>
          <td>{{ item.close_approach_data[0].miss_distance.kilometers }}</td>
          <td>{{ item.absolute_magnitude_h }}</td>
          <td v-if="item.is_potentially_hazardous_asteroid === true">Yes</td>
          <td v-else>No</td>
          <td>{{item.estimated_diameter.meters.estimated_diameter_min}} - {{item.estimated_diameter.meters.estimated_diameter_max}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
export default {
  components: { Datepicker },
  name: "NearbyAsteroids",
  data() {
    return {
      time1:  new Date(),
      time2:  new Date(),
      disabledDates: {
        to: new Date(Date.now())
      },
      DatePickerFormat: 'yyyy-MM-dd',
      closestAsteroids: [],
      show: null,
    };
  },
  methods:{
    getClosestAsteroids(){
      let app = this;
      axios.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY')
          .then(res => {
            for (const [key, value] of Object.entries(res.data.near_earth_objects)) {
                if(key.split("-")[0] >= this.time1.getFullYear()
                  && key.split("-")[1] >= (this.time1.getMonth()+1)
                  && key.split("-")[2] >= (this.time1.getDate())
                  && key.split("-")[0] <= this.time2.getFullYear()
                  && key.split("-")[1] <= (this.time2.getMonth()+1)
                  && key.split("-")[2] <= (this.time2.getDate())){
                  this.show = true;
                    for(let i = 0; i < value.length; i++){
                      app.closestAsteroids.push(value[i])
                    }
                }
            }
            this.response = res.data.url
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
.NearbyAsteroids{
  width: 80%;
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
    width: 45%;
    margin: auto;
  }
  table{
    font-size: 11px;
  }
}
.vdp-datepicker {
  text-align: center;
}
#app > div.NearbyAsteroids > table, #app > div.NearbyAsteroids > div.datepicker{
  margin-bottom: 25px;
}
</style>