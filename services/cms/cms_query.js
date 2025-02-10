const { gql } = require("graphql-request");

const titledContentQuery = gql`
  query($name: String!) {
    values: titledContent(where: { name: $name }) {
      content {
        html
      }
      title
    }
  }
`;

const multiContentQuery = gql`
  query($name: String!) {
    values: multiContent(where: { name: $name }) {
      contents {
        html
      }
      title
    }
  }
`;

const projectContentQuery = gql`
  query($name: String!) {
    values: projectContent(where: { name: $name }) {
      title
    }
  }
`;

const bannerQuery = gql`
  query($name: String!) {
    values: bannerImage(where: { name: $name }) {
      image {
        url
      }
      title
    }
  }
`;

const publicationsItemQuery = gql`
  query ($fetchCount: Int) {
    values: publicationsItems(first: $fetchCount, orderBy: year_DESC) {
      year
      title
      section {
        html
      }
      content {
        html
      }
    }
  }
`;

const projectItemQuery = gql`
  query($name: String!) {
    projectItem: projectsItem(where: { name: $name }) {
      content {
        html
      }
      title
      linkCaption
      link
      blurb
      pdf {
        url
      }
    }
  }
`;

const topNewsQuery = gql`
  query($fetchCount: Int) {
    newsList: newsItems(first: $fetchCount, orderBy: publishedDate_DESC) {
      publishedDate
      title
      image {
        url
      }
      category
      blurb
      slug
    }
  }
`;

const newsQuery = gql`
  query($slug: String!) {
    newsItem: newsItems(where: { slug: $slug }) {
      publishedDate
      title
      image {
        url
      }
      blurb
      detail {
        html
      }
    }
  }
`;

const newsCategoryQuery = gql`
  query introspectNewsCategoryType {
    __type(name: "NewsCategory") {
      enumValues {
        name
      }
    }
  }
`;

const topEventsQuery = gql`
  query($fetchCount: Int) {
    eventsList: eventsItems(first: $fetchCount, orderBy: startDate_DESC) {
      startDate
      endDate
      title
      image {
        url
      }
      category
      slug
      blurb
    }
  }
`;

const eventQuery = gql`
  query($slug: String!) {
    eventItem: eventsItems(where: { slug: $slug }) {
      startDate
      endDate
      title
      image {
        url
      }
      detail {
        html
      }
      blurb
      externalLink
    }
  }
`;

const eventsCategoryQuery = gql`
  query introspectEventsCategoryType {
    __type(name: "EventsCategory") {
      enumValues {
        name
      }
    }
  }
`;

const topToolsQuery = gql`
  query($fetchCount: Int) {
    toolsList: toolsItems(first: $fetchCount, orderBy: publishedDate_DESC) {
      publishedDate
      title
      image {
        url
      }
      category
      blurb
      slug
      link
    }
  }
`;

const toolQuery = gql`
  query($slug: String!) {
    toolItem: toolsItems(where: { slug: $slug }) {
      publishedDate
      title
      image {
        url
      }
      blurb
      detail {
        html
      }
      link
    }
  }
`;

const toolsCategoryQuery = gql`
  query introspectToolsCategoryType {
    __type(name: "ToolsCategory") {
      enumValues {
        name
      }
    }
  }
`;

const topResourcesQuery = gql`
  query($fetchCount: Int) {
    resourcesList: resourcesItems(first: $fetchCount) {
      slug
      title
      blurb
      detail {
        html
      }
      link
      image {
        url
      }
      category
    }
  }
`;

const resourceQuery = gql`
  query($slug: String!) {
    resourceItem: resourcesItems(where: { slug: $slug }) {
      title
      blurb
      detail {
        html
      }
      link
      image {
        url
      }
    }
  }
`;

const resourcesCategoryQuery = gql`
  query introspectContactAreaType {
    __type(name: "ResourcesCategory") {
      enumValues {
        name
      }
    }
  }
`;

const feedbackReasonQuery = gql`
  query introspectFeedbackReasonType {
    __type(name: "FeedbackReason") {
      enumValues {
        name
      }
    }
  }
`;

const contactReasonQuery = gql`
  query introspectContactReasonType {
    __type(name: "ContactReason") {
      enumValues {
        name
      }
    }
  }
`;

const contactAreaQuery = gql`
  query introspectContactAreaType {
    __type(name: "ContactArea") {
      enumValues {
        name
      }
    }
  }
`;

module.exports = {
  titledContentQuery,
  multiContentQuery,
  projectContentQuery,
  projectItemQuery,
  bannerQuery,
  publicationsItemQuery,
  topNewsQuery,
  newsQuery,
  newsCategoryQuery,
  topEventsQuery,
  eventQuery,
  eventsCategoryQuery,
  topToolsQuery,
  toolQuery,
  toolsCategoryQuery,
  topResourcesQuery,
  resourceQuery,
  resourcesCategoryQuery,
  feedbackReasonQuery,
  contactReasonQuery,
  contactAreaQuery,
};
