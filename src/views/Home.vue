<template>
  <div class="home"> 
    <app-header></app-header>
    <side-bar :all_woeid="all_woeid"></side-bar>
    <trends-list :all_woeid="all_woeid"> </trends-list>
  </div>
</template>

<script>
import store from "@/store";
import SideBar from "@/components/SideBar";
import TrendsList from "@/components/trendsList";
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: "home",
  store,
  components: {
    SideBar,
    TrendsList,
    AppHeader,
  },
  data() {
    return {
      all_woeid: {
        japan_woeid: {
          label: "日本",
          id: [{ prefecture: "Japan", value: 23424856, visbled: false }],
        },
        tohoku_woeid: {
          label: "東北",
          id: [
            { prefecture: "Sapporo", value: 1118108, visbled: false },
            { prefecture: "Sendai", value: 1118129, visbled: false },
          ],
        },
        kanto_woeid: {
          label: "関東",
          id: [
            { prefecture: "Saitama", value: 1116753 },
            { prefecture: "Chiba", value: 1117034 },
            { prefecture: "Tokyo", value: 1118370 },
            { prefecture: "Kawasaki", value: 1117502 },
            { prefecture: "Sagamihara", value: 1118072 },
            { prefecture: "Yokohama", value: 1118550 },
          ],
        },
        tyubu_woeid: {
          label: "中部",
          id: [{ prefecture: "Niigata", value: 1117881 }],
        },
        tokai_woeid: {
          label: "東海",
          id: [
            { prefecture: "Hamamatsu", value: 1117155 },
            { prefecture: "Nagoya", value: 1117817 },
          ],
        },
        kansai_woeid: {
          label: "関西",
          id: [
            { prefecture: "Kyoto", value: 15015372 },
            { prefecture: "Osaka", value: 15015370 },
            { prefecture: "Kobe", value: 1117545 },
          ],
        },
        tyugoku_woeid: {
          label: "中国",
          id: [
            { prefecture: "Okayama", value: 90036018 },
            { prefecture: "Hiroshima", value: 1117227 },
          ],
        },
        shikoku_woeid: {
          label: "四国",
          id: [{ prefecture: "Takamatsu", value: 1118285 }],
        },
        kyusyu_woeid: {
          label: "九州",
          id: [
            { prefecture: "Fukuoka", value: 1117099 },
            { prefecture: "Kitakyushu", value: 1110809 },
            { prefecture: "Kumamoto", value: 1117605 },
            { prefecture: "Okinawa", value: 2345896 },
          ],
        },
      },
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
  color: #5eb080;
}
.sidebar-container {
  margin-top: 5vh;
}
</style>