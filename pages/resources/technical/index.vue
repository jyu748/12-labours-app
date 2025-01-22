<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <div class="container-default vertical-flex">
      <h1>Technical Resources</h1>
      <div class="default-inner">
        <item-card-group :itemList="topResources.resourcesList" linkName="resources-technical" />
        <div class="back-to">
          <nuxt-link to="/resources">&lt; Back to Resources</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import graphcmsQuery from "@/services/graphcmsQuery";

export default {
  name: "TechnicalResources",

  async asyncData({ $graphcms }) {
    const topResources = await graphcmsQuery.topResources($graphcms);
    return { topResources };
  },

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
    };
  },
};
</script>

<style scoped lang="scss"></style>
