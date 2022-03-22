<template>
  <div class="trends">
    <div class="row-possion" v-for="(woeid, ind) in buf" :key="ind">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span class="span-type">● {{ woeid.prefecture }} ●</span>
        </div>
        <ul v-loading="loading">
          <li
            :class="{
              'row-disp-none': index + 1 > 20 && rowVisibled[ind] === false,
            }"
            class="column1"
            v-for="(arr, index) in resultList[ind]"
            :key="index"
          >
            <div class="text-left">
              <span class="index-no">{{ index + 1 }}.</span>
              <a class="text-left tr_name" :href="arr.url" target="_blank">{{
                arr.name
              }}</a>
              <div class="tw-vol text-left" v-if="arr.tweet_volume">
                {{ arr.tweet_volume }}件のツイート
              </div>
              <div class="tw-vol text-left" else-if=""></div>
            </div>
            <!-- <div>{{ arr.query }}</div>
      <div>{{ arr.url }}</div> -->
          </li>
          <div :class="{ 'row-disp-none': rowVisibled[ind] === true }">
            <el-button
              type="success"
              class="btn-pos"
              @click="rowVisible(ind)"
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
  props: ["all_woeid"],
  data() {
    return {
      value: "",
      result: [],
      resultList: [],
      woeidList: this.all_woeid,
      changed: false,
      loading: true,
      rowVisibled: [false],
      changeArea: "japan_woeid",
      buf: [],
    };
  },
  created() {
    this.getTrdList(this.changeArea);
  },
  methods: {
    getTrdList: function (areaData) {
      var _this = this;
      // var buf = [];
      let areaStr = areaData;

      if (_this.loading === false) {
        _this.loading = true;
      }

      _this.buf = [];
      _this.resultList = [];
      _this.rowVisibled = [];
      for (const key in _this.woeidList) {
        if (areaStr === key) {
          for (const arr of _this.woeidList[key].id) {
            _this.buf.push(arr);
            _this.rowVisibled.push(false)
          }
        }
      }

      _this.$store.state.limitCount = _this.buf.length;

      for (const local of _this.buf) {
        console.log(local.value);
        _this.$store.state.count = 0;
        this.axios
          .get(
            "https://script.google.com/macros/s/AKfycbwh9EDbmniulQpryJbowVsNS02edUHu2nRsgsTXL4xNfrB-rLuIGnN0BliP3RApbin8kQ/exec",
            {
              params: {
                id: local.value, // 日本
              },
            }
          )
          .then((response) => {
            _this.result = response.data;
            _this.resultList.push(_this.result);
            _this.$store.state.count = _this.$store.state.count + 1;
            if (_this.$store.state.limitCount === _this.$store.state.count) {
              _this.loading = false;
              return _this.resultList;
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }

      // return _this.resultList;
    },
    testFnc: function (data) {
      alert(data);
    },
    rowVisible: function (ind) {
      this.$set(this.rowVisibled, ind, true)
    },
  },
  computed: {
    setArea() {
      return this.$store.getters.getArea;
    },
  },
  watch: {
    setArea() {
      this.changeArea = this.$store.state.area;
      // this.testFnc(this.changeArea);
      this.getTrdList(this.changeArea);
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
  margin-bottom: 30px;
  display: flex;
}
.row-possion {
  padding-right: 10px;
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
  height: 10px;
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
