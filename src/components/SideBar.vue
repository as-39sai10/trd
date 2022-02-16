--- Sidebar.vue
<template>
  <div class="sidebar-container">
    <!-- <ul class="side">
      <li class="side-list" v-for="(item, index) in items" :key="index">
        <router-link class="side-list-text" v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {      
      open: false,
    };
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
.my-image-div {
  padding-top: 20px;
}
.sidebar-container {
  width: 200px;
  height: 100vh;
  background: #98fb98;
  float: left;
  position: fixed;
  z-index: 1;
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