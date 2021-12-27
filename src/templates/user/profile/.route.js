const _ = require('lodash');
const slugify = require('slugify');
const { routeStore } = require('@vl/mod-utils/gatsbyRouteStore');
const querystring = require('querystring');
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

routeStore.addRule('activities-history-detail', {
  url: (params) => {
    return `/activities-history-detail?id=${_.get(params, 'id')}`;
  },
});

// Rule bên dưới add để fix lỗi. Có thể sẽ không có sử dụng!

routeStore.addRule('userProfileMenu', {
  url: (params) => {
    return `/me/${params}`;
  },
  // parse: (urlObject) => {
  //   const params = {};
  //   for (let param in urlObject.searchParams) {
  //     params[param] = urlObject.searchParams.get(param);
  //   }
  //   return params;
  // },
  // match: (urlObject) => {
  //   return urlObject.pathname === 'me/${params}';
  // },
});
routeStore.addRule('coursePurchase', {
  url: (params) => {
    let search = `${querystring.stringify(_.pick(params, ['id']))}`;
    search = search ? `?${search}` : '';
    return `/course/purchase${search}`;
  },
  parse: (urlObject) => {
    const params = {};
    for (let param in urlObject.searchParams) {
      params[param] = urlObject.searchParams.get(param);
    }
    return params;
  },
  match: (urlObject) => {
    return urlObject.pathname === 'course/purchase';
  },
});
