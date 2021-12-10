const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('room', {
  url: (params) => {
    return `/advisor/room?id=${_.get(params, 'id')}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/course';
  },
});

routeStore.addRule('room:user', {
  url: (params) => {
    return `${routeStore.getAppOrigin('user')}/room?id=${_.get(params, 'id')}`;
  },
});

routeStore.addRule('room:advisor', {
  url: (params) => {
    return `${routeStore.getAppOrigin('advisor')}/room?id=${_.get(params, 'id')}`;
  },
});
