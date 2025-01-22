<template>
  <div class="page-outer">
    <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
    <div class="detail-container">
      <div class="vertical-flex">
        <div class="image-frame">
          <img :src="resourceItem.image.url" class="tools-image" />
        </div>
        <div class="tools-title">
          <h1>
            {{ resourceItem.title }}
            <i v-if="resourceItem.link" class="el-icon-link" @click="openLink(resourceItem.link)"></i>
          </h1>
        </div>
        <div class="date-social flex-box --space-between --vertical-bottom">
          <div class="date-social__published flex-box --wrap">
            <!-- <span>Published&nbsp;</span>
            <span>
                {{this.$formatDDMonthYear(resourceItem.publishedDate)}}
            </span> -->
          </div>
          <!-- <social-box class="check-display"/>                   -->
        </div>
        <div class="tools-detail">
          <span v-html="resourceItem.detail.html"> </span>
        </div>
        <!-- <social-box/>     -->
        <div class="back-to">
          <nuxt-link to="/resources/technical">&lt; Back to Technical</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import graphcmsQuery from "@/services/graphcmsQuery";

export default {
  name: "ResourceItemDetail",

  async asyncData({ $graphcms, route }) {
    const slug = route.params.detail;
    const resource = await graphcmsQuery.resource($graphcms, slug);
    return { resourceItem: resource.resourceItem[0] };
  },

  data: () => {
    return {
      breadcrumb: [
        {
          to: { name: "index" },
          label: "Home",
        },
        {
          to: { name: "resources" },
          label: "Resources",
        },
        {
          to: { name: "resources-technical" },
          label: "Technical",
        },
      ],
    };
  },

  methods: {
    openLink(link) {
      if (link) {
        window.open(link, "_blank");
      }
    },
  },

  created() {
    this.pageTitle = this.resourceItem.title;
  },
};
</script>

<style scoped lang="scss">
.detail-container {
  padding: 2rem 20%;

  @media only screen and (max-width: $viewport-sm) {
    padding: 2rem 4%;
  }

  @media only screen and (min-width: $viewport-lg) {
    padding: 2rem 19.38rem;
  }
}

.image-frame {
  display: flex;
  justify-content: center;
}

.tools-image {
  width: 100%;
  height: auto;
  max-width: 51rem;
  max-height: 21.88rem;
  object-fit: cover;
  display: block;
}

.tools-title {
  margin-top: 1.56rem;
  margin-bottom: 0.63rem;
}

.el-icon-link {
  float: right;
  cursor: pointer;
}

.date-social {
  padding-bottom: 0.38rem;

  &__published {
    span {
      font-size: 0.88rem;
      line-height: 1.25rem;
    }
  }
}

.tools-detail {
  padding-top: 2rem;
  padding-bottom: 1.56rem;
  border-top: 1px solid $lineColor1;
  border-bottom: 1px solid $lineColor1;
  margin-bottom: 1.25rem;
}

.check-display {
  @media only screen and (max-width: $viewport-sm) {
    display: none;
  }
}
</style>
