import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Newsletter = () => {
    return (
        <>
           <div className="separate"></div>

<div className="features-details-area ptb-80">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
        <h4>NHÂN TỐ THÀNH CÔNG</h4>
        <div className="features-details-desc">

            <div className="features-details-accordion">
                <Accordion preExpanded={['a']}>
                    <AccordionItem uuid="a">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    Thỏa mãn khách hàng
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Thông qua hệ thống quản lý chất lượng ISO 9001:2008 và Hệ thống đảm bảo chất lượng quy trình phát triển sản phẩm phần mềm CMMi cấp 3, Softech cam kết đem lại cho khách hàng những sản phẩm – dịch vụ với chất lượng cao nhất, đảm bảo thỏa mãn tất cả những yêu cầu của khách hàng.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    Nguồn lực
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Với tâm niệm nguồn nhân lực là tài sản chiến lược đối với sự phát triển của tổ chức, Softech luôn đầu tư thích đáng cho quá trình phát triển nguồn nhân lực. Hiện nay, Softech sở hữu đội ngũ nhân viên trẻ, năng động, trí tuệ và tràn đầy nhiệt huyết. Bên cạnh đó, Softech còn sở hữu hệ thống cơ sở hạ tầng CNTT và truyền thông hiện đại, được trang bị theo tiêu chuẩn quốc tế với độ ổn định, an toàn cao. Tất cả những yếu tố trên đem lại cho Softech một môi trường hoạt động tối ưu với nhiều lợi thế cạnh tranh.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <span>
                                    Sản phẩm và dịch vụ
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <ul className="features-details-list">
                                <li>Dịch vụ đào tạo với chất lượng tốt nhất, theo chuẩn quốc tế, giáo trình tiếng Anh và luôn hướng vào ngành công nghiệp để tạo ra việc làm tốt nhất cho học viên.</li>
                                <li>Softech cung cấp những phần mềm, hệ thống mang tính chiến lược cao phù hợp với lộ trình phát triển các cơ quan chính phủ và doanh nghiệp.</li>
                                <li>Với nền tảng kinh nghiệm gia công cho thị trường Nhật và Mỹ sẽ giúp Softech dễ dàng tiếp cận thêm các thị trường mới</li>
                                <li>Cung ứng dịch vụ CNTT, bảo trì và hỗ trợ kỹ thuật chuyên nghiệp.</li>
                            </ul>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>


            </div>
        </div>
    </div>

    <div className="col-lg-6 features-details-image">
        <img
            src="/images/features-details-image/feature2.png"
            className="animate__animated animate__fadeInUp"
            alt="image"
        />
    </div>
</div>
</div>
</div>
        </>
    );
}

export default Newsletter;