import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar/BlogSidebar';
import { getPosts, getPostsByFriendlyUrl } from '@/services/getPosts';
import CATEGORIES from '@/constants/CATEGORIES';
import GROUPS from '@/constants/GROUPS';
import URLS from '@/constants/URLS';
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import _ from 'lodash';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

export const getStaticPaths = async () => {
  // Get Posts by category and group
  const jobs = await getPosts({
    mode: 'ForStaticPaths',
    categoryId: CATEGORIES.Jobs,
    groupId: GROUPS.Main,
    includeBody: false,
  });

  const paths = jobs.map((job: any) => {
    return {
      params: {
        friendlyUrl: job.friendlyUrl,
      },
    };
  });
  return { paths, fallback: true };
};

interface IParams extends ParsedUrlQuery {
  friendlyUrl: string;
}
// ------------------------------------------------------------------------------------------------
export const getStaticProps: GetStaticProps = async (context) => {
  const { friendlyUrl } = context.params as IParams;
  // console.log('🚀 ~ friendlyUrl:', friendlyUrl);

  const job: any = _.first(await getPostsByFriendlyUrl(friendlyUrl));
  // console.log('🚀 ~ post:', job);

  if (!job) {
    return { notFound: true };
  }

  const jobs = await getPosts({
    categoryId: job.categoryID,
    includeBody: true,
  });

  return {
    props: {
      job,
    },
    revalidate: URLS.validate,
  };
};

const BlogDetails = ({ job }: any) => {
  // console.log(job);
  const body = ReactHtmlParser(job?.body);
  return (
    <>
      <Navbar />

      <PageBanner pageTitle={job?.title} />

      <div className='blog-details-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='blog-details-desc'>
                <div className='article-image'>
                  <img src='/images/blog-image/blog-details.jpg' alt='image' />
                </div>

                <div className='article-content'>
                  <div className='entry-meta'>
                    <ul>
                      <li>
                        <Icon.Clock /> {moment(job?.createdDate).format('dddd, DD-MM-YYYY')}
                      </li>
                      <li>
                        <Icon.User /> <a href='#'>Admin</a>
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
      <ContactForm />
    </>
  );
};
const ContactForm = () => {
  return (
    <>
      <div className='contact-area ptb-80'>
        <div className='container'>
          <div className='section-title'>
            <h2>Get In Touch With Us</h2>
            <div className='bar'></div>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <img src='/images/contact-img.png' alt='image' />
            </div>

            <div className='col-lg-6 col-md-12'>
              <form>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <input type='text' name='name' placeholder='Your Name' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <input type='text' name='email' placeholder='Your email address' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='number' placeholder='Your phone number' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='subject' placeholder='Your Subject' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <textarea name='text' cols={30} rows={5} placeholder='Write your message...' className='form-control' required />
                    </div>

                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                      <label className='form-check-label' htmlFor='flexCheckDefault'>
                        By checking this, you agree to our <Link href='/term-condition'>Terms</Link> and <Link href='/privacy-policy'>Privacy policy</Link>.
                      </label>
                    </div>
                  </div>

                  <div className='col-lg-12 col-sm-12'>
                    <button type='submit' className='btn btn-primary'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
