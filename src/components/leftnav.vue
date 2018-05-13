<template>
  <div class="leftnav">
    <ul>
      <li @click="addclass(-1)"><router-link to="/">首页</router-link></li>
      <li v-for="item,index in items" :class="{active:index==current}" @click="addclass(index)">
        <router-link :to="item.router">{{item.sort}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'leftnav',
    data(){
      return {
        items: [
          // {router:"/",sort: 'hello', show: false},
          {router:"/two",sort: '222', show: false},
          {router:"/three",sort: '333', show: false},
          {router:"/four",sort: '444', show: false},
          {router:"/five",sort: '555', show: false}
        ],
        current:-1
      }
    },
    methods:{
      addclass:function (index) {
        this.current=index;
      }
    }
  }

</script>
<style>
  *{
    padding: 0;
    margin:0;
    text-decoration: none;

  }
  ul{
    list-style: none;
  }
  ul li{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
  ul li:first-child{
    background: #0951a1;
  }
  ul li a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color:#fff;
    line-height: 50px;
  }
  ul li:hover,ul li.active{
    background: #54adff;
  }
  .leftnav{
    width:150px;
    height: 100%;
    background: #85c8f3;
    float:left;
    overflow: hidden;
  }
</style>
