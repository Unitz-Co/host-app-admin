const path = require('path');
const _ = require('lodash');
require('@vl/mod-config/web');

exports.createPages = async (item, gatsby) => {
  // @update query
  return Promise.all(
    ['index'].map(() => {
      const pagePath = 'settings/notifications';
      console.log('creating page', pagePath);
      const pageContext = _.cloneDeep({
        id: pagePath,
        slug: pagePath,
        params: {
          navbar: {
            title: 'Settings/Notifications',
            path: 'settings/notifications',
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
