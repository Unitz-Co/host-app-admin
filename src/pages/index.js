import React from 'react';

import { ctx } from '@vl/redata';
import DIV from '@vl/redata/DIV.macro';

import HomePage from '@uz/unitz-pages-admin/Home';
import App from '@uz/unitz-app-web/AdminApp';

import Layout from '@uz/unitz-layout-web/LayoutAdmin';
import SEO from '@uz/unitz-layout-web/SEO';

import PageData from '../data/PageDataQuery';
// build staging
const HomeIndex = (props) => {
  return (
    <App>
      <Layout location={props.location} PageData={PageData}>
        <DIV>
          <SEO pageData={ctx.apply('ctf.findPage', { name: 'Homepage' })} />
          <Layout.POS name="app-header">{ctx.apply('ctf.renderSection', { name: 'articleNavbarSection' })}</Layout.POS>
          <Layout.POS name="app-body">
            <HomePage />
          </Layout.POS>
        </DIV>
      </Layout>
    </App>
  );
};

export default HomeIndex;
