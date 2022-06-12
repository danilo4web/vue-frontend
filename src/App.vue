<template>
  <div id="viewport">
    <NavbarComponent v-if="notIsLoginPage"/>

    <div id="main">
        <router-view/>
    </div>

  </div>
</template>

<script lang="ts">
import NavbarComponent from "./components/NavbarComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    NavbarComponent
  },
  computed: {
    notIsLoginPage() {
      let routeName = this.$route.name;
      return (routeName !== "login" && routeName !== "register");
    }
  }
});
</script>

<style lang="scss">
#main {
  display: flex;
  width: 100%;
}
body{
  font-family: "Lato";
  font-size: 100%; 
	overflow-y: scroll; 
 font-family: sans-serif; 
 -ms-text-size-adjust: 100%; 
 -webkit-text-size-adjust: 100%; 
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-rendering: optimizeLegibility;
  background-color: #fefefe;
}
a{
  text-decoration: none;
}

.app{
  height: 100vh;
}
/* -------------
Sidebar
----------------*/
.sidebar {
  position: absolute;
  //width: 33.3333%;
  width: 17em;
  height: 100%;
  top: 0;
  overflow:hidden;
  background-color: #19222a;
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;
  
  header{
    background-color: #0dcaf0;
    width: 100%;
    display:block;
    padding: 0.75em	1em;
  }
}

/* -------------
Sidebar Nav
----------------*/
.sidebar-nav {
  position: fixed;
  //width: 13em;
  background-color: #19222a;
  height: 100%;
  font-weight: 400; 
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
 
  
  ul{
    list-style:none;
    display: block;
    padding: 0;
    margin: 0;
    margin-top: 15px;
    
    li{
      margin-left: 0;
      padding-left: 15px;
      display:inline-block;
      width: 100%;
      
      a{
        color: rgba(255,255,255,0.9);
        font-size: 16px;
        font-weight: bold;
        padding: 1.05em	1em;
        position: relative;
        display:block;
        text-decoration: none;
      }
/* -------------
Sidebar: icons
----------------*/
      i{
        font-size: 1.8em;
        padding-right: 0.5em;
        width: 9em;
        display: inline;
        vertical-align:middle;
      }  
    }
  }
}
</style>
