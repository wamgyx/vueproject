<template>

  <div id="animated-number-demo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
    <button @click="target()">切换</button>
    <div class="a" v-bind:style="{height:hei}">
      <ul>
        <li>sd</li>
        <li>sd</li>
        <li>fsd</li>
      </ul>
    </div>
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
        tweenedNumber: 0,
        flag:-1,
        hei:'auto'
      }
    },
    computed: {
      animatedNumber: function() {
        return this.tweenedNumber.toFixed(0);
      }
    },
    methods:{
      target:function () {
        this.flag*=-1;
        if(this.flag==1){
          this.hei='200px'
        }else{
          this.hei='0'
        }
      }
    },
    watch: {
      number: function(newValue) {
        TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
      },
      hei:function (newValue) {
        TweenLite.to(this.$data, 5, { hei: newValue })
      }
    }
  }
</script>
<style>
.a{
  overflow: hidden;
}
</style>
