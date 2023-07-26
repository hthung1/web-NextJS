import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next';
import { getPosts, getPostsByFriendlyUrl } from '@/services/getPosts';
import URLS from '@/constants/URLS';
import _ from 'lodash';
import CATEGORIES from '@/constants/CATEGORIES';
import GROUPS from '@/constants/GROUPS';
import { renderHTML } from '@/libraries/render';
import ContactForm from '@/components/Contact/ContactForm';

type Props = {
  posts: any;
};
export const getStaticPaths = async () => {
  // Get Posts by category and group
  const courses = await getPosts({
    mode: 'ForStaticPaths',
    categoryId: CATEGORIES.Product,
    groupId: GROUPS.Main,
    includeBody: false,
  });

  const paths = courses.map((course: any) => {
    return {
      params: {
        friendlyUrl: course.friendlyUrl,
      },
    };
  });
  return { paths: [], fallback: true };
};

interface IParams extends ParsedUrlQuery {
  friendlyUrl: string;
}
// ------------------------------------------------------------------------------------------------
export const getStaticProps: GetStaticProps = async (context) => {
  const { friendlyUrl } = context.params as IParams;
  // console.log('🚀 ~ friendlyUrl:', friendlyUrl);

  const post: any = _.first(await getPostsByFriendlyUrl(friendlyUrl));
  // console.log('🚀 ~ post:', post);

  if (!post) {
    return { notFound: true };
  }

  const posts = await getPosts({
    categoryId: post.categoryID,
    includeBody: true,
  });

  return {
    props: {
      posts: posts,
    },
    revalidate: URLS.validate,
  };
};

const PricingStyleFour: React.FC<Props> = ({ posts }) => {
  // console.log(posts);

  const openTabSection = (evt: React.MouseEvent<HTMLLIElement, MouseEvent>, tabName: string) => {
    let i: number;
    let tabcontent = document.getElementsByClassName('tabs_item') as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }

    let tablinks = document.getElementsByTagName('li');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '');
    }

    let selectedTab = document.getElementById(tabName) as HTMLElement;
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }

    evt.currentTarget.className += 'current';
  };

  return posts ? (
    <>
      <div className='pricing-area pb-50'>
        <div className='container'>
          <div className='section-title'>
            <h2>{renderHTML(posts[0]?.title)}</h2>
            <div className='bar'></div>
          </div>

          <div className='tab pricing-tab bg-color'>
            <ul className='tabs'>
              <li className='current' onClick={(e) => openTabSection(e, 'tab1')}>
                {renderHTML(posts[0]?.title)}
              </li>

              <li onClick={(e) => openTabSection(e, 'tab2')}>{renderHTML(posts[1]?.title)}</li>

              <li onClick={(e) => openTabSection(e, 'tab3')}>{renderHTML(posts[2]?.title)}</li>
              <li onClick={(e) => openTabSection(e, 'tab4')}>{renderHTML(posts[3]?.title)}</li>
              <li onClick={(e) => openTabSection(e, 'tab5')}>{renderHTML(posts[4]?.title)}</li>
              <li onClick={(e) => openTabSection(e, 'tab6')}>{renderHTML(posts[5]?.title)}</li>
            </ul>

            <div className='tab_content'>
              <div id='tab1' className='tabs_item'>
                {renderHTML(posts[0]?.body)}
              </div>

              <div id='tab2' className='tabs_item'>
                {renderHTML(posts[1]?.body)}
              </div>

              <div id='tab3' className='tabs_item'>
                {renderHTML(posts[2]?.body)}
              </div>

              <div id='tab4' className='tabs_item'>
                {renderHTML(posts[3]?.body)}
              </div>

              <div id='tab5' className='tabs_item'>
                {renderHTML(posts[4]?.body)}
              </div>
              <div id='tab6' className='tabs_item'>
                {renderHTML(posts[5]?.body)}
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className='shape1'>
          <img src='/images/shape1.png' alt='shape' />
        </div>
        <div className='shape2 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.svg' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
      </div>
      <ContactForm />
    </>
  ) : null;
};

export default PricingStyleFour;
