const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');

routeStore.addRule('course', {
  url: (params) => {
    return `/advisor/course?id=${_.get(params, 'id')}`;
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

routeStore.addRule('courseDetail', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/advisor/course?id=${id}`;
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

routeStore.addRule('courseEdit', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/advisor/course/edit?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/course/edit';
  },
});

routeStore.addRule('courseAdd', {
  url: () => {
    return `/advisor/course/add`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/course/add';
  },
});
