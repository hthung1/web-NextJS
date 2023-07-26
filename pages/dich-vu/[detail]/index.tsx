import { getPostsByFriendlyUrl } from '@/services/getPosts';
import _ from 'lodash';
import { GetStaticPaths } from 'next';
import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
import ReactHtmlParser from 'react-html-parser';
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar/BlogSidebar';
import moment from 'moment';

type Props = {
  detail: any;
  params: any;
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps = async ({ params }: Props) => {
  const details = await getPostsByFriendlyUrl(params.detail);
  // console.log(params);

  return {
    props: {
      detail: details[0],
    },
  };
};
const ServiceDetails = ({ detail }: any) => {
  // console.log(detail);
  const date = moment(detail?.createdDate).format('dddd, DD/MM/YYYY');
  const body = ReactHtmlParser(detail?.body);
  return (
    <>
      <Navbar />

      <PageBanner pageTitle='Dịch Vụ' />

      <div className='blog-details-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog-details-desc'>
                <div className='article-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Icon.Clock /> {date}
                      </li>
                      <li>
                        <Icon.User /> <a href='#'>Linhtk</a>
                      </li>
                    </ul>
                  </div>
                  <h2>{detail?.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
