const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('user/profile', {
  url: (params) => {
    return `/user/profile?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'user/profile';
  },
});

routeStore.addRule('profile', {
  url: (params) => {
    return `/user/profile?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'user/profile';
  },
});

routeStore.addRule('profile:user', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}${_.get(params, 'profile.slug')}`;
  },
});
