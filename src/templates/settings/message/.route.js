const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('message', {
  url: (params) => {
    return `/settings/message`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'message';
  },
});
