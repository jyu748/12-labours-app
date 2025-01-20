<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <!-- <div class="page-wrap">
      <div class="container">
        <client-only>
          <sphinx-page :baseURL="xmlURL" />
        </client-only>
      </div>
    </div> -->
    <div class="container-default">
      <h1>Educational Resources</h1>
    </div>
  </div>
</template>

<script>
import { SphinxPage } from "vue-sphinx-xml";

export default {
  name: "ResourcesPage",
  components: { SphinxPage },
  data: () => {
    return {
      pageTitle: "Educational Resources",
      breadcrumb: [
        {
          to: {
            name: "index",
          },
          label: "Home",
        },
        {
          to: {
            name: "resources",
          },
          label: "Resources",
        },
      ],
      xmlURL: undefined,
    };
  },

  created: function() {
    this.xmlURL = this.$config.twelve_labours_xml;
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/_layout.scss';
</style>
