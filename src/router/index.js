import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import h2 from '@/components/hello2'
import h1 from '@/components/hello1'
Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'h2',
          component:h2,
          beforeEnter:(to,from,next)=>{
            console.log('enter-to',to)
            console.log('enter-from',from)
            next()
          }
        },
        {
          path:'h1',
          component:h1
        }
      ]
    },
    // {
    //     path:'/hh/:id(\\d+)',
    //     name:'hh',
    //     components:{
    //       left:h1,
    //       right:h2
    //     }
    // }
  ]
})
