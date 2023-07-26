import CATEGORIES from '@/constants/CATEGORIES';
import GROUPS from '@/constants/GROUPS';
import URLS from '@/constants/URLS';
import { getPosts, getPostsByCategories, getPostsByFriendlyUrl } from '@/services/getPosts';
import _ from 'lodash';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import * as Icon from 'react-feather';
type Props = {
  posts: any[];
};

export const getStaticProps: GetStaticProps = async () => {
  const courses = await getPosts({
    mode: 'ForStaticPaths',
    categoryId: CATEGORIES.Product,
    groupId: GROUPS.Main,
    includeBody: false,
  });

  return {
    props: {
      posts: courses,
    },
    revalidate: URLS.validate,
  };
};

const MainBanner = ({ posts }: Props) => {
  // console.log(posts);

  return (
    <>
      <div className='agency-about-area'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='agency-about-img'>
                <img src='/images/agency-image/agency-about-img.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='agency-about-content'>
                <h2>Thiết Kế Và Xây Dựng Ứng Dụng Web</h2>
                <div className='bar'></div>
                <p>Hơn 15 năm kinh nghiệm trong lĩnh vực thiết kế, phát triển các ứng dụng Web, Softech sẽ mang đến cho khách hàng các giải pháp ứng dụng trên Web đảm bảo chất lượng, tiến độ và giá cả hợp lý.</p>
                <p>Được xây dựng trên nền tảng của giải pháp Web Portal và đội ngũ thiết kế, phát triển giàu kinh nghiệm, Softech sẽ cung cấp cho khách hàng các giải pháp ứng dụng Web một cách nhanh chóng và chất lượng.</p>
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
        <div className='shape6 rotateme'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape7'>
          <img src='/images/shape4.svg' alt='shape' />
        </div>
        <div className='shape8 rotateme'>
          <img src='/images/shape2.svg' alt='shape' />
        </div>
        <div className='shape10'>
          <img src='/images/agency-image/agency-shape2.png' alt='image' />
        </div>
      </div>
    </>
  );
};
const OurFeatures = () => {
  return (
    <>
      <div className='solutions-area ptb-80'>
        <div className='container'>
          <div className='section-title st-fs-28'>
            <h2>Các Công Nghệ Sử Dụng</h2>
            <div className='bar'></div>
          </div>

          <div className='row'>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='solutions-box'>
                <div className='icon'>
                  <i className='bx bx-landscape'></i>
                  <img src='/images/agency-image/agency-icon-bg.png' alt='image' />
                </div>

                <h3>
                  <Link href='#'> Công Nghệ</Link>
                </h3>
                <p>.Net, Java, PHP</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='solutions-box'>
                <div className='icon'>
                  <i className='bx bx-bar-chart-alt'></i>
                  <img src='/images/agency-image/agency-icon-bg.png' alt='image' />
                </div>

                <h3>
                  <Link href='#'>Ngôn Ngữ Lập Trình</Link>
                </h3>
                <p> C#, Java, PHP</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='solutions-box'>
                <div className='icon'>
                  <i className='bx bx-devices'></i>
                  <img src='/images/agency-image/agency-icon-bg.png' alt='image' />
                </div>

                <h3>
                  <Link href='#'>Hệ Quản Trị Cơ Sở Dữ Liệu</Link>
                </h3>
                <p> SQL Server, Oracle, MySQL</p>
              </div>
            </div>

            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='solutions-box'>
                <div className='icon'>
                  <i className='bx bx-chalkboard'></i>
                  <img src='/images/agency-image/agency-icon-bg.png' alt='image' />
                </div>

                <h3>
                  <Link href='#'>Framework</Link>
                </h3>
                <p>Softech Portal, LifeRay, .Net Nuke, Joomla, Drupal</p>
              </div>
            </div>
          </div>
        </div>

        <div className='shape9 slow mobile-dnone'>
          <img src='/images/agency-image/agency-shape1.png' className='animate__animated animate__fadeInLeft animate__delay-0.7s' alt='image' />
        </div>
      </div>
    </>
  );
};
const SingleFeatures = () => {
  return (
    <>
      {/* Phát Triển Phần Mềm */}

      <div className='services-area ptb-80'>
        <div className='container'>
          <div className='row h-100 justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 services-left-image'>
              <img src='/images/services-left-image/big-monitor.png' className='animate__animated animate__fadeInDown animate__delay-0.2s' alt='big-monitor' />

              <img src='/images/services-left-image/creative.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='creative' />

              <img src='/images/services-left-image/developer.png' className='animate__animated animate__fadeInLeft animate__delay-0.2s' alt='developer' />

              <img src='/images/services-left-image/flower-top.png' className='animate__animated animate__fadeInLeft animate__delay-0.2s' data-wow-delay='0.6s' alt='flower-top' />

              <img src='/images/services-left-image/small-monitor.png' className='animate__animated animate__bounceIn animate__delay-0.2s' alt='small-monitor' />

              <img src='/images/services-left-image/small-top.png' className='animate__animated animate__fadeInDown animate__delay-0.2s' alt='small-top' />

              <img src='/images/services-left-image/table.png' className='animate__animated animate__zoomIn animate__delay-0.2s' alt='table' />

              <img src='/images/services-left-image/target.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='target' />

              <img src='/images/services-left-image/cercle-shape.png' className='bg-image rotateme' alt='shape' />

              <img src='/images/services-left-image/service-left-main-pic.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='main-pic' />
            </div>

            <div className='col-lg-6 col-md-12 services-content'>
              <div className='section-title'>
                <h2>Phát Triển Phần Mềm</h2>
                <div className='bar'></div>
              </div>

              <div className='row'>
                <Link href='/dich-vu/thiet-ke-va-xay-dung-ung-dung-web' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Layout /> Thiết kế và xây dựng web
                  </div>
                </Link>
                <Link href='/dich-vu/ung-dung-quan-tri-doanh-nghiep' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.TrendingUp /> Quản trị doanh nghiệp
                  </div>
                </Link>
                <Link href='/dich-vu/giai-phap-chinh-phu-dien-tu' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Smartphone /> Giải pháp chính phủ điện tử
                  </div>
                </Link>
                <Link href='/dich-vu/tich-hop-he-thong' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Code /> Tích hợp hệ thống
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Đào Tạo Nguồn Nhân Lực */}
      <div className='services-area ptb-80 bg-f7fafd'>
        <div className='container'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 col-md-12 services-content'>
              <div className='section-title'>
                <h2>Đào Tạo Nguồn Nhân Lực</h2>
                <div className='bar'></div>
              </div>

              <div className='row'>
                <Link href='/dich-vu/gioi-thieu-trung-tam-dao-tao-lap-trinh-vien-quoc-te-softech-aptech' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Layout /> Lập trình viên quốc tế
                  </div>
                </Link>
                <Link href='/dich-vu/gioi-thieu-trung-tam-my-thuat-da-phuong-tien-softech-arena' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.TrendingUp /> Mỹ thuật đa phương tiện
                  </div>
                </Link>
                <Link href='/dich-vu/gioi-thieu-ve-chuong-trinh-dao-tao-lap-trinh-tren-di-dong' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Smartphone /> Lập trình trên di động
                  </div>
                </Link>
                <Link href='/dich-vu/gioi-thieu-trung-tam-dao-tao-ngoai-ngu-tin-hoc-softech-hoc-vien-anh-ngu-ames-' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Code /> Đào tạo ngoại ngữ
                  </div>
                </Link>
                <Link href='/dich-vu/chuong-trinh-dao-tao-theo-yeu-cau' className='col-lg-6 col-md-6'>
                  <div className='box'>
                    <Icon.Code /> Đào tạo theo yêu cầu
                  </div>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-md-12 services-right-image'>
              <img src='/images/services-right-image/book-self.png' className='animate__animated animate__fadeInDown animate__delay-0.2s' alt='book-self' />

              <img src='/images/services-right-image/box.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' data-wow-delay='0.6s' alt='box' />

              <img src='/images/services-right-image/chair.png' className='animate__animated animate__fadeInLeft animate__delay-0.2s' alt='chair' />

              <img src='/images/services-right-image/cloud.png' className='animate__animated animate__zoomIn animate__delay-0.2s' alt='cloud' />

              <img src='/images/services-right-image/cup.png' className='animate__animated animate__bounceIn animate__delay-0.2s' alt='cup' />

              <img src='/images/services-right-image/flower-top.png' className='animate__animated animate__fadeInDown animate__delay-0.2s' alt='flower' />

              <img src='/images/services-right-image/head-phone.png' className='animate__animated animate__zoomIn animate__delay-0.2s' alt='head-phone' />

              <img src='/images/services-right-image/monitor.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='monitor' />

              <img src='/images/services-right-image/mug.png' className='animate__animated animate__rotateIn animate__delay-0.2s' alt='mug' />

              <img src='/images/services-right-image/table.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='table' />

              <img src='/images/services-right-image/tissue.png' className='animate__animated animate__zoomIn animate__delay-0.2s' alt='tissue' />

              <img src='/images/services-right-image/water-bottle.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='water-bottle' />

              <img src='/images/services-right-image/wifi.png' className='animate__animated animate__fadeInLeft animate__delay-0.2s' data-wow-delay='0.6s' alt='wifi' />

              <img src='/images/services-right-image/cercle-shape.png' className='bg-image rotateme' alt='shape' />

              <img src='/images/services-right-image/service-right-main-pic.png' className='animate__animated animate__fadeInUp animate__delay-0.2s' alt='main-pic' />
            </div>
          </div>
        </div>
      </div>

      <div className='services-area-two pt-80 pb-50 bg-f7fafd'>
        <div className='container'>
          <div className='section-title'>
            <h2>Các Dịch Vụ Khác</h2>
            <div className='bar'></div>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-ml-services-box'>
                <div className='image'>
                  <img src='/images/services-image/service-image3.png' alt='image' />
                </div>
                <h3>
                  <Link href='/dich-vu/gia-cong-phan-mem'>Gia Công Phần Mềm</Link>
                </h3>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-ml-services-box'>
                <div className='image'>
                  <img src='/images/services-image/service-image1.png' alt='image' />
                </div>
                <h3>
                  <Link href='/dich-vu/nang-luc-va-chuyen-mon'>Năng Lực Và Chuyên Môn</Link>
                </h3>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='single-ml-services-box'>
                <div className='image'>
                  <img src='/images/services-image/service-image2.png' alt='image' />
                </div>
                <h3>
                  <Link href='/dich-vu/dam-bao-chat-luong'>Đảm Bảo Chất Lượng</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default function Services({ posts }: Props) {
  return (
    <>
      <MainBanner posts={...posts} />
      <OurFeatures />
      <SingleFeatures />
    </>
  );
}
