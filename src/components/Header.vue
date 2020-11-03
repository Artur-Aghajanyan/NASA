<template>
  <div class="container">
    <h1>{{ $t('title') }}</h1>
    <div>
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
  props: {},
  methods:{
    setLocale(locale){
      import(`../langs/${locale}.json`).then((mesg) => {
        this.$i18n.setLocaleMessage(locale, mesg);

        this.$i18n.locale = locale;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#app > div > div{
  display: flex;
  justify-content: center;
}
#app > div > div > div:nth-child(1) > ul,#app > div > div > div:nth-child(2) > ul{
  display: flex;
  list-style: none;
  justify-content: space-evenly;
}
a{
  font-size: 14px;
  margin-right: 10px;
  margin-left: 10px;
}
li{
  border-right: 1px solid black;
  width: max-content;
}

@media only screen and (min-width: 855px){
  ul li:last-child{
    border-right: none;
  }
}
@media only screen and (max-width: 855px){
 ul{
   flex-wrap: wrap;
 }
  ul li:last-child{
    border-right: 1px solid black;
  }
  #app > div > div > div:nth-child(1) > ul,#app > div > div > div:nth-child(2) > ul{
    justify-content: left;
    flex-direction: column;
  }
}
</style>
