import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Team from '@/components/Common/Team';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Partner from '@/components/Common/Partner';
import Link from 'next/link';
import Gioithieucongty from '@/components/Gioithieu/Tongquan/Gioithieucongty';
import Caclinhvuc from '@/components/Gioithieu/Tongquan/Caclinhvuc';
import Tamnhinsumenh from '@/components/Gioithieu/Tongquan/Tamnhinsumenh';
import Nhantothanhcong from '@/components/Gioithieu/Tongquan/Nhantothanhcong';
import Lichsu from '@/components/Gioithieu/Lichsu';
import Banlanhdao from '@/components/Gioithieu/Banlanhdao';
import Thanhtuu from '@/components/Gioithieu/Thanhtuu';






const PrivacyPolicy = () => {
    return (
        <>
     
            <Navbar />
            <PageBanner pageTitle="TỔNG QUAN" />
            <Gioithieucongty />
            <Caclinhvuc />
            <Tamnhinsumenh />
            <Nhantothanhcong />

                    
            <Navbar />
            <PageBanner pageTitle="LỊCH SỬ HÌNH THÀNH" />
            <Lichsu />


            <Navbar />
            <PageBanner pageTitle="BAN LÃNH ĐẠO" />
            <Banlanhdao />


            <Navbar />
            <PageBanner pageTitle="CƠ CẤU TỔ CHỨC" />

            <div className='blog-area pt-80 pb-50'>
                <div className='container'>
                    <div className='section-title'>
                        <img src="/images/cocau.png" alt='image' />
                    </div>
                </div>
            </div>


            <Navbar />
            <PageBanner pageTitle="THÀNH TỰU NỔI BẬT" />
            <Thanhtuu />




            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>



            <PageBanner pageTitle="ĐỐI TÁC CHÍNH" />
            <div className='blog-area pt-80 pb-50'>
                <div className='container'>
                    <div className='section-title'>
                        <img src="/images/doitacchinh.png" alt='image' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default PrivacyPolicy;