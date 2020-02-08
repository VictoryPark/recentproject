/* icons */
import FbIcon from '../../../../assets/icon/facebook_col.svg';
import ytIcon from '../../../../assets/icon/youtube_col.svg';
import twIcon from '../../../../assets/icon/twitter_col.svg';
import igIcon from '../../../../assets/icon/instagram_col.svg';

const PAGES = {
  footerTop: {
    social: [
      {
        title: 'facebook',
        icon: FbIcon,
        href: 'http://facebook.com',
      },
      {
        title: 'youtube',
        icon: ytIcon,
        href: 'http://youtube.com',
      },
      {
        title: 'twitter',
        icon: twIcon,
        href: 'http://twitter.com',
      },
      {
        title: 'instagram',
        icon: igIcon,
        href: 'http://instagram.com',
      },
    ],
    menuList: [
      {
        title: 'Recent를 처음사용하십니까?',
        menu: [
          {
            title: 'Recent여야 하는 이유',
            type: 'internal',
            href: '/',
          },
          {
            title: '모든 제품 둘러보기',
            type: 'internal',
            href: '/',
          },
          {
            title: '클라우드 컴퓨팅이란',
            type: 'internal',
            href: '/',
          },
        ],
      },
      {
        title: 'Recent 정보',
        menu: [
          {
            title: '최고의 CRM 소프트웨어',
            type: 'internal',
            href: '/',
          },
          {
            title: '제품 가격',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Blog',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'Careers',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Trust',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'Recent.co.kr',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'Sustainability',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Investors',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'GDPR Readiness',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Legal',
            type: 'external',
            href: 'http://www.naver.com',
          },
        ],
      },
      {
        title: '인기 링크',
        menu: [
          {
            title: 'New Release Features',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Business App Store',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'Recent',
            type: 'external',
            href: 'http://www.naver.com',
          },
          {
            title: 'CRM 소프트웨어',
            type: 'internal',
            href: '/',
          },
          {
            title: 'CRM Software',
            type: 'interal',
            href: '/',
          },
          {
            title: 'Recent LIVE',
            type: 'internal',
            href: '/',
          },
          {
            title: 'Recent for Startups',
            type: 'internal',
            href: '/',
          },
        ],
      },
    ],
  },
  footerBottom: {
    menu: [
      {
        title: 'All rights reserved.',
        type: 'interal',
        href: '/company/legal/intellectual',
      },
      {
        title: '법적 고지',
        type: 'internal',
        href: '/company/legal',
      },
      {
        title: '서비스 약관',
        type: 'interal',
        href: '/company/legal/service',
      },
      {
        title: '개인 정보',
        type: 'interal',
        href: '/company/privacy',
      },
      {
        title: '책임 공개',
        type: 'interal',
        href: '/company/disclosure',
      },
      {
        title: '신뢰',
        type: 'external',
        href: '#',
      },
      {
        title: '문의',
        type: 'interal',
        href: '/form/contactme',
      },
      {
        title: 'Cookie Preferences',
        type: 'internal',
        href: '#',
      },
    ],
  },
};

export default PAGES;
