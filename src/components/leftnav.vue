<template>
  <div class="leftnav">
  <ul>
      <li class="main" @click="addclass(-1)"><router-link to="/">首页</router-link></li>
      <li v-for="item,index in items" :class="{active:index==current}" @click="addclass(index)">
        <router-link :to="item.router">{{item.sort}}</router-link>
        <transition name="fade">
          <ul class="son" v-if="item.son" v-bind:style="{display:index==current?'block':'none'}">
            <li v-for="son in item.son">
              <router-link :to="son.router">{{son.con}}</router-link>
            </li>
          </ul>
        </transition>
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
          {router:"",sort: '菜单一', show: false,son:[{router:'/two',con:'子菜单一'},{router:'/bb',con:'子菜单二'},{router:'/cc',con:'子菜单三'}]},
          {router:"/three",sort: '菜单二', show: false},
          {router:"/four",sort: '菜单三', show: false},
          {router:"/five",sort: '菜单四', show: false}
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
  .leftnav ul li a{
    width: 100%;
    /*height: 50px;*/
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
  .leftnav ul li.main{
    background: #0951a1;
  }
  .leftnav ul li a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color:#fff;
    line-height: 50px;
  }
  .leftnav ul li:hover,ul li.active{
    background: #54adff;
    /*transition: all 0.5s;*/
  }
  .leftnav{
    width:10%;
    height: 100%;
    background: #85c8f3;
    float:left;
    overflow: hidden;
  }
  .son{
    /*display: none;*/
    transition: all 0.5s;
    overflow: hidden;
    background:#2996dc
  }
  .leftnav .son li a{
    line-height: 30px;
  }
</style>
