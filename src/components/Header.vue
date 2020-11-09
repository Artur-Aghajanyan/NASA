<template>
  <div class="container">
    <h1>{{ $t('title') }}</h1>
    <div v-if="!show" id="toggle" @click="menuButton()">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
    <div v-if="show" id="toggle1" @click="menuClose()">
      <h1>&#9747;</h1>
    </div>
    <div id="menu-items">
      <div>
        <ul>
          <li><router-link :to="{name: 'home'}">{{$t("header-list.home")}}</router-link></li>
          <li><router-link :to="{name: 'nearby-asteroids'}">{{$t("header-list.nearby-asteroids")}}</router-link></li>
          <li><router-link :to="{name: 'astronmy-picture-of-the-day'}">{{$t("header-list.astronmy-picture-of-the-day")}}</router-link></li>
          <li><router-link :to="{name: 'submit-new-planet'}">{{$t("header-list.submit-new-planet")}}</router-link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="#" @click="setLocale('en')">EN</a></li>
          <li><a href="#" @click="setLocale('ru')">РУ</a></li>
          <li><a href="#" @click="setLocale('am')">ՀՅ</a></li>
        </ul>
      </div>
    </div>
    <div v-if="show" id="menuItems">
      <div>
        <ul>
          <li><router-link :to="{name: 'home'}">{{$t("header-list.home")}}</router-link></li>
          <li><router-link :to="{name: 'nearby-asteroids'}">{{$t("header-list.nearby-asteroids")}}</router-link></li>
          <li><router-link :to="{name: 'astronmy-picture-of-the-day'}">{{$t("header-list.astronmy-picture-of-the-day")}}</router-link></li>
          <li><router-link :to="{name: 'submit-new-planet'}">{{$t("header-list.submit-new-planet")}}</router-link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li><a href="#" @click="setLocale('en')">EN</a></li>
          <li><a href="#" @click="setLocale('ru')">РУ</a></li>
          <li><a href="#" @click="setLocale('am')">ՀՅ</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: false
    }
  },
  props: {},
  methods:{
    setLocale(locale){
      import(`../langs/${locale}.json`).then((mesg) => {
        this.$i18n.setLocaleMessage(locale, mesg);

        this.$i18n.locale = locale;
      })
    },
    menuButton(){
      this.show = true;
    },
    menuClose(){
      this.show = false
    }
  }
}
</script>

<style scoped>
#toggle{
  width: 28px;
  height: 30px;
  margin: 10px 0;
  display: none;
}
#toggle1{
  width: 28px;
  height: 30px;
  margin: 10px 0;
  display: none;
}
#toggle1 h1{
  margin: -7px;
  font-weight: 900;
}
#toggle div {
  width: 50%;
  height: 5px;
  background: black;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
}
h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #22313F;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
}
#menuItems{
  display: none;
  justify-content: center;
}
#app > div > div > div:nth-child(1) > ul, #menu-items > div:nth-child(2) > ul{
  display: flex;
  list-style: none;
  justify-content: space-evenly;
}
a{
  font-size: 14px;
  margin-right: 10px;
  margin-left: 10px;
}
#menu-items li{
  border-right: 1px solid black;
  width: max-content;
}

@media only screen and (min-width: 855px){
  ul li:last-child{
    border-right: none;
  }
  #app > div.container > div:nth-child(3){
    display: flex;
    justify-content: center;
  }
}
@media only screen and (max-width: 855px){
  #app > div.container > div:nth-child(3){
    display: none;
  }
 ul{
   flex-wrap: wrap;
 }
  #menu-items ul li:last-child{
    border-right: 1px solid black;
  }
  #app > div > div > div:nth-child(1) > ul,#menu-items > div:nth-child(2) > ul{
    justify-content: left;
    flex-direction: column;
  }
  #toggle{
    display: block;
  }
  #menu-items{
    display: none;
  }
  #toggle1{
    display: block;
  }
  #menuItems{
    display: flex;
    flex-direction: column;
    background: lightgrey;
    position: absolute;
    width: 350px;
    height: 265px;
    border-radius: 10px;
    border: 1px solid darkgrey;
    -webkit-box-shadow: 7px 5px 9px 1px rgba(0,0,0,0.55);
    box-shadow: 7px 5px 9px 1px rgba(0,0,0,0.55);
    z-index: 1;
  }
  #menuItems > div:nth-child(2) > ul{
    flex-direction: row;
    display: flex;
    list-style: none;
  }
  #toggle1, #toggle{
    position: relative;
    background: white;
    width: 42px;
    height: 36px;
    border: 1px solid black;
    border-radius: 5px;
  }
  #menuItems > div:nth-child(1){
    margin-bottom: 68px;
  }
  #menuItems li{
    border-bottom: 1px solid black;
    width: max-content;
  }
}
@media only screen and (max-width: 395px){
  #menuItems{
    width: 250px;
  }
  a{
    font-size: 10px;
  }
}
</style>
