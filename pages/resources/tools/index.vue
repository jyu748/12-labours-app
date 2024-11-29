<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <banner :banner-data="banner.values"/>
    <div class="container-default vertical-flex">
      <div class="top-heading">
        <h1>
          The collection of tools used and/or developed by the 12 Labours team.
        </h1>
      </div>
      <div class="default-inner">
        <div class="category-tab">
          <tab-nav
          :tabs="tabs"
          :active-tab="activeTab"
          @tabClick="onTabClick($event)"
        />
        </div>      
        <div class="tools-items vertical-flex">
            <div v-for="toolsItem in pagedTools"  class="tools-items__item">
              <tools-item :tools-item="toolsItem"/>
            </div>
        </div> 
        <div class="not-found"  :style="this.toolsList.length>0? 'display:none' : ''">
          <h2>No records found for this category</h2>
        </div>      
        <div class="paginator" :style="this.toolsList.length==0? 'display:none' : ''">
          <pagination
            :total-count="totalCount"
            :page-size="pageSize"          
            @select-page="onPaginationChange"
          />       
        </div> 
      </div>     
    </div>
  </div>
</template>


<script>
import graphcmsQuery from '@/services/graphcmsQuery'

export default {
  name: 'ToolsPage',
  
  async asyncData({$graphcms}) { 
    const topTools=await graphcmsQuery.topTools($graphcms);
    const banner= await graphcmsQuery.banner($graphcms, 'tools');
    const toolsCategory=await graphcmsQuery.toolsCategory($graphcms);
    return {banner,toolsCategory,topTools}
  },

  data: () => {
    return {
      pageTitle: 'Tools',
      breadcrumb: [
        {
          to: { name: 'index'},
          label: 'Home'
        },
        {
          to: {name: 'resources'},
          label: 'Resources'
        }
      ],
      activeTab: '',            
      toolsList:[],
      pageSize: 5,
      totalCount:0,
      currentPage:1
    }
  },

  methods: {
    onTabClick(clickedTab){
      this.activeTab=clickedTab; 
    },
    onPaginationChange: function(page) {
      this.currentPage=page
    }
  },

  created(){

    /*Populate tabs with ToolsCategory Enum from GraphCMS */
    const catEnum=this.toolsCategory.__type.enumValues

    /* For enums, GraphCMS only allows underscore */
    /* Adding label field as well as replacing underscores with spaces */

    catEnum.map(e => e.label = e.name.replace(/_/g,' '));  
    this.tabs=catEnum

    if(this.tabs.length<=0)
      this.$router.replace({ path: '/404' });     //TBC - if needed

    this.activeTab=this.tabs[0].name 
  },

  computed: {
    pagedTools() {
      return this.toolsList.slice(this.pageSize * this.currentPage - this.pageSize, this.pageSize * this.currentPage)
    }
  },

  watch: { 
    activeTab: function () {  
      this.toolsList=this.topTools.toolsList.filter(item => item.category==this.activeTab)
      this.totalCount=this.toolsList.length
      this.currentPage=1    //Reset page as well
    }
  }
}
</script>

<style scoped lang="scss">

  .category-tab{
    margin-top:0.75rem;    
  }

  .tools-items{
    width:100%;

    .tools-items__item{
      padding-top:2.5rem;
    }   
  }

  .paginator{
    margin-top:1.5rem;  
    display:flex;
    justify-content:center;
  }

  .not-found{
    padding:2rem 0;
  }
</style>