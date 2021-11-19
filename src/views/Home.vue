<template>
  <div class="home">
    <div v-if="TF">
      <p>PC</p>
    </div>
    <div v-if="TF2">
      <p>Toggle</p>
    </div>
    <button @click="TF2 = !TF2">Click mE</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data (){
    return {
      TF : true,
      TF2 : true,
      TF3 : true,
    }
  },
  methods : {
    resizeAA(){ 
      //console.log(window.innerWidth);//전채 넓이값
      //console.log(document.body.clientWidth);//스크롤값을 제외된 넓이
      window.innerWidth < 1024 ? this.TF = false : this.TF = true;
      if(window.innerWidth < 1024 && this.TF3 == false){
        this.TF2 = false;
        this.TF3 = true;
      }else if(window.innerWidth > 1024 && this.TF3 == true){
        this.TF2 = true;
        this.TF3 = false;
      }
      //window.innerWidth < 1024 && TF3 == false ? this.TF = false : this.TF = true;
      
    },
  },
  mounted(){
    //addEventListener(실행하는것,실행하는 내가 설정해놓은의 이름)
    window.addEventListener('resize',this.resizeAA);
    window.innerWidth < 1024 ? this.TF = false : this.TF = true;
    window.innerWidth < 1024 ? this.TF3 = false : this.TF3 = true;
    this.resizeAA();
    
  },
  //addEventListener을 사용할떄는 beforeDestroy 로 새로고침을 하는것을 한번 지워줘야한다 그이유는 중첩될수있는 가능성때문에 한번 지우고 다시 실행하는게 좋다
  beforeDestroy () {
    window.removeEventListener('resize',this.resizeAA);
  },
  computed(){

  },
}
</script>
