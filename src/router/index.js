import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import two from '@/components/two'
import three from '@/components/three'
import bb from '@/components/bb'
// import five from '@/components/five'
// import six from '@/components/six'
// import seven from '@/components/seven'
// import eight from '@/components/eight'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/two',
      name:'two',
      component: two
    },
    {
      path:'/three',
      name:'three',
      component: three
    },
    {
      path:'/bb',
      name:'bb',
      component: bb
    },
    // {
    //   path:'/five',
    //   name:'five',
    //   component: HelloWorld
    // },
    // {
    //   path:'/six',
    //   name:'six',
    //   component: HelloWorld
    // },
    // {
    //   path:'/seven',
    //   name:'seven',
    //   component: HelloWorld
    // },
    // {
    //   path:'/eight',
    //   name:'eight',
    //   component: HelloWorld
    // }
  ]
})
