--- Sidebar.vue
<template>
  <div class="sidebar-container">
    <ul class="side" v-for="(woeid, index) in woeidList" :key="index">   
        <i class="el-icon-location"></i> 
        <a class="locale-list" @click="selectArea(index)" >{{ woeid.label }}</a>
      <li class="side-list" v-for="(item, index) in woeid" :key="index">      
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: ["all_woeid"],
  data() {
    return {
      open: false,
      woeidList: this.all_woeid,
    };
  },
  methods: {
    selectArea: function(index) {
      // alert(index);
      this.$store.dispatch("ActionUpdateArea", index);
    }
  },
};
</script>

<style>
.my-image {
  width: 50%;
  height: 50%;
  border: medium solid #000;
  background-color: #fff;
}
.side {
  margin-top: 25px;
}
.side-list {
  text-align: left;
  margin-bottom: 15px;
  font-weight: 600;
}
.my-image-div {
  padding-top: 20px;
}
.sidebar-container {
  width: 200px;
  height: 100vh;
  background: #98fb98;
  float: left;
  position: fixed;
  z-index: 10;
}
.sidebar-container h1 {
  color: #40b983;
}
@media screen and (max-width: 780px) {
  .sidebar-container {
    width: 0px;
  }
}
</style>