import React from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackStyleFour = () => {
    return (
        <>
            <div className="ml-feedback-area ptb-400">
                <div className="container">
                    <div className="section-title">
                        <h4>Cấc thành tựu đã đạt được </h4>
                        <div className="bar"></div>
                        
                    </div>

                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-feedback-slides"
                    >
                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                       
                                </div>         
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho giải pháp đào tạo CNTT tiêu biểu & ưu việt năm 2016 (Hệ thống đào tạo Softech Aptech).</p>
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho giải pháp đào tạo CNTT tiêu biểu & ưu việt năm 2015 (Hệ thống đào tạo Softech Aptech).</p>
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm tiêu biểu năm 2012 (Phần mềm Khai báo Hải quan điện tử Softech – ECS).</p>
                                    <p><Icon.Check />Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì đã có thành tích xuất sắc tiêu biểu trong lĩnh vực bưu chính viễn thông và Công nghệ thông tin năm 2010 .</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                       
                                </div>         
                                    <p><Icon.Check />Huân chương lao động Hạng Ba do Chủ tịch nước trao tặng theo Quyết định số QĐ 433/2006/QĐ-CT ngày 29/3/2006.</p>
                                    <p><Icon.Check />Bằng khen của Thủ tướng Chính phủ vì đã có nhiều thành tích trong công tác từ năm 2002 dến năm 2004 góp phần vào sự nghiệp xây dựng Chủ nghĩa xã hội và bảo vệ Tổ quốc.</p>
                                    <p><Icon.Check />Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích tốt trong xây dựng quy trình quản lý chất lượng phần mềm.</p>
                                    <p><Icon.Check />Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích xuất sắc đóng góp cho sự nghiệp phát triển ngành công nghiệp phần mềm Việt Nam giai đoạn từ năm 2002 đến 2005.</p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                       
                                </div>         
                                    <p><Icon.Check />Bằng khen của Bộ Bưu chính Viễn thông do đã có thành tích xuất sắc trong hoạt động sản xuất, kinh doanh, phát triển công nghiệp phần mềm năm 2005.</p>
                                    <p><Icon.Check />Bằng khen của Bộ Lao động-Thương binh-Xã hội về Website đào tạo trực tuyến tại Hội thi Thiết bị tay nghề từ làm toàn quốc lần thứ 2 năm 2005.</p>
                                    <p><Icon.Check />Bằng khen của Hội Tin học Việt Nam do đã có thành tích xuất sắc trong hoạt động chuyên môn và công tác Hội năm 2004.</p>
                                    {/* <p><Icon.Check />Cờ thi đua xuất sắc của UBND thành phố Đà Nẵng.</p> */}
                                    <p><Icon.Check />Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì đã hoàn thành tốt công tác năm 2002, 2003, 2006.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                       
                                </div>         
                                    <p><Icon.Check />Cờ thi đua xuất sắc của UBND thành phố Đà Nẵng.</p>
                                    <p><Icon.Check />Bằng khen của Chủ tịch UBND thành phố Đà Nẵng vì đã hoàn thành tốt công tác năm 2002, 2003, 2006.</p>
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho doanh nghiệp phần mềm tiêu biểu Việt Nam có tốc độ tăng trưởng tiêu biểu năm 2003, 2005, 2006.</p>
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm triển vọng năm 2005.</p>
                                    <p><Icon.Check />Giải thưởng Sao Khuê do VINASA trao tặng cho sản phẩm phần mềm tiêu biểu năm 2006, năm 2007.</p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="single-ml-feedback-item">
                                <div className="client-info">
                       
                                </div>         
                                    <p><Icon.Check />Huy chương vàng dành cho sản phẩm Website điều hành tại Hội chợ Công nghệ - thiết bị quốc gia năm 2003</p>
                                    <p><Icon.Check />Cờ lưu niệm “Aptech Việt Nam về chất lượng đào tạo năm 2003”.</p>
                                    <p><Icon.Check />Cup “Trung tâm xuất sắc nhất năm 2003 của Aptech, Việt Nam”.</p>
                                    <p><Icon.Check />Cup “Đơn vị đào tạo CNTT hàng đầu” 3 năm liền 2002, 2003, 2004 (Hội Tin học Việt Nam trao tặng cho hệ thống Aptech Việt Nam) (TOP ICT VN 2004 – Aptech Vietnam)</p>
                                    <p><Icon.Check />Huy chương vàng 2004 cho đơn vị đào tạo Công nghệ thông tin do Hội Tin học thành phố Hồ Chí Minh trao tặng.</p>
                                    <p><Icon.Check />Huy chương vàng ICT Việt Nam 2006 cho đơn vị đào tạo CNTT.</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
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

export default FeedbackStyleFour;