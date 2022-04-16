<template>
  <div id="appHeader">
    <div class="header">     
        <p class="appTitle">trdNow</p>      
    </div>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  props: ["all_woeid"],
  data() {},
};
</script>

<style>
.header {
  width: 100%;
  height: 5vh;
  position: fixed;
  background-color: black;
  color: white;
  font-size: 32px !important;
  text-align: left;
}

.appTitle {
  margin-top: -0.1vh;
  margin-bottom: 0;
  padding-left: 6vh;
  /* font-family: 'Comic Sans MS',sans-serif; */
  font-family: 'Trattatello',sans-serif;
}
</style>