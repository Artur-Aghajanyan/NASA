<template>
  <div>
    <p>If you found new planet you can add it to our directory (Reactive forms demo)</p>
    <input class="form-control" type="text" placeholder="Planet Name">
    <div>
      <select id="inputState" class="form-control">
        <option selected>Galaxy name</option>
        <option>Milky Way</option>
        <option>Messier 83</option>
        <option>Black Eye Galaxy</option>
        <option>Pinwheel</option>
        <option>Canis Major Dawrf</option>
        <option>Somewhere else...</option>
      </select>
    </div>
    <input _ngcontent-frd-11="" class="form-control ng-dirty ng-touched ng-invalid" formcontrolname="diameter" placeholder="Diameter (km)" type="number" ng-reflect-name="diameter">
    <input _ngcontent-frd-11="" class="form-control ng-dirty ng-touched ng-invalid" formcontrolname="diameter" placeholder="Diameter (km)" type="number" ng-reflect-name="diameter">
    <input class="form-control" type="text" placeholder="Your name">
    <input class="form-control" type="text" placeholder="Your email">
    <button type="button" class="btn">Submit</button>
  </div>
</template>

<script>
export default {
  name: "SubmitNewPlanet"
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