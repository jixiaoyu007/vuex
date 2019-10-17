<template>
  <div class="hello">
    dshfdsdsds
    <h1>{{ msg }}</h1>
    <div>state.count:{{count}}</div>
    <div>state.name:{{selfName}}</div>
    <div>selfProps:{{selfProps}}</div>
    <div>selfGetter:{{selfGetter}}</div>
    <div>oneOther值：{{a}}</div>
    <!-- <div>selftChangedCount:{{selftChangedCount}}</div>
    <div>getter.newcound:{{$store.getters.newcount}}</div>
    <div>computes:{{newcount}}</div>
    <div>computed count :{{count}}</div> -->
    <div>模块A中的值{{value}}</div>
    <!-- <button @click="changeMore">更改值</button>
    <button @click="changeA">改模块内的值</button>
    <button @click="changeMutation">改模块内的值</button>
    <button @click="add">mutations 内改值</button> 
    <button @click="actAdd">actAdd:</button>  -->
    <!-- <button @click="dispatchA">dispatchA</button>  -->
    <button @click="qun">qun</button> 
    <button @click="changeB">changeB</button> 
    <router-link to="/h2">h2</router-link>
    <router-link to="/h1">h1</router-link>
    <router-view/>
    
  </div>
</template>

<script>
import store from '../../store'
import {mapState,mapMutations,mapGetters,mapActions,createNamespacedHelpers} from 'vuex'
// const { mapState } = createNamespacedHelpers('one/')
export default {
  strict:true,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value:this.$store.state
    }
  },
  computed:{
    ...mapState({
      count:(state)=>state.age,
      selfName:'name',
      selfProps(state){
        return state.count
      }
    }),
    ...mapState('one/',{
      a:(state)=>state.otherName
    }),
    ...mapGetters({
      selfGetter:'newcount',
      selftChangedCount:'changedCount'
    })

  },
  methods:{
    ...mapMutations({
      add:'add',
      changeMutation:'changeMutation'
    }),
      changeCount(){
        this.$store.state.count += 20
      },
      changeMore(){
        this.$store.commit('add',20)
      },
    changeB(){
      this.$store.commit('changeB')
    },
    ...mapActions(['actAdd']),
    changeA(){

      this.$store.commit('one/changeMutation')
    },
    dispatchA(){
      this.$store.dispatch('one/oneAction')
    },
    qun(){
      this.$store.state.count = '89'
      this.$store.dispatch('quanjuAction')
    }
    
  },

  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
