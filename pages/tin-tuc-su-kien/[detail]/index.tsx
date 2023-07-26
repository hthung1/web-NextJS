import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar/BlogSidebar';
import { getPostsByFriendlyUrl } from '@/services/getPosts';
import moment from 'moment';
import { GetStaticPaths } from 'next';
import ReactHtmlParser from 'react-html-parser';

type Props = {
  detail: any;
  params: any;
};
const BlogDetails = ({ detail }: Props) => {
  const date = moment(detail?.createdDate).format('dddd, DD/MM/YYYY');
  const body = ReactHtmlParser(detail?.body);

  return (
    <>
      <Navbar />

      <PageBanner pageTitle={detail?.title} />

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

export default BlogDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps = async ({ params }: Props) => {
  const details = await getPostsByFriendlyUrl(params.detail);

  return {
    props: {
      detail: details[0],
    },
  };
};
