<template>
    <div class="page-outer">
        <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
        <div class="detail-container">
            <div class="vertical-flex">
                <div class="publication-title">
                    <h1>{{ publication.title }}</h1>
                </div>
                <div class="publication-detail">
                    <div v-html="publication.long.html"></div>
                </div>
                <div class="back-to">
                    <nuxt-link to="/about">&lt; Back to About</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import graphcmsQuery from '@/services/graphcmsQuery'
export default {
    name: "ProjectPage",

    async asyncData({ $graphcms }) {
        const publication = await graphcmsQuery.publicationContent($graphcms, "publications");
        return { publication: publication.values };
    },

    data: () => {
        return {
            pageTitle: 'Project',
            breadcrumb: [
                {
                    to: {
                        name: 'index'
                    },
                    label: 'Home'
                },
                {
                    to: {
                        name: 'about'
                    },
                    label: 'About'
                }
            ]
        };
    },

    created() {
        this.pageTitle = this.publication.title;
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

.publication-title {
    margin-top: 1.56rem;
    margin-bottom: 0.63rem;
}

.publication-detail {
    padding-top: 2rem;
    padding-bottom: 1.56rem;
    border-top: 1px solid $lineColor1;
    border-bottom: 1px solid $lineColor1;
    margin-bottom: 1.25rem;
}
</style>
