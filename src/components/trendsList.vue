<template>
  <div class="trends">
    <el-card class="box-card">
      <div class="column1" v-for="(arr, index) in result" :key="index">
        <a :href="arr.url" target="_blank">{{ arr.name }}</a>
        <div>{{ arr.tweet_volume }}</div>
        <!-- <div>{{ arr.query }}</div>
      <div>{{ arr.url }}</div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "trendsList",
  data() {
    return {
      value: "",
      result: {
        response: {
          prefecture: [],
        },
      },
      changed: false,
    };
  },
  created() {
    var _this = this;
    this.axios
      .get(
              "https://script.google.com/macros/s/AKfycbwh9EDbmniulQpryJbowVsNS02edUHu2nRsgsTXL4xNfrB-rLuIGnN0BliP3RApbin8kQ/exec",
        {
          params: {
              id: 23424856, // 東京
          },
        }
      )
      .then((response) => {
        _this.result = response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style >
.column1 {
  margin-bottom: 15px;
}

</style>
