import React, { useState } from 'react';
import PageBanner from '@/components/Common/PageBanner';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories, getPostsByFriendlyUrl } from '@/services/getPosts';
import Link from 'next/link';
import * as Icon from 'react-feather';
import moment from 'moment';
import { GetStaticPaths } from 'next';
import { renderHTML } from '@/libraries/render';

type Props = {
  page: any[];
  pageTitle: any;
  params: any;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: Props) => {
  switch (params.title) {
    case 'dai-hoi-co-dong':
      const page1 = CATEGORIES.Shareholder.toString();
      const shareholder = await getPostsByCategories(page1);

      return {
        props: {
          page: shareholder,
          pageTitle: 'Đại Hội Cổ Đông',
        },
      };
    case 'bao-cao-tai-chinh':
      const page2 = CATEGORIES.Finance.toString();
      const finance = await getPostsByCategories(page2);

      return {
        props: {
          page: finance,
          pageTitle: 'Báo Cáo Tài Chính',
        },
      };
    case 'dieu-le-cong-ty':
      const page3 = CATEGORIES.Charter.toString();
      const charter = await getPostsByCategories(page3);

      return {
        props: {
          page: charter,
          pageTitle: 'Điều Lệ Công Ty',
        },
      };
    case 'quy-che-quan-tri-noi-bo':
      const page4 = CATEGORIES.Regulations.toString();
      const regulations = await getPostsByCategories(page4);

      return {
        props: {
          page: regulations,
          pageTitle: 'Quy Chế QT Nội Bộ',
        },
      };
    case 'bao-cao-thuong-nien':
      const page5 = CATEGORIES.AnnualReport.toString();
      const annualReport = await getPostsByCategories(page5);

      return {
        props: {
          page: annualReport,
          pageTitle: 'Báo Cáo Thường Niên',
        },
      };
    case 'bao-cao-tinh-hinh-quan-tri-cong-ty':
      const page6 = CATEGORIES.CompanyManagement.toString();
      const companyManagement = await getPostsByCategories(page6);

      return {
        props: {
          page: companyManagement,
          pageTitle: 'Báo Cáo Tình Hình Quản Trị Công Ty',
        },
      };
    case 'cac-thong-tin-khac':
      const page7 = CATEGORIES.OtherInformation.toString();
      const otherInformation = await getPostsByCategories(page7);

      return {
        props: {
          page: otherInformation,
          pageTitle: 'Các Thông Tin Khác',
        },
      };
    default:
      const page8 = CATEGORIES.Shareholder.toString();
      const df = await getPostsByCategories(page8);

      return {
        props: {
          page: df,
        },
      };
  }
};
const ShareholderTitle = ({ page, pageTitle }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  const itemsPerPage = 8;

  // Tính toán các phần tử của trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPageItems = page?.slice(indexOfFirstItem, indexOfLastItem);

  for (let i = 1; i <= Math.ceil(page?.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return currentPageItems ? (
    <>
      <PageBanner pageTitle={`${pageTitle}`} />

      <div className='blog-area ptb-80'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              <div className='row'>
                {currentPageItems?.map((item: any) => (
                  <div className='col-lg-6 col-md-6' key={item.id}>
                    <div className='single-blog-post'>
                      <div className='blog-image'>
                        <div className='date'>
                          <Icon.Calendar /> {moment(item.createdDate).format('dddd, DD/MM/YYYY')}
                        </div>
                      </div>

                      <div className='blog-post-content'>
                        <h3>
                          <Link href='#'>{item.title}</Link>
                        </h3>

                        {renderHTML(item?.body)}
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
              <div className='widget-area' id='secondary'>
                <div className='widget widget_startp_posts_thumb'>
                  <h3 className='widget-title'>Quan Hệ Cổ Đông</h3>

                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/dai-hoi-co-dong'>Đại Hội Cổ Đông</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/bao-cao-tai-chinh'>Báo Cáo Tài Chính</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/dieu-le-cong-ty'>Điều Lệ Công Ty</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/quy-che-quan-tri-noi-bo'>Quy Chế QT Nội Bộ</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/bao-cao-thuong-nien'>Báo Cáo Thường Niên</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/bao-cao-tinh-hinh-quan-tri-cong-ty'>Báo Cáo Tình Hình Quản Trị Công Ty</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                  <article className='item'>
                    <div className='info'>
                      <h4 className='title usmall'>
                        <Link href='/quan-he-co-dong/cac-thong-tin-khac'>Các Thông Tin Khác</Link>
                      </h4>
                    </div>
                    <div className='clear'></div>
                  </article>
                </div>
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
  ) : null;
};
export default ShareholderTitle;
