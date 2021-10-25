<template>
  <div id="home">
   <hello-world />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import HelloWorld from '../components/HelloWorld.vue'

@Component({
    components: {
        HelloWorld
    }
})
class Home extends Vue {

}
export default Home
</script>
