import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import App from '@uz/unitz-app-web/AdminApp';
import SEO from '@uz/unitz-layout-web/SEO';

import _ from 'lodash';
import Layout from '@uz/unitz-layout-web/LayoutAdmin';
import useRoute from '@vl/hooks/useGbRoute';
import SEOLinks from '@uz/unitz-pages-admin/SEOLinks';
import PageData from '../../../data/PageDataQuery';

export const component = (props) => {
  const pageContext = _.get(props, 'pageContext');
  // eslint-disable-next-line
  const route = useRoute();
  route.setPageContext(pageContext);
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          {ctx.debug(() => {
            ctx.set('pageContext', pageContext);
          })}
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'AdminNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <div className="app-row">
              <SEOLinks />
            </div>
          </Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
};

export default component;
