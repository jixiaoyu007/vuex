import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const myPlugin = (store)=>{
    store.subscribe((mutation,state)=>{
        console.log('插件')
    })
}
const modulesA={
    namespaced:true,
    state:{
        modulesA_value:'modules_A',
        otherName:'订'
    },
    mutations:{
        changeMutation(state,val){
            state.modulesA_value = '触发了mutation的changeMuations ：changeC恒'
            return state
        },
        chageOther(state){
            state.otherName = 'ChangeOthername'
        }
    },
    actions:{
        oneAction({commit,dispatch,getters,rootState,rootGetters}){
            commit('allAdd',null,{root:true})
            commit('changeMutation')
            dispatch('otherAction')
        },
        otherAction({commit,dispatch,getters,rootState,rootGetters}){
            commit('chageOther')
        },
        quanjuAction:{
            root:true,
            handler (context){
                console.log(context,'context')
            }
        }
    }
    
}
const moudulesB = {
    state(){
        return {moudelesB_value:'moudelesB'}
    },
    mutations:{
        changeB(state){
            state.moudelesB_value = 'ee'
        }
    }
}
const store = new Vuex.Store({
    plugins:[myPlugin],
    state:{
        count:1,
        age:90,
        name:'小明',
        all:'total'
    },
    getters:{
        newcount(state){
            return 'newcount'+state.count+300
        },
        changedCount(state,getters){
            return getters.newcount+':'+state.count
        }
         
    },
    mutations:{
        add(state,val){
            console.log(val,'val')
            setTimeout(()=>{
                state.count = 10000+val
            },2000)
            
        },
        allAdd(state){
            state.all = 'all total'
        },
    },
    actions:{
        actAdd(context){
            setTimeout(()=>{
                context.commit('add','new')
            },1000)
            // context.commit('add')
        }
    },
    modules:{
        // modulesA
        one:modulesA,
        two:moudulesB
    }
    // strict:true
})
export default store