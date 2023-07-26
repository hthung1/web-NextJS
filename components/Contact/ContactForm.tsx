import Link from 'next/link';
import React from 'react';

const ContactForm = () => {
  return (
    <>
      <div className='contact-area ptb-80 '>
        <div className='container'>
          <div className='section-title'>
            <h2>Liên hệ với chúng tôi</h2>
            <div className='bar'></div>
            <p>Bất cứ điều gì trong tâm trí của bạn. Chúng tôi rất vui được hỗ trợ bạn!</p>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <img src='/images/contact-img.png' alt='image' />
            </div>

            <div className='col-lg-6 col-md-12'>
              <form>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <input type='text' name='name' placeholder='Họ và tên' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <select aria-label='Default select example' className='form-control'>
                        <option>Chi nhánh</option>
                        <option value='1'>Chi nhánh Đà Nẵng - 38 Đường Yên Bái</option>
                        <option value='2'>Chi nhánh Hà Nội - Tầng 6 - Tòa nhà VMT, Duy Tân, Quận Cầu Giấy</option>
                        <option value='3'>Chi nhánh Cần Thơ - 118 Đường 3/2, P. Xuân Khánh, Q. Ninh Kiều</option>
                        <option value='4'>Chi nhánh Huế - Lô 5A, Đường Phong Châu (phía sau Big C), P. Phú Hội</option>
                      </select>
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <input type='text' name='email' placeholder='Địa chỉ email' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='number' placeholder='Số điện thoại' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input type='text' name='subject' placeholder='Dự án của bạn' className='form-control' required />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <textarea name='text' cols={30} rows={5} placeholder='Nội dung tin nhắn' className='form-control' required />
                    </div>

                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                      <label className='form-check-label' htmlFor='flexCheckDefault'>
                        Bằng cách kiểm tra điều này, bạn đồng ý với chúng tôi <Link href='/lien-he/chi-tiet-dieukhoan'>Điều khoản </Link> và <Link href='/lien-he/chi-tiet-dieukhoan'>Chính sách bảo mật </Link>.
                      </label>
                    </div>
                  </div>

                  <div className='col-lg-12 col-sm-12'>
                    <button type='submit' className='btn btn-primary'>
                      Gửi
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
