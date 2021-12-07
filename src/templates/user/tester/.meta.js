const path = require('path');
const _ = require('lodash');
require('@vl/mod-config/web');

exports.createPages = async (item, gatsby) => {
  // @update query
  return Promise.all(
    ['index'].map(() => {
      const pagePath = 'user/tester';
      console.log('creating page', pagePath);
      const pageContext = _.cloneDeep({
        id: pagePath,
        slug: pagePath,
        params: {
          navbar: {
            title: 'Users/Testers',
            path: 'user/tester',
          },
        },
      });
      return gatsby.actions.createPage({
        path: pagePath,
        component: item.resolvers.component(gatsby),
        context: pageContext,
      });
    })
  );
};
