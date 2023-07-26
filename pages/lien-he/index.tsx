import * as Icon from 'react-feather';
import Link from 'next/link';
import PageBanner from '@/components/Banner/PageBanner';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import { Pagination } from 'swiper';
import ContactForm from '@/components/Contact/ContactForm';
const ContactInfo = () => {
  return (
    <>
      <div className='contact-info-area ptb-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.Mail />
                </div>
                <h3>Địa chỉ email</h3>
                <p>
                  <a href='mailto:admin@startp.com'>tuyensinh@softech.vn</a>
                </p>
                <p>
                  <a href='mailto:info@startp.com'>info@startp.com</a>
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.MapPin />
                </div>
                <h3>Địa chỉ</h3>
                <p>Tòa nhà VNPT, 38 Yên Bái, Q. Hải Châu, TP. Đà Nẵng</p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='contact-info-box'>
                <div className='icon'>
                  <Icon.Phone />
                </div>
                <h3>Gọi đến</h3>
                <p>
                  <a href='tel:+1234567890'>0511.3779779</a>
                </p>
                <p>
                  <a href='tel:+2414524526'>+241 452 4526</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// ===================================ContactForm====================================//
<ContactForm />;
// ===================================GoogleMap=====================================//
const GoogleMap = () => {
  return (
    <>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.924562152043!2d108.22001007479868!3d16.069403984610112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219a95db33d61%3A0x4aa50947449bd8fc!2zMzggWcOqbiBCw6Fp!5e0!3m2!1svi!2s!4v1689063841897!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
        width='100%'
        height='450'
        allowFullScreen={true}
        loading='lazy'
      ></iframe>
    </>
  );
};
const Contact = () => {
  return (
    <>
      <PageBanner pageTitle='Liên hệ' />
      <ContactInfo />
      <GoogleMap />
      <ContactForm />
    </>
  );
};

export default Contact;
