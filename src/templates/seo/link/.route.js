const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('linkDetail', {
  url: (params) => {
    return `/seo/link?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'seo/link';
  },
});

routeStore.addRule('linkAdd', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/seo/link/add`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'seo/link/add';
  },
});

routeStore.addRule('linkEdit', {
  url: (params) => {
    return `/seo/link/edit?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'seo/link/edit';
  },
});

routeStore.addRule('link:origin', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}/${_.get(params, 'origin_path')}`;
  },
});
routeStore.addRule('link:seo', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}/${_.get(params, 'seo_path')}`;
  },
});
