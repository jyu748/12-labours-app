<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <div class="container-default">
      <h1>Workflow</h1>
      <h3>{{ $route.query.model }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
  data: () => {
    return {
      pageTitle: 'Workflows',
      breadcrumb: [
        {
          to: { name: 'index' },
          label: 'Home'
        },
        {
          to: { name: 'data' },
          label: 'Data & Models'
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
// 
</style>