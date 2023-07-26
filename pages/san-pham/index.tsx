import React from 'react';
import Navbar from '@/components/_App/Navbar';

import Link from 'next/link';
import * as Icon from 'react-feather';
import CATEGORIES from '@/constants/CATEGORIES';
import { getPostsByCategories } from '@/services/getPosts';

export const getStaticProps = async () => {
  const HRS = await getPostsByCategories(CATEGORIES.HRS.toString());
  const LT = await getPostsByCategories(CATEGORIES.LT.toString());
  const SXXK = await getPostsByCategories(CATEGORIES.SXXK.toString());
  const GC = await getPostsByCategories(CATEGORIES.GC.toString());
  const KDDT = await getPostsByCategories(CATEGORIES.KDDT.toString());
  return {
    props: {
      HRS: HRS[5],
      LT: LT[5],
      SXXK: SXXK[5],
      GC: GC[5],
      KDDT: KDDT[5],
    },
  };
};
type Props = {
  HRS: any;
  LT: any;
  SXXK: any;
  GC: any;
  KDDT: any;
};

const Services3 = ({ HRS, LT, SXXK, GC, KDDT }: Props) => {
  // console.log(LT)

  return (
    <>
      <Navbar />

      <div className='solutions-area ptb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/thumbThuongMaiDienTu.png' alt='image' />
                </div>
                <h3>
                  <Link href='/san-pham/thuong-mai-dien-tu'>Hệ thống thương mại điện tử Softech</Link>
                </h3>
                <p>Softech eCommerce System - Giải pháp các tính năng toàn diện được áp dung cho tất cả các loại hình doanh nghiệp trực tuyến.</p>

                <Link href='/san-pham/thuong-mai-dien-tu' className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/1_HRS-ENTERPRISE.png' alt='image' />
                </div>
                <h3>
                  <Link href={`san-pham/chi-tiet/${HRS.friendlyUrl}`}>Sản Phẩm Softech - Hrs Enterprise</Link>
                </h3>
                <p>Phần mềm SOFTECH-HRS Enterprise là Hệ thống Quản lý nhân sự - Chấm công - Tiền lương chuyên nghiệp, dành cho các doanh nghiệp quy mô sản xuất lớn, có số lượng lao động hàng ngàn người trở lên.</p>

                <Link href={`san-pham/chi-tiet/${HRS.friendlyUrl}`} className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/luutru.png' alt='image' />
                </div>
                <h3>
                  <Link href={`san-pham/chi-tiet/${LT.friendlyUrl}`}>Lưu Trú</Link>
                </h3>
                <p>Hệ thống khai báo lưu trú trực tuyến là hệ thống phục vụ cho việc quản lý khai báo khách lưu trú.</p>

                <Link href={`san-pham/chi-tiet/${LT.friendlyUrl}`} className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/ecs.png' alt='image' />
                </div>
                <h3>
                  <Link href={`san-pham/chi-tiet/${SXXK.friendlyUrl}`}>Sản Phẩm Softech- ECS - SXXK</Link>
                </h3>
                <p>
                  Softech-ECS là phần mềm giúp doanh nghiệp thực hiện quy trình thủ tục hải quan điện tử. Phần mềm có đầy đủ các phân hệ nghiệp vụ xuất nhập khẩu, theo chuẩn mực của Tổng cục Hải quan Việt Nam và được cập nhật thường xuyên
                  các qui định mới nhất.
                </p>

                <Link href={`san-pham/chi-tiet/${SXXK.friendlyUrl}`} className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/ECS-GC.png' alt='image' />
                </div>
                <h3>
                  <Link href={`san-pham/chi-tiet/${GC.friendlyUrl}`}>Sản Phẩm Softech - ECS - GC</Link>
                </h3>
                <p>
                  Softech-ECS là phần mềm giúp doanh nghiệp thực hiện quy trình thủ tục hải quan điện tử. Phần mềm có đầy đủ các phân hệ nghiệp vụ xuất nhập khẩu, theo chuẩn mực của Tổng cục Hải quan Việt Nam và được cập nhật thường xuyên
                  các qui định mới nhất.
                </p>

                <Link href={`san-pham/chi-tiet/${GC.friendlyUrl}`} className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-solutions-box'>
                <div className='icon'>
                  <img src='https://office-softech.cdn.vccloud.vn/Modules/ASPNETVN.PORTAL.Modules.CMS/Uploads/2a56b2cf-f9fb-4e47-80b7-ab048b91d355/2016-09-20.png' alt='image' />
                </div>
                <h3>
                  <Link href={`san-pham/chi-tiet/${KDDT.friendlyUrl}`}>Sản Phẩm Softech - ECS - KDĐT</Link>
                </h3>
                <p>
                  Softech-ECS 2016 là phần mềm giúp doanh nghiệp thực hiện quy trình thủ tục hải quan điện tử. Phần mềm có đầy đủ các phân hệ nghiệp vụ xuất nhập khẩu, theo chuẩn mực của Tổng cục Hải quan Việt Nam và được cập nhật thường
                  xuyên các qui định mới nhất.
                </p>

                <Link href={`san-pham/chi-tiet/${KDDT.friendlyUrl}`} className='learn-more-btn'>
                  <Icon.PlusCircle /> Xem chi tiết
                </Link>
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

export default Services3;
