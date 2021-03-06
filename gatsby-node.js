require('@vl/mod-config/web');

const { gatsbyLoadTemplate } = require('@vl/mod-utils/gatsbyLoadTemplate');

exports.createPages = (gatsby) => {
  return Promise.all([gatsbyLoadTemplate({ gatsby })]);
};
// eslint-disable-next-line
exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({});
};
