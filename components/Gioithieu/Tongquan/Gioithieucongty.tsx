import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="repair-main-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="repair-banner-content">
                                <h4>GIỚI THIỆU CÔNG TY</h4>
                                <p>Công ty cổ phần Softech, tiền thân là Trung tâm Công nghệ Phần mềm Đà Nẵng, được thành lập ngày 08/11/2000. Trải qua hơn 15 năm hoạt động, Công ty cổ phần Softech đã trở thành đơn vị tiên phong trong lĩnh vực sản xuất, gia công phần mềm, đào tạo và phát triển nguồn nhân lực, cung cấp các giải pháp và dịch vụ công nghệ thông tin ở khu vực miền Trung và cả nước. Với lợi thế về địa lý như nằm trong vùng kinh tế trọng điểm miền Trung - cửa ngõ quan trọng của Đông Nam Á nối các nước Lào, Campuchia, Thái Lan và Myanma với các nước Đông Bắc Á thông qua hành lang kinh tế Đông Tây, Softech thực sự có nhiều thuận lợi trong việc phát triển và hợp tác với các nhà đầu tư trong và ngoài nước.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-banner-image">
                                <img 
                                    src='/images/repair-banner-image/repair-banner-img.png' 
                                    alt="image" 
                                />
    
                                <img 
                                    src='/images/repair-banner-image/repair-shape1.png' 
                                    className="animate__animated animate__zoomIn animate__delay-0.6s" 
                                    alt="image" 
                                /> 
                                
                                <img 
                                    src='/images/repair-banner-image/repair-shape2.png' 
                                    className="animate__animated animate__fadeInLeft animate__delay-0.6s" 
                                    alt="image" 
                                />
                        
                                <img 
                                    src='/images/repair-banner-image/repair-shape-circle.png' 
                                    className="rotateme" 
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainBanner;
