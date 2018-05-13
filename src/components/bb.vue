<template>

  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
  </div>
</template>

<!--import TweenLite from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'-->
<script>
  // import Vue from 'vue'
  // new Vue({
  //   el: '#animated-number-demo',
  //   data: {
  //     number: 0,
  //     tweenedNumber: 0
  //   },
  //   computed: {
  //     animatedNumber: function() {
  //       return this.tweenedNumber.toFixed(0);
  //     }
  //   },
  //   watch: {
  //     number: function(newValue) {
  //       TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
  //     }
  //   }
  // })
  export default {
    // el:"#animated-number-demo",
    name: 'bb',
    data(){
      return {
        number: 0,
        tweenedNumber: 0
      }
    },
    computed: {
      animatedNumber: function() {
        return this.tweenedNumber.toFixed(0);
      }
    },
    watch: {
      number: function(newValue) {
        console.log(this)
        TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
      }
    }
  }
</script>
<style>

</style>
