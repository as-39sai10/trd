--- Sidebar.vue
<template>
  <div class="sidebar-container">
    <el-menu
      default-active="3"
      class="el-menu-vertical-demo"
      background-color="#98fb98"
      active-text-color="#303133"
      @open="handleOpen"
      @close="handleClose"
    >
      <ul class="side" v-for="(woeid, index) in woeidList" :key="index">
        <el-menu-item index="index" @click="selectArea(index)">
          <i class="el-icon-location"></i>
          <div class="locale-list">{{
            woeid.label
          }}</div>
        </el-menu-item>
      </ul>
    </el-menu>
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
    selectArea: function (index) {
      // alert(index);
      this.$store.dispatch("ActionUpdateArea", index);
    },
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
.side {
  padding-inline-start: 0px;
  height: 50px;
}
.locale-list {
  line-height: 50px;
}
@media screen and (max-width: 780px) {
  .sidebar-container {
    width: 0px;
  }
}
</style>