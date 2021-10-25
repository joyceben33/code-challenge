<template>
  <div id="home">
    <section>
      <v-container>
         <h1 class="primary--text">Spring EQ Code Challenge</h1>
         <loans />
      </v-container>
   </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loans from '../components/Loans.vue'

@Component({
    components: {
        Loans
    }
})
class Home extends Vue {

}
export default Home
</script>
