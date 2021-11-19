<template>
    <div class="ud">
        <slot :count="count" :as="as">

        </slot>
        <button @click="left()" class="left">left</button>
        <button @click="right()" class="right">right</button>
        <div class="pen">
            <span v-for="(n,index) in max" :key="index" :class="{'abc' : count == index+1}" @click="pass(index+1)"></span>
        </div>
        <p>{{ max }}</p>
    </div>
</template>
<script>

export default {
    data(){
        return{
            count : 1,
            as : true,
        }
    },
    methods : {
        left(){
            this.as = false;
            if(this.count == this.min){
                return this.count = this.max;
            }
            this.count--;
        },
        right(){
            this.as = true;
            if(this.max == this.count){
                return this.count = this.min;
            }
            this.count++;
        },
        pass(n){
            this.count > n ? this.as = false : this.as = true;
            this.count = n;
        }
    },
    props : ['max','min']
}
</script>
<style>
.ud{
    position: relative;
    width: 100%;
    height: 100vh;
}
button{
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
}
.left{
    left: 0;
}
.right{
    right: 0;
}
.pen{
    position: absolute;
    z-index: 1;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap : 0 7px;
}
.pen > span {
    display: block;
    width : 20px;
    height : 20px;
    background-color: hotpink;
    border-radius: 100%;
}
.pen > .abc {
    background: white;
}
</style>