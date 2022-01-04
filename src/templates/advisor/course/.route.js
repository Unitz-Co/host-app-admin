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

routeStore.addRule('course:user', {
  url: (params) => {
    if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
      return `${routeStore.getAppOrigin('user')}/courses/${_.get(params, 'slug')}`;
    }

    return `${routeStore.getAppOrigin('user')}/course/detail?id=${_.get(params, 'id')}`;
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

routeStore.addRule('coursePreview', {
  url: (params) => {
    if (process.env.GATSBY_APP_ENV && _.get(params, 'slug')) {
      return `${routeStore.getAppOrigin('user')}/courses/${_.get(params, 'slug')}`;
    }

    const id = _.get(params, 'id', 'unknown');
    return `${routeStore.getAppOrigin('user')}/course/detail?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/preview';
  },
});

routeStore.addRule('courseAdd', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/advisor/course/add?id=${id}`;
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

routeStore.addRule('courseClone', {
  url: (params) => {
    const id = _.get(params, 'id', 'unknown');
    return `/advisor/course/clone?id=${id}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'advisor/course/clone';
  },
});
