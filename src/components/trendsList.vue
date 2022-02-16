<template>
  <div class="trends">
    <div class="row-possion" v-for="(trd, index) in resultList" :key="index">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="span-type">{{ woeidList[index].point }}</span>
        </div>
        <ul v-loading="loading">
          <li
            :class="{
              'row-disp-none': index + 1 > 21 && rowVisibled === false,
            }"
            class="column1"
            v-for="(arr, index) in trd"
            :key="index"
          >
            <div class="text-left">
              <span class="index-no">{{ index + 1 }}.</span>
              <a class="text-left tr_name" :href="arr.url" target="_blank">{{
                arr.name
              }}</a>
              <div class="tw-vol text-left">
                {{ arr.tweet_volume }}件のツイート
              </div>
            </div>
            <!-- <div>{{ arr.query }}</div>
      <div>{{ arr.url }}</div> -->
          </li>
          <div :class="{ 'row-disp-none': rowVisibled === true }">
            <el-button
              type="success"
              class="btn-pos"
              @click="rowVisible()"
              plain
              >...more</el-button
            >
          </div>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "trendsList",
  props: ["japan_woeid"],
  data() {
    return {
      value: "",
      result: [],
      resultList: [],
      woeidList: this.japan_woeid,
      changed: false,
      loading: true,
      rowVisibled: false,
    };
  },
  created() {
    this.getTrdList();
  },
  methods: {
    getTrdList: function () {
      var _this = this;

      for (const woeid of _this.woeidList) {
        console.log(woeid.value);
        this.axios
          .get(
            "https://script.google.com/macros/s/AKfycbwh9EDbmniulQpryJbowVsNS02edUHu2nRsgsTXL4xNfrB-rLuIGnN0BliP3RApbin8kQ/exec",
            {
              params: {
                id: woeid.value, // 日本
              },
            }
          )
          .then((response) => {
            _this.result = response.data;
            _this.resultList.push(_this.result);
            _this.loading = false;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    rowVisible: function () {
      this.rowVisibled = true;
    },
  },
};
</script>

<style >
ul {
  list-style: none;
}
.item-possion {
  float: left;
}
.trends {
  margin-left: 200px;
  display: flex;
}
.column1 {
  margin-bottom: 5px;
}
.tr_name {
  font-size: 13px;
  color: black;
  font-weight: 600;
}
.text-left {
  text-align: left;
}
.index-no {
  padding-right: 10px;
}
.tw-vol {
  margin-left: 30px;
  font-size: 10px;
}
.row-disp-none {
  display: none;
}
.row-disp-visible {
}
.btn-pos {
  margin-right: 30px !important;
}

@media screen and (max-width: 780px) {
  .trends {
    margin-left: 5px;
  }
}
</style>
