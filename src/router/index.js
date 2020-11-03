import VueRouter from "vue-router";
import Home from "../components/Home";
import NearbyAsteroids from "../components/NearbyAsteroids";
import AstronmyPictureOfTheDay from "../components/AstronmyPictureOfTheDay";
import SubmitNewPlanet from "../components/SubmitNewPlanet";

export default new VueRouter({
    hashbang: false,
    mode: 'history',
    routes:[
        {path: '/home', component: Home, name: 'home'},
        {path: '/nearby-asteroids', component: NearbyAsteroids, name: 'nearby-asteroids'},
        {path: '/astronmy-picture-of-the-day', component: AstronmyPictureOfTheDay, name: 'astronmy-picture-of-the-day'},
        {path: '/submit-new-planet', component: SubmitNewPlanet, name: 'submit-new-planet'},
        {path: '*', redirect: '/home'}
    ]
})