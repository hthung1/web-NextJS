import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Icon from 'react-feather';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState('');
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // const cart = useSelector((state: any) => state.cart);
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('header');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId?.classList.add('is-sticky');
      } else {
        elementId?.classList.remove('is-sticky');
      }
    });
  });

  const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
  const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <header id='header' className='headroom'>
        <div className='startp-nav'>
          <div className='container'>
            <nav className='navbar navbar-expand-md navbar-light'>
              <Link href='/' className='navbar-brand'>
                <img src='/images/logo.png' alt='logo' />
              </Link>

              <button onClick={toggleNavbar} className={classTwo} type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='icon-bar top-bar'></span>
                <span className='icon-bar middle-bar'></span>
                <span className='icon-bar bottom-bar'></span>
              </button>

              <div className={classOne} id='navbarSupportedContent'>
                <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                    <Link href='/' onClick={toggleNavbar} className={`nav-link ${currentPath == '/' && 'active'}`}>
                      Trang chủ
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/gioi-thieu' onClick={toggleNavbar} className={`nav-link ${currentPath == '/gioi-thieu' && 'active'}`}>
                      Giới thiệu
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/san-pham' onClick={toggleNavbar} className={`nav-link ${currentPath == '/san-pham' && 'active'}`}>
                      Sản phẩm
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/dich-vu' onClick={toggleNavbar} className={`nav-link ${currentPath == '/dich-vu' && 'active'}`}>
                      Dịch vụ
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/tin-tuc-su-kien' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tin-tuc-su-kien' && 'active'}`}>
                      Tin tức & Sự kiện
                    </Link>
                  </li>
                  {/* <li className='nav-item'>
                    <Link href='/tin-tuc' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tin-tuc' || currentPath == '/blog-2/' ? 'active' : ''}`}>
                      Tin tức <Icon.ChevronDown />
                    </Link>

                    <ul className='dropdown-menu'>
                      <li className='nav-item'>
                        <Link href='/tin-tuc' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tin-tuc' && 'active'}`}>
                          Tin tức
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/su-kien' onClick={toggleNavbar} className={`nav-link ${currentPath == '/su-kien' && 'active'}`}>
                          Sự kiện
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li className='nav-item'>
                    <Link href='/quan-he-co-dong/dai-hoi-co-dong' onClick={toggleNavbar} className={`nav-link ${currentPath == '/quan-he-co-dong/dai-hoi-co-dong' && 'active'}`}>
                      Quan hệ cổ đông
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/tuyen-dung' onClick={toggleNavbar} className={`nav-link ${currentPath == '/tuyen-dung' && 'active'}`}>
                      Tuyển dụng
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link href='/lien-he' onClick={toggleNavbar} className={`nav-link ${currentPath == '/lien-he' && 'active'}`}>
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              {/* <div className='others-option'>
                <Link href='/cart/' className='cart-wrapper-btn'>
                  <Icon.ShoppingCart />
                  <span>{cart.length}</span>
                </Link>

                <Link href='/contact/' className='btn btn-light'>
                  Support
                </Link>

                <Link href='/login/' className='btn btn-primary'>
                  Login
                </Link>
              </div> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
