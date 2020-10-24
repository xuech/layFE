<template>
  <div class="home">
    <Pannel />
    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import Pannel from '@/components/Pannel.vue'

export default {
  name: 'Home',
  components: {
    Pannel
  }
}
</script>
