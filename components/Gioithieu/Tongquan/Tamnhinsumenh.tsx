import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <>
           <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img
                                src="/images/features-details-image/feature1.png"
                                className="animate__animated animate__fadeInUp"
                                alt="image"
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h4>TẦM NHÌN-SỨ MỆNH</h4>


                                <ul className="features-details-list">
                                    <li>Xây dựng Softech thành một trong những công ty phần mềm hàng đầu tại Việt Nam.</li>
                                    <li>Đảm bảo đời sống của người lao động, xây dựng môi trường làm việc thân thiện và phát huy tối đa năng lực của từng nhân viên.</li>
                                    <li>Tối đa hóa lợi nhuận trên cơ sở sử dụng một cách hợp lý nguồn tài nguyên của công ty nhằm đem lại lợi ích tối đa cho các nhà đầu tư.</li>
                                    <li>Softech là hạt nhân thúc đẩy sự phát triển nền công nghiệp phần mềm của Đà Nẵng và khu vực miền Trung.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
        </>
    )
}

export default FunFactsArea;