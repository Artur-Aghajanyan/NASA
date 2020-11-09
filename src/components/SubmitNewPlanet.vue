<template>
  <div>
    <p>If you found new planet you can add it to our directory (Reactive forms demo)</p>
    <div v-if="show" class="alert alert-success">
      Good job, form has been successfully submitted!
    </div>
    <input class="form-control" type="text" placeholder="Planet Name" v-model.trim="$v.planetName.$model" :class="{
             'is-invalid': $v.planetName.$error,
           }">
    <div class="invalid-feedback" >
      <span v-if="!$v.planetName.required">Required</span>
      <span v-if="!$v.planetName.minLength">Min length is {{$v.planetName.$params.minLength.min}} symbols</span>
    </div>
    <div>
      <select id="inputState" class="form-control" v-model.trim="$v.galaxyName.$model" :class="{
             'is-invalid': $v.galaxyName.$error,
           }">
        <option value="" disabled="disabled" style="background: lightgray">Galaxy name</option>
        <option value="Milky Way">Milky Way</option>
        <option value="Messier 83">Messier 83</option>
        <option value="Black Eye Galaxy">Black Eye Galaxy</option>
        <option value="Pinwheel">Pinwheel</option>
        <option value="Canis Major Dawrf">Canis Major Dawrf</option>
        <option value="Somewhere else...">Somewhere else...</option>
      </select>
      <div class="invalid-feedback" >
        <span v-if="!$v.galaxyName.required">Required</span>
      </div>
    </div>
    <input
           class="form-control ng-dirty ng-touched ng-invalid"
           placeholder="Diameter (km)"
           type="number"
           v-model.trim="$v.diameterKM.$model" :class="{
             'is-invalid': $v.diameterKM.$error,
           }"
           >
    <div class="invalid-feedback" >
      <span v-if="!$v.diameterKM.required">Required</span>
    </div>
    <input class="form-control ng-dirty ng-touched ng-invalid"
           placeholder="Diameter (mln km)" type="number"
           v-model.trim="$v.diameterMLNKM.$model" :class="{
             'is-invalid': $v.diameterMLNKM.$error,
           }">
    <div class="invalid-feedback" >
      <span v-if="!$v.diameterMLNKM.required">Required</span>
    </div>
    <input class="form-control" type="text" placeholder="Your name"
           v-model.trim="$v.name.$model" :class="{
             'is-invalid': $v.name.$error,
           }">
    <div class="invalid-feedback" >
      <span v-if="!$v.name.required">Required</span>
    </div>
    <input class="form-control" type="text" placeholder="Your email"
           v-model.trim="$v.email.$model" :class="{
             'is-invalid': $v.email.$error,
           }">
    <div class="invalid-feedback" >
      <span v-if="!$v.email.required">Required</span>
      <span v-if="!$v.email.email">Email is not valid</span>
    </div>
    <button type="button" class="btn" @click="sendData">Submit</button>
  </div>
</template>

<script>
import {minLength, required, email} from "vuelidate/lib/validators";

export default {
  name: "SubmitNewPlanet",
  data(){
    return{
      planetName: '',
      galaxyName: '',
      diameterKM: '',
      diameterMLNKM: '',
      name: '',
      email: '',
      show: false,
    }
  },
  validations:{
    planetName:{
      required,
      minLength: minLength(16),
    },
    galaxyName:{
      required,
    },
    diameterKM:{
      required,
    },
    diameterMLNKM:{
      required,
    },
    name:{
      required,
    },
    email:{
      required,
      email
    }
  },
  methods:{
    sendData(){
      if(this.$v.$invalid){
        this.$v.$touch();
        this.show = false
        return ;
      }
      this.show = true
    }
  }
}
</script>

<style scoped>
#app > div:nth-child(2){
  width: 50%;
  margin: auto;
  align-content: space-around;
}
input, #app > div:nth-child(2) > div{
  margin-top: 6px;
}
#app > div:nth-child(2) > input:nth-child(5){
  margin-bottom: 18px;
}
button{
  margin-top: 25px;
}
p{
  margin-bottom: 15px;
}
</style>