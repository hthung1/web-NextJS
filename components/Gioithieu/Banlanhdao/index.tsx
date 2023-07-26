import React from 'react';
import * as Icon from 'react-feather'; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const NewsletterStyleTwo = () => {
    return (
        <>
            <div className="feedback-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h4>HỘI ĐỒNG QUẢN TRỊ:</h4>
                        <div className="bar"></div>

                    </div>

                    <div className="testimonials-slides-box">
                        <Swiper
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 6000,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="testimonials-slides"
                        >
                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img
                                                src="/images/client-image/client1.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>Bà Hà Ngọc Anh </h3>
                                            <span>Chủ tịch HĐQT</span>
                                        </div>
                                    </div>

                                    <p>Trình độ chuyên môn: Tốt nghiệp Đại học Luật Hà Nội chuyên ngành Luật Quốc tế năm 1995. Năm 2003: Thạc sĩ Chính sách quốc tế Đại học UBC - Canada. Năm 2015: BMA Đại học Hawaii - Hoa Kỳ</p>
                                    <p> Kinh nghiệm công tác: Có 20 năm kinh nghiệm xúc tiến thương mại Mỹ-Việt Nam
                                    </p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img
                                                src="/images/client-image/client2.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>Ông Nguyễn Mạnh Hào</h3>
                                            <span>Thành viên HĐQT -Tổng giám đốc</span>
                                        </div>
                                    </div>

                                    <p>Trình độ chuyên môn: Tốt nghiệp Đại học Kinh tế Quốc dân – Hà Nội chuyên ngành Tài chính - Ngân hàng năm 1995. Năm 2003: Thạc sĩkhoa học về quản trị kinh doanh - chuyên ngành tài chính tại Đại học UBC Canada.</p>
                                    <p> Kinh nghiệm công tác: Có 20 năm kinh nghiệm trong các lĩnh vực IT, giáo dục.</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="single-feedback-item">
                                    <div className="client-info align-items-center">
                                        <div className="image">
                                            <img
                                                src="/images/client-image/client3.jpg"
                                                alt="image"
                                            />
                                        </div>

                                        <div className="title">
                                            <h3>Ngô Thanh Tùng</h3>
                                            <span>Thành viên HĐQT</span>
                                        </div>
                                    </div>

                                    <p>Trình độ chuyên môn: Cử nhân Công nghệ thông tin.</p>
                                    <p>Kinh nghiệm công tác: Có trên 15 năm kinh nghiệm trong lĩnh vực CNTT và truyền thông.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="/images/shape5.png" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>

            <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h4>BAN ĐIỀU HÀNH</h4>
                        <div className="bar"></div>

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src='/images/team-image/team1.jpg' alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Ông Nguyễn Mạnh Hào </h3>
                                        <span>Thành viên HĐQT -Tổng giám đốc</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.gitlab.com/" target="_blank">
                                                <Icon.Gitlab />
                                            </a>
                                        </li>
                                    </ul>

                                    <p>Trình độ chuyên môn: Tốt nghiệp Đại học Kinh tế Quốc dân – Hà Nội chuyên ngành Tài chính - Ngân hàng năm 1995. Năm 2003: Thạc sĩkhoa học về quản trị kinh doanh - chuyên ngành tài chính tại Đại học UBC Canada.</p>
                                    <p> Kinh nghiệm công tác: Có 20 năm kinh nghiệm trong các lĩnh vực IT, giáo dục.</p>


                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src='/images/team-image/team2.jpg' alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Ông Ngô Thanh Tùng</h3>
                                        <span> Phó Tổng Giám đốc thường trực</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.gitlab.com/" target="_blank">
                                                <Icon.Gitlab />
                                            </a>
                                        </li>
                                    </ul>

                                    <p>Trình độ chuyên môn: Cử nhân Công nghệ thông tin.</p>
                                    <p>Kinh nghiệm công tác: Có trên 15 năm kinh nghiệm trong lĩnh vực CNTT và truyền thông.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src='/images/team-image/team3.jpg' alt="image" />
                                </div>

                                <div className="team-content">
                                    <div className="team-info">
                                        <h3>Bà Lê Mai Hương</h3>
                                        <span>Kế toán trưởng</span>
                                    </div>

                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <Icon.Facebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <Icon.Twitter />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <Icon.Linkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.gitlab.com/" target="_blank">
                                                <Icon.Gitlab />
                                            </a>
                                        </li>
                                    </ul>

                                    <p>Trình độ chuyên môn: Cử nhân Kinh tế chuyên ngành Tài chính kế toán.</p>
                                    <p>Kinh nghiệm công tác: Có 15 năm kinh nghiệm làm việc trong lĩnh vực tài chính kế toán và có 7 kinh nghiệm làm kế toán trưởng.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}

export default NewsletterStyleTwo;  