<template>
  <div class="home">
      <Updown v-slot= "{ count , as }" :max="page.length" :min="1" class="asd">
        <Slider v-for="(n,index) in page" :key="index" :back="as" >
          <div v-if="count == index+1" :class="['sss',`sss${index+1}`]">
            <p>{{ n }}</p>
          </div>
        </Slider>
      </Updown>
  </div>

</template>

<script>
import updown from '../components/updown.vue';

export default {
  components: { updown },
  name: 'Home',
  data (){
    return {
      page : ['log1','log2','log3','log4']
    }
  }
}
</script>
<style>
.asd{
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
}
  .sss{
    width: 100%;
    height: 100vh;
    position: absolute;
  }
  .sss1{
    background-color: cadetblue;
  }
  .sss2{
    background-color: darkblue;
  }
  .sss3{
    background-color: deepskyblue;
  }
  .sss4{
    background-color: gray;
  }
</style>