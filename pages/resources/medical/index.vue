<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <div class="container-default">
      <h1>Medical Resources</h1>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "MedicalResources",
    data: () => {
      return {
        pageTitle: "Technical Resources",
        breadcrumb: [
          {
            to: { name: "index" },
            label: "Home",
          },
          {
            to: { name: "resources" },
            label: "Resources",
          },
        ],
      }
    }
  }
</script>

<style scoped lang="scss">
// 
</style>