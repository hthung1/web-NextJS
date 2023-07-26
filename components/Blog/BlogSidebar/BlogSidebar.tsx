import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogSidebar = () => {
  return (
    <>
      <div className='widget-area' id='secondary'>
        <div className='widget widget_search'>
          <form className='search-form'>
            <label>
              <input type='search' className='search-field' placeholder='Search...' />
            </label>
            <button type='submit'>
              <Icon.Search />
            </button>
          </form>
        </div>

        <div className='widget widget_startp_posts_thumb'>
          <h3 className='widget-title'>Popular Posts</h3>

          <article className='item'>
            <Link href='/blog-details' className='thumb'>
              <span className='fullimage cover bg1' role='img'></span>
            </Link>

            <div className='info'>
              <time>June 10, 2022</time>
              <h4 className='title usmall'>
                <Link href='/blog-details'>Making Peace With The Feast Or Famine Of Freelancing</Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>

          <article className='item'>
            <Link href='/blog-details' className='thumb'>
              <span className='fullimage cover bg2' role='img'></span>
            </Link>
            <div className='info'>
              <time>June 21, 2022</time>
              <h4 className='title usmall'>
                <Link href='/blog-details'>I Used The Web For A Day On A 50 MB Budget</Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>

          <article className='item'>
            <Link href='/blog-details' className='thumb'>
              <span className='fullimage cover bg3' role='img'></span>
            </Link>
            <div className='info'>
              <time>June 30, 2022</time>
              <h4 className='title usmall'>
                <Link href='/blog-details'>How To Create A Responsive Popup Gallery?</Link>
              </h4>
            </div>

            <div className='clear'></div>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
