import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <>
            <div className="about-area pt-0 ptb-80">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-img">
                                <img src="/images/about4.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="ml-about-content">
                                <h4>CÁC LĨNH VỰC HOẠT ĐỘNG</h4>
                                <div className="bar"></div>
                                <p>Đào tạo và phát triển nguồn nhân lực CNTT</p>
                                <p>Tổ chức hợp tác sản xuất và gia công sản phẩm phần mềm</p>
                                <p>Thực hiện các liên kết trong nước và quốc tế trong lĩnh vực CNTT</p>
                                <p>Thực hiện tích hợp các hệ thống về CNTT</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default AboutUsContent;