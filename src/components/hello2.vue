<template>
    <div>
        <div>hello2</div>  

        <div>{{d}}</div>
         {{$route.params}}

        <div>hello2内的store：{{$store.state}}</div>    
    </div>
    
</template>
<script>
import store from '../../store'
export default {
    data(){
        return {
            d:22

        }
    },
    // store
}
</script>

<style>

</style>

