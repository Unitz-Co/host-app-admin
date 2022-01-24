const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const querystring = require('querystring');

routeStore.addRule('transaction-detail', {
  url: (params) => {
    return `/transaction/detail?id=${_.get(params, 'id')}`;
  },
});
