<template>
    <div class="page-outer">
        <breadcrumb-trail :breadcrumb="breadcrumb" :title="pageTitle" />
        <div class="detail-container">
            <div class="vertical-flex">
                <div class="project-title">
                    <h1>{{ projectTitle }}</h1>
                </div>
                <div class="project-detail">
                    <div v-if="htmlContent" v-html="htmlContent"></div>
                    <object v-else :data="pdfContent" type="application/pdf" width="100%" height="1000"
                        title="Embedded PDF Viewer">
                        <p>
                            Your browser does not support PDFs.
                            <a :href="pdfContent" target="_blank">Download the PDF</a>
                        </p>
                    </object>
                </div>
                <div class="back-to-about">
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

    async asyncData({ $graphcms, params }) {
        const title = params.title;
        const project = await graphcmsQuery.projectInformation($graphcms, title);
        return { project: project.values };
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
                },
                {
                    to: {
                        name: 'about'
                    },
                    label: 'Projects'
                },
            ]
        };
    },

    computed: {
        projectTitle() {
            return this.project.title[0];
        },
        htmlContent() {
            return this.project.content[0]?.html;
        },
        pdfContent() {
            return this.project.pdf[0]?.url;
        },
    },

    created() {
        this.pageTitle = this.project.title[0];
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

.project-title {
    margin-top: 1.56rem;
    margin-bottom: 0.63rem;
}

.project-detail {
    padding-top: 2rem;
    padding-bottom: 1.56rem;
    border-top: 1px solid $lineColor1;
    border-bottom: 1px solid $lineColor1;
    margin-bottom: 1.25rem;
}

.back-to-about {
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    a {
        line-height: 1.25rem;
    }
}
</style>
