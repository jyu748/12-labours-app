import cms_content from "./cms/cms_content.json";
import {
  titledContentQuery,
  multiContentQuery,
  projectContentQuery,
  projectItemQuery,
  bannerQuery,
  topNewsQuery,
  newsQuery,
  newsCategoryQuery,
  topEventsQuery,
  eventQuery,
  eventsCategoryQuery,
  topToolsQuery,
  toolQuery,
  toolsCategoryQuery,
  resourceQuery,
  resourcesCategoryQuery,
  feedbackReasonQuery,
  contactReasonQuery,
  contactAreaQuery,
} from "./cms/cms_query.js";

async function titledContent(graphcms, name) {
  if (!graphcms.url) {
    return cms_content.content[name];
  }
  const variable = {
    name: name,
  };
  return await graphcms.request(titledContentQuery, variable);
}

async function multiContent(graphcms, name) {
  if (!graphcms.url) {
    return cms_content.multiContent[name];
  }
  const variable = {
    name: name,
  };
  return await graphcms.request(multiContentQuery, variable);
}

async function projectContent(graphcms, name) {
  if (!graphcms.url) {
    return cms_content.projectContent[name];
  }
  const variable = {
    name: name,
  };
  return await graphcms.request(projectContentQuery, variable);
}

async function projectItem(graphcms, name) {
  if (!graphcms.url) {
    return cms_content.projectItem[name];
  }
  const variable = {
    name: name,
  };
  return await graphcms.request(projectItemQuery, variable);
}

async function banner(graphcms, name) {
  if (!graphcms.url) {
    return cms_content.banner[name];
  }
  const variable = {
    name: name,
  };
  return await graphcms.request(bannerQuery, variable);
}

async function topNews(graphcms, fetchCount) {
  if (!graphcms.url) {
    return cms_content.topNews;
  }
  const variable = {
    fetchCount: fetchCount,
  };
  return await graphcms.request(topNewsQuery, variable);
}

async function news(graphcms, slug) {
  if (!graphcms.url) {
    return cms_content.news[slug];
  }
  const variable = {
    slug: slug,
  };
  return await graphcms.request(newsQuery, variable);
}

async function newsCategory(graphcms) {
  if (!graphcms.url) {
    return cms_content.newsCategory;
  }
  return await graphcms.request(newsCategoryQuery);
}

async function topEvents(graphcms, fetchCount) {
  if (!graphcms.url) {
    return cms_content.topEvents;
  }
  const variable = {
    fetchCount: fetchCount,
  };
  return await graphcms.request(topEventsQuery, variable);
}

async function event(graphcms, slug) {
  if (!graphcms.url) {
    return cms_content.event[slug];
  }
  const variable = {
    slug: slug,
  };
  return await graphcms.request(eventQuery, variable);
}

async function eventsCategory(graphcms) {
  if (!graphcms.url) {
    return cms_content.eventsCategory;
  }
  return await graphcms.request(eventsCategoryQuery);
}

async function topTools(graphcms, fetchCount) {
  if (!graphcms.url) {
    return cms_content.topTools;
  }
  const variable = {
    fetchCount: fetchCount,
  };
  return await graphcms.request(topToolsQuery, variable);
}

async function tool(graphcms, slug) {
  if (!graphcms.url) {
    return cms_content.tool[slug];
  }
  const variable = {
    slug: slug,
  };
  return await graphcms.request(toolQuery, variable);
}

async function toolsCategory(graphcms) {
  if (!graphcms.url) {
    return cms_content.toolsCategory;
  }
  return await graphcms.request(toolsCategoryQuery);
}

async function resource(graphcms, slug) {
  if (!graphcms.url) {
    return cms_content.resource[slug];
  }
  const variable = {
    slug: slug,
  };
  return await graphcms.request(resourceQuery, variable);
}

async function resourcesCategory(graphcms) {
  if (!graphcms.url) {
    return cms_content.resourcesCategory;
  }
  return await graphcms.request(resourcesCategoryQuery);
}

async function feedbackReason(graphcms) {
  if (!graphcms.url) {
    return cms_content.feedbackReason;
  }
  return await graphcms.request(feedbackReasonQuery);
}

async function contactReason(graphcms) {
  if (!graphcms.url) {
    return cms_content.contactReason;
  }
  return await graphcms.request(contactReasonQuery);
}

async function contactArea(graphcms) {
  if (!graphcms.url) {
    return cms_content.contactArea;
  }
  return await graphcms.request(contactAreaQuery);
}

export default {
  titledContent,
  multiContent,
  projectContent,
  projectItem,
  topNews,
  news,
  newsCategory,
  topEvents,
  event,
  eventsCategory,
  topTools,
  tool,
  toolsCategory,
  resource,
  resourcesCategory,
  banner,
  feedbackReason,
  contactReason,
  contactArea,
};
