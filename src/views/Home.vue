<template>
  <div class="home">    
    <trends-list />
  </div>
</template>

<script>
import TrendsList from '../components/trendsList.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    TrendsList
    // HelloWorld
  },
}
</script>
