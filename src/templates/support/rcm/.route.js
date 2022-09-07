const _ = require('lodash');
// const slugify = require('slugify');

const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('support/rcm', {
  url: (params) => {
    return `/support/rcm?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'support/rcm';
  },
});
