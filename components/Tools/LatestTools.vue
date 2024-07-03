<template>
  <div class="container-default shaded vertical-flex" :style="this.hideBgColor? bgStyle : ''">
    <div class="top-heading">
      <h1>
        LATEST TOOLS
      </h1>
    </div>       
    <div class="cards-in-row">
      <div v-for="toolsItem in toolsList" :key="toolsItem.index">
        <tools-card  :toolsItem="toolsItem"/>
      </div>
    </div>
    <div class="view-all">
      <nuxt-link to="/resources/tools/">VIEW ALL TOOLS</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestTools',

  props: {
    toolsList: {
      type: Array,
      default: () => []
    },
    linkComponent: {
      type: String,
      default: 'nuxt-link'
    },
    hideBgColor:{
      type:Boolean,
      default:false
    }
  },

  computed: {
    bgStyle () { 
      return {              
        'background-color': 'transparent'               
      }
    }
  }
}
</script>


<style scoped lang="scss">

  .view-all{
    padding-top:2.38rem;
    text-align: center; 
    a{
      font-weight:600;
    }
  }

</style>
