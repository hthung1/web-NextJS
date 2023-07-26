import React, { useState } from 'react';
import Navbar from '@/components/_App/Navbar';
import PageBanner from '@/components/Banner/PageBanner';
import * as Icon from 'react-feather';
import Link from 'next/link';
import BlogSidebar from '@/components/Blog/BlogSidebar/BlogSidebar';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories } from '@/services/getPosts';
type Props = {
  courses: any[];
};
const Event = ({ courses }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const itemsPerPage = 8;

  // Tính toán các phần tử của trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = courses.slice(indexOfFirstItem, indexOfLastItem);

  for (let i = 1; i <= Math.ceil(courses.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Navbar />

      <PageBanner pageTitle='Tin tức & sự kiện' />

      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='row justify-content-center'>
                {currentPageItems.map((course: any) => (
                  <div className='col-lg-6 col-md-6' key={course.id}>
                    <div className='single-blog-post'>
                      <div className='blog-image'>
                        <Link href={`/tin-tuc-su-kien/${course.friendlyUrl}`}>
                          <img src={course.imagePath} alt='image' />
                        </Link>

                        <div className='date'>
                          <Icon.Calendar /> September 9, 2014
                        </div>
                      </div>

                      <div className='blog-post-content'>
                        <h3>
                          <Link href={`/tin-tuc-su-kien/${course.friendlyUrl}`}>{course.title}</Link>
                        </h3>

                        <span>
                          By <Link href='#'>Linhtk</Link>
                        </span>

                        <p>{course.subTitle}</p>

                        <Link href={`/tin-tuc-su-kien/${course.friendlyUrl}`} className='read-more-btn'>
                          Read More <Icon.ArrowRight />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className='col-lg-12 col-md-12'>
                  <div className='pagination-area'>
                    <nav aria-label='Page navigation'>
                      <ul className='pagination justify-content-center'>
                        {currentPage > 1 && (
                          <li className='page-item'>
                            <a className='page-link' href='#' onClick={() => setCurrentPage(currentPage - 1)}>
                              Prev
                            </a>
                          </li>
                        )}

                        {pageNumbers.map((num, index) => (
                          <li className={`page-item ${num === currentPage && 'active'}`} key={index}>
                            <a className='page-link' href='#' onClick={() => setCurrentPage(num)}>
                              {num}
                            </a>
                          </li>
                        ))}
                        {currentPage < pageNumbers.length && (
                          <li className='page-item'>
                            <a className='page-link' href='#' onClick={() => setCurrentPage(currentPage + 1)}>
                              Next
                            </a>
                          </li>
                        )}
                      </ul>
                    </nav>
                  </div>
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

export default Event;

export const getStaticProps = async () => {
  const categoryId = CATEGORIES.News.toString();
  const courses = await getPostsByCategories(categoryId);

  return {
    props: {
      courses: courses,
    },
  };
};
