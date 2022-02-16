<template>
  <div class="home">    
    <trends-list />
  </div>
</template>

<script>
import TrendsList from '../components/trendsList.vue'

export default {
  name: 'Home',
  components: {
    TrendsList
  },
}
</script>

<style >
.home {
  margin-left: 210px;
}

</style>