import Link from 'next/link';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import * as Icon from 'react-feather';
import PageBanner from '@/components/Banner/PageBanner';
import { getPosts, getPostsByCategories } from '@/services/getPosts';
import CATEGORIES from '@/constants/CATEGORIES';
import moment from 'moment';

type Props = {
  courses: any[];
  course: any[];
};
export default function TuyenDung({ courses }: Props) {
  return (
    <>
      <PageBanner pageTitle='Tuyển Dụng' />
      <Blog5 courses={courses} />
      <PartnerStyleTwo />

      <ContactForm />
    </>
  );
}

const PartnerStyleTwo = () => {
  return (
    <>
      <div className='repair-partner-area bg-f9fafb'>
        <div className='container'>
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className='repair-partner-slides'
          >
            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-1.png' alt='image' />
                  <img src='/images/partner-img/partner-hover1.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-2.png' alt='image' />
                  <img src='/images/partner-img/partner-hover2.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-3.png' alt='image' />
                  <img src='/images/partner-img/partner-hover3.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-10.png' alt='image' />
                  <img src='/images/partner-img/partner-hover10.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-5.png' alt='image' />
                  <img src='/images/partner-img/partner-hover5.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-6.png' alt='image' />
                  <img src='/images/partner-img/partner-hover6.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='single-repair-partner'>
                <a href='#' target='_blank'>
                  <img src='/images/partner-img/partner-7.png' alt='image' />
                  <img src='/images/partner-img/partner-hover7.png' alt='image' />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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

const Blog5 = (courses: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 2;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const totalPage = Math.ceil(courses.courses.length / itemPerPage);
  const pageNumbers = Array.from({ length: totalPage }, (_, index) => index + 1);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  // console.log(courses);
  return (
    <>
      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            {courses.courses.slice(startIndex, endIndex).map((course: any) => (
              <div key={course.id} className='col-lg-6 col-md-6'>
                <div className='single-blog-post-item'>
                  <div className='post-image'>
                    <Link href={`/tuyen-dung/chi-tiet-tuyen-dung/${course.friendlyUrl}`}>
                      <img src='https://softech.vn/Content/company/images/Tuyen-Dung-Softech.jpg' alt='image' />
                    </Link>
                  </div>

                  <div className='post-content'>
                    <ul className='post-meta'>
                      <li>
                        <Link href='#'>Admin</Link>
                      </li>
                      <li>{moment(course.createdDate).format('dddd, DD-MM-YYYY')}</li>
                    </ul>
                    <h3>
                      <Link href={`/tuyen-dung/chi-tiet-tuyen-dung/${course.friendlyUrl}`}>{course.title}</Link>
                    </h3>

                    <Link href={`/tuyen-dung/chi-tiet-tuyen-dung/${course.friendlyUrl}`} className='read-more-btn'>
                      Xem thêm <Icon.PlusCircle />
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
                    {currentPage == 1 ? (
                      ''
                    ) : (
                      <li className='page-item'>
                        <a className='page-link' href='#' onClick={goToPreviousPage}>
                          Prev
                        </a>
                      </li>
                    )}

                    {pageNumbers.map((pageNumber) => (
                      <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                        <a className='page-link' href='#' onClick={() => setCurrentPage(pageNumber)}>
                          {pageNumber}
                        </a>
                      </li>
                    ))}
                    {/* <li className='page-item active'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li> */}

                    {currentPage === totalPage ? (
                      ''
                    ) : (
                      <li className='page-item'>
                        <a className='page-link' href='#' onClick={goToNextPage}>
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

        {/* Shape Images */}
        <div className='shape2 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape3'>
          <img src='/images/shape3.svg' alt='shape' />
        </div>
        <div className='shape4'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape6 rotateme'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const categoryID = CATEGORIES.Jobs.toString();
  // Get Posts by category and group
  const courses = await getPostsByCategories(categoryID);
  return {
    props: {
      courses: courses,
    },
  };
};
