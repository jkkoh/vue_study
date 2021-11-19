<template>
  <div class="about">
    <select v-model="menu">
      <option value="all">ALL</option>
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
      <option value="vue">Vue</option>
      <option value="scss">SCSS</option>
    </select>
    <p>{{menu}}</p>
    <div v-for="aa in checks" :key="aa">
      <div >
        <p>{{aa.name}}</p>
        <p>{{aa.tag}}</p>
        <p>----------------</p>
      </div>
      
    </div>
  </div>
</template>
<script>
import list from '@/data/list.js'

export default {
  name: 'About',
  data(){
    return {
      menu : "all",
      datalist : list
    } 
  },
  methods : {

  },
  mounted(){

  },
  computed : {
    checks(){
      console.log('ddd');
      return this.menu == "all" ? this.datalist : this.datalist.filter((x => x.tag == this.menu))
      }
  }
}
</script>
