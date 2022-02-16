<template>
  <div id="app">
    <side-bar></side-bar>
    <trends-list :japan_woeid="japan_woeid"> </trends-list>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import TrendsList from "@/components/trendsList.vue";

export default {
  name: "App",
  components: {
    SideBar,
    TrendsList,
  },
  data() {
    return {
      japan_woeid: [
        // { point: "Kitakyushu", value: 1110809 },
        // { point: "Saitama", value: 1116753 },
        // { point: "Chiba", value: 1117034 },
        // { point: "Fukuoka", value: 1117099 },
        // { point: "Hamamatsu", value: 1117155 },
        // { point: "Hiroshima", value: 1117227 },
        // { point: "Kawasaki", value: 1117502 },
        // { point: "Kobe", value: 1117545 },
        // { point: "Kumamoto", value: 1117605 },
        // { point: "Nagoya", value: 1117817 },
        // { point: "Niigata", value: 1117881 },
        // { point: "Sagamihara", value: 1118072 },
        { point: "Sapporo", value: 1118108 },
        // { point: "Sendai", value: 1118129 },
        // { point: "Takamatsu", value: 1118285 },
        { point: "Tokyo", value: 1118370 },
        // { point: "Yokohama", value: 1118550 },
        { point: "Okinawa", value: 2345896 },
        { point: "Osaka", value: 15015370 },
        // { point: "Kyoto", value: 15015372 },
        { point: "Japan", value: 23424856 },
        // { point: "Okayama", value: 90036018 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
