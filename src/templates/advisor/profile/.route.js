const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('advisor/profile', {
  url: (params) => {
    return `/advisor/profile?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/profile';
  },
});

routeStore.addRule('profile', {
  url: (params) => {
    return `/advisor/profile?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/profile';
  },
});

routeStore.addRule('profile:user', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}${_.get(params, 'profile.slug')}`;
  },
});
