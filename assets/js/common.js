(() => {
  const page = document.body?.dataset?.page || '';

  const projectData = {
    'proj-2023-1': {
      cat: '2023 | 조경식재',
      title: '반계리 은행나무 주변 정비',
      summary: '천연기념물 보호를 위한 지반 정비 및 수목 식재 공사',
      details: "<p>원주시의 자랑인 천연기념물 반계리 은행나무의 생육 환경을 개선하고, 관람객들의 편의를 도모하기 위한 공사입니다.</p><ul class='list-disc pl-5 mt-2 space-y-1 text-gray-500'><li>뿌리 보호를 위한 통기성 토양 개량</li><li>주변 보행로 목재 데크 재정비</li><li>미관을 살린 주변 자생 수목 추가 식재</li></ul>",
      images: ['https://andrew78kim-dot.github.io/seorin/Images/exam1.jpg']
    },
    'proj-2023-2': {
      cat: '2023 | 시설물 및 식재',
      title: '강릉 휴게소 조경 공사',
      summary: '고속도로 휴게소 내 수목 식재 및 벤치 시설물 설치',
      details: '<p>장거리 운전자들의 피로를 덜어줄 수 있도록 휴게소 내 자투리 공간을 활용한 미니 정원 및 휴식 시설물 조성 공사입니다.</p><p>유지 관리가 용이한 관목류를 주로 식재하고, 내구성이 강한 친환경 목재 벤치를 시공하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/exam2.jpg']
    },
    'proj-2022-1': {
      cat: '2022 | 수경시설',
      title: '한라대학교 분수대 시공',
      summary: '캠퍼스 미관 개선을 위한 수경 공간 및 분수 시스템 구축',
      details: '<p>대학 캠퍼스 광장에 시각적 청량감을 주는 바닥 분수와 주변 조경을 함께 시공하였습니다.</p><p>수질 관리 자동화 시스템을 도입하여 유지보수의 편의성을 높였으며, 야간 경관을 고려한 수중 조명을 함께 설치했습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/exam9.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/HalaU1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/HalaU2.jpg']
    },
    'proj-2021-1': {
      cat: '2021 | 조경시설물',
      title: '원주 공원 조경 및 데크 시공',
      summary: '시민 휴식 공간 확충을 위한 산책로 데크 및 광장 조성',
      details: '<p>도심 속 공원의 낡은 산책로를 걷기 편한 친환경 합성 목재 데크로 교체 시공하였습니다.</p><p>보행자의 안전을 위해 난간을 튼튼하게 보강하고, 코너 부위에는 쉼터를 구성하여 지역 주민들의 만족도를 크게 높였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/exam6.png']
    },
    'proj-2026-1': {
      cat: '2026 | 유지관리',
      title: '단계천 예초작업',
      summary: '단계천 시민 휴식 공간을 위한 산책로 예초작업',
      details: '<p>단계천 시민 휴식 공간을 위한 산책로 예초작업 및 부산물 처리를 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/예초1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/예초2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/예초3.jpg']
    },
    'proj-2026-2': {
      cat: '2026 | 조경시설물',
      title: '원주시 기업도시 공원 시설물 데크 보수작업',
      summary: '시민 휴식 공간을 위한 공원내 데크 보수작업',
      details: '<p>시민 휴식 공간을 위한 공원내 데크 보수작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/데크1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/데크2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/데크3.jpg']
    },
    'proj-2026-3': {
      cat: '2026 | 유지관리',
      title: '조경 전정작업',
      summary: '행정복지센터 조경전정 작업',
      details: '<p>원주시 행정 복지센터 조경전정 작업 및 부산물 처리를 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/전정3.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/전정1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/전정2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/전정4.jpg']
    },
    'proj-2026-4': {
      cat: '2026 | 유지관리',
      title: '조경 전정작업',
      summary: '문막읍 가로수 은행나무 조경 전정작업',
      details: '<p>원주시 문막읍 가로수 은행나무내 조경 전정작업 및 부산물 처리를 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/은행전정1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/은행전정2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/은행전정3.jpg']
    },
    'proj-2026-5': {
      cat: '2026 | 유지관리',
      title: '약재 살포',
      summary: '병해충을 예방·치료하기 위한 약재 살포 작업',
      details: '<p>원주시 한라대학교내 수목의 병해충을 예방·치료하기 위한 약재 살포 작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/약재살포1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/약재살포2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/약재살포3.jpg']
    },
    'proj-2026-6': {
      cat: '2026 | 유지관리',
      title: '수목정비',
      summary: '강변내 수목정비 작업',
      details: '<p>원주시 하천 강변내 수목 정비작업으로 인한 수목제거 및 부산물 처리 작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/수목정비사업2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/수목정비사업1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/수목정비사업3.jpg']
    },
    'proj-2026-7': {
      cat: '2026 | 조경시설물',
      title: '데크 시공작업',
      summary: '원주시 기독교병원 데크 철거및 신규설치',
      details: '<p>원주시기독교 병원내 공원에 설치된 데크를 철거후 신규로 설치 시공하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/데크-1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/데크-2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/데크-3.jpg']
    },
    'proj-2026-8': {
      cat: '2026 | 조경시설물',
      title: '화단 조성작업',
      summary: '화단 조성작업',
      details: '<p>기존화단 구조물 철거후 신규로 화단을 시공하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/화단조성1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/화단조성2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/화단조성3.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/화단조성4.jpg']
    },
    'proj-2026-9': {
      cat: '2026 | 유지관리',
      title: '위험수목 제거 및 전정',
      summary: '위험수목 제거 작업 및 전정 작업',
      details: '<p>위험 수목을 제거하고 조경 전정작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/위험수목제거-1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/위험수목제거-2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/위험수목제거-3.jpg']
    },
    'proj-2026-10': {
      cat: '2026 | 조경시설물',
      title: '어린이 공원 시설물 보수작업',
      summary: '어린이 공원 놀이터 시설물 보수작업',
      details: '<p>어린이 공원내 놀이터 시설물의 안전을 위한 시설물 보수를 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/어린이시설물정비2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/어린이시설물정비1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/어린이시설물정비3.jpg']
    },
    'proj-2026-11': {
      cat: '2026 | 조경시설물',
      title: '수변 공원 시설물 보수작업',
      summary: '수변 공원 시설물 보수작업',
      details: '<p>수변 공원내 시설물의 안전을 위한 시설물 보수를 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/공원시설물1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/공원시설물2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/공원시설물3.jpg']
    },
    'proj-2026-12': {
      cat: '2026 | 유지관리',
      title: '산림항공본부 예초작업',
      summary: '산림항공본부 예초작업',
      details: '<p>산림항공본부 예초 작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/예초1-2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/예초1-1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/예초1-3.jpg']
    },
    'proj-2026-13': {
      cat: '2026 | 조경시설물',
      title: '휴계쉼터 조성',
      summary: '휴계쉼터 조성',
      details: '<p>시민의 휴식을 위한 휴계쉼터 조성작업을 시행하였습니다.</p>',
      images: ['https://andrew78kim-dot.github.io/seorin/Images/휴계쉼터조성1.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/휴계쉼터조성2.jpg', 'https://andrew78kim-dot.github.io/seorin/Images/휴계쉼터조성3.jpg']
    }
  };

  function linkFor(key) {
    if (key === 'index') return '#home';
    return key + '.html';
  }

  function inquiryLink() {
    return page === 'index' ? '#contact' : 'index.html#contact';
  }

  function injectShell() {
    const headerTarget = document.querySelector('[data-include="site-header"]');
    const footerTarget = document.querySelector('[data-include="site-footer"]');
    const active = page || 'index';

    if (headerTarget) {
      headerTarget.innerHTML = `
        <a class="skip-link" href="#main-content">본문 바로가기</a>
        <div id="mobileMenu" class="mobile-menu-overlay" aria-hidden="true">
          <button type="button" class="mobile-menu-close" id="mobileClose" data-menu-close aria-label="모바일 메뉴 닫기">
            <i class="fas fa-times"></i>
          </button>
          <a href="${page === 'index' ? '#home' : 'index.html#home'}" class="mobile-menu-link ${active === 'index' ? 'is-current' : ''}" data-menu-close ${active === 'index' ? 'aria-current="page"' : ''}>홈</a>
          <a href="about.html" class="mobile-menu-link ${active === 'about' ? 'is-current' : ''}" data-menu-close ${active === 'about' ? 'aria-current="page"' : ''}>회사소개</a>
          <a href="business.html" class="mobile-menu-link ${active === 'business' ? 'is-current' : ''}" data-menu-close ${active === 'business' ? 'aria-current="page"' : ''}>사업분야</a>
          <a href="history.html" class="mobile-menu-link ${active === 'history' ? 'is-current' : ''}" data-menu-close ${active === 'history' ? 'aria-current="page"' : ''}>연혁/실적</a>
          <a href="gallery.html" class="mobile-menu-link ${active === 'gallery' ? 'is-current' : ''}" data-menu-close ${active === 'gallery' ? 'aria-current="page"' : ''}>갤러리</a>
          <a href="${inquiryLink()}" class="mobile-menu-link" data-menu-close>문의하기</a>
        </div>
        <nav class="fixed w-full z-50 nav-glass py-4" id="mainNav">
          <div class="container mx-auto px-6 flex justify-between items-center">
            <a class="nav-logo text-3xl font-black" href="${page === 'index' ? '#home' : 'index.html'}">(주) 서린</a>
            <div class="hidden md:flex items-center space-x-8">
              <a class="nav-link ${active === 'index' ? 'nav-link-active' : ''}" href="${page === 'index' ? '#home' : 'index.html#home'}">홈</a>
              <a class="nav-link ${active === 'about' ? 'nav-link-active' : ''}" href="about.html">회사소개</a>
              <a class="nav-link ${active === 'business' ? 'nav-link-active' : ''}" href="business.html">사업분야</a>
              <a class="nav-link ${active === 'history' ? 'nav-link-active' : ''}" href="history.html">연혁/실적</a>
              <a class="nav-link ${active === 'gallery' ? 'nav-link-active' : ''}" href="gallery.html">갤러리</a>
              <a class="nav-link nav-cta" href="${inquiryLink()}">문의하기</a>
            </div>
            <button type="button" class="md:hidden text-2xl text-[#2d4f1e] mobile-menu-toggle" id="mobileMenuToggle" aria-label="모바일 메뉴 열기" aria-controls="mobileMenu" aria-expanded="false">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      `;
    }

    if (footerTarget) {
      footerTarget.innerHTML = `
        <footer class="py-12">
          <div class="container mx-auto px-6 text-center">
            <div class="footer-logo">Seorin Co., Ltd.</div>
            <div class="footer-divider mx-auto"></div>
            <p class="site-footer-copy text-xs md:text-sm leading-relaxed">
              대표자: 김효영 &nbsp;|&nbsp; 사업자등록번호: 757-87-00257 &nbsp;|&nbsp; 전화: 033-765-5242<br>
              주소: 강원특별자치도 원주시 흥업면 남원로 67-9<br>
              전문건설업: 조경식재·시설물공사, 비계·구조물해체공사
            </p>
            <p class="mt-6 text-xs" style="color: rgba(255,255,255,0.25);">Copyright © 2024 SEORIN CO., LTD. All Rights Reserved.</p>
          </div>
        </footer>
      `;
    }
  }

  function initNavScroll() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 60) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        const navHeight = document.getElementById('mainNav')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
        window.closeMobileMenu?.();
      });
    });
  }

  function initMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const openButton = document.getElementById('mobileMenuToggle');
    if (!menu || !openButton) return;
    const closeTargets = menu.querySelectorAll('[data-menu-close]');
    let lastFocused = null;

    function setState(isOpen) {
      menu.classList.toggle('open', isOpen);
      menu.classList.toggle('is-open', isOpen);
      menu.setAttribute('aria-hidden', String(!isOpen));
      openButton.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('mobile-menu-open', isOpen);
      if (isOpen) {
        lastFocused = document.activeElement;
        menu.querySelector('.mobile-menu-link')?.focus();
      } else {
        lastFocused?.focus?.();
      }
    }

    window.openMobileMenu = () => setState(true);
    window.closeMobileMenu = () => setState(false);

    openButton.addEventListener('click', window.openMobileMenu);
    closeTargets.forEach((node) => node.addEventListener('click', window.closeMobileMenu));
    menu.addEventListener('click', (event) => {
      if (event.target === menu) window.closeMobileMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) window.closeMobileMenu();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && menu.classList.contains('is-open')) window.closeMobileMenu();
    }, { passive: true });
  }

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.sr-section, .sr-item, .sr-left, .sr-right').forEach((el) => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.sr-section, .sr-item, .sr-left, .sr-right').forEach((el) => observer.observe(el));
  }

  function initAboutTabs() {
    if (!document.querySelector('.tab-btn') || !document.querySelector('.tab-content')) return;
    window.switchTab = (tabId) => {
      document.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
      document.getElementById(`content-${tabId}`)?.classList.add('active');
      document.getElementById(`btn-${tabId}`)?.classList.add('active');
    };
  }

  function initHeroSlider() {
    const section = document.getElementById('home');
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const dots = Array.from(document.querySelectorAll('.slider-dot'));
    if (!section || !slides.length || !dots.length) return;

    const interval = 6000;
    let current = 0;
    let timer = null;

    function resetProgress() {
      const bar = document.getElementById('sliderProgress');
      if (!bar) return;
      bar.style.transition = 'none';
      bar.style.width = '0%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        bar.style.transition = `width ${interval}ms linear`;
        bar.style.width = '100%';
      }));
    }

    function goTo(index) {
      slides[current]?.classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current]?.classList.add('active');
      dots[current]?.classList.add('active');
      resetProgress();
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function start() { stop(); timer = window.setInterval(next, interval); }
    function stop() { if (timer) window.clearInterval(timer); }

    let touchStartX = 0;
    section.addEventListener('touchstart', (event) => { touchStartX = event.touches[0].clientX; }, { passive: true });
    section.addEventListener('touchend', (event) => {
      const diff = touchStartX - event.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    });
    section.addEventListener('mouseenter', stop);
    section.addEventListener('mouseleave', start);

    window.heroSlider = { goTo, next, prev };
    resetProgress();
    start();
  }

  function initHistoryStaticFilter() {
    if (!document.querySelector('.filter-btn') || page === 'gallery') return;
    const items = Array.from(document.querySelectorAll('.portfolio-item'));
    if (!items.length) return;

    window.filterGallery = (category, button) => {
      document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
      button?.classList?.add('active');
      items.forEach((item) => {
        const value = item.dataset.category || '';
        const match = category === 'all' || value.includes(category);
        item.style.display = match ? '' : 'none';
      });
    };
  }

  function initGalleryPage() {
    if (page !== 'gallery') return;
    const container = document.getElementById('galleryContainer');
    const pagination = document.getElementById('pagination');
    if (!container || !pagination) return;

    const itemsPerPage = 6;
    let currentCategory = 'all';
    let currentPage = 1;
    let currentImages = [];
    let currentImgIndex = 0;

    const getFilteredIds = () => Object.keys(projectData).filter((id) => currentCategory === 'all' || projectData[id].cat.includes(currentCategory));

    const updateModalImage = () => {
      const img = document.getElementById('modalMainImg');
      const dotsContainer = document.getElementById('modalDots');
      if (!img || !dotsContainer) return;
      img.style.opacity = '0';
      window.setTimeout(() => {
        img.src = currentImages[currentImgIndex];
        img.style.opacity = '1';
      }, 150);
      dotsContainer.innerHTML = '';
      if (currentImages.length > 1) {
        currentImages.forEach((_, idx) => {
          const dot = document.createElement('div');
          dot.className = `w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${idx === currentImgIndex ? 'bg-[#c5a059] scale-125' : 'bg-white/50 hover:bg-white/80'}`;
          dot.onclick = () => {
            currentImgIndex = idx;
            updateModalImage();
          };
          dotsContainer.appendChild(dot);
        });
      }
    };

    window.openModal = (projectId) => {
      const data = projectData[projectId];
      if (!data) return;
      document.getElementById('modalCat').innerText = data.cat;
      document.getElementById('modalTitle').innerText = data.title;
      document.getElementById('modalSummary').innerText = data.summary;
      document.getElementById('modalDetails').innerHTML = data.details;
      currentImages = data.images;
      currentImgIndex = 0;
      updateModalImage();
      document.getElementById('projectModal')?.classList.add('active');
      document.body.classList.add('modal-open');
    };

    window.closeModal = () => {
      document.getElementById('projectModal')?.classList.remove('active');
      document.body.classList.remove('modal-open');
    };
    window.nextModalImg = () => {
      if (currentImages.length <= 1) return;
      currentImgIndex = (currentImgIndex + 1) % currentImages.length;
      updateModalImage();
    };
    window.prevModalImg = () => {
      if (currentImages.length <= 1) return;
      currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
      updateModalImage();
    };

    function renderPagination(totalItems) {
      const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
      pagination.innerHTML = '';

      const prevBtn = document.createElement('button');
      prevBtn.className = 'pagination-btn';
      prevBtn.textContent = '이전';
      prevBtn.disabled = currentPage === 1;
      prevBtn.onclick = () => changePage(currentPage - 1);
      pagination.appendChild(prevBtn);

      for (let p = 1; p <= totalPages; p += 1) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${p === currentPage ? 'active' : ''}`;
        pageBtn.textContent = p;
        pageBtn.onclick = () => changePage(p);
        pagination.appendChild(pageBtn);
      }

      const nextBtn = document.createElement('button');
      nextBtn.className = 'pagination-btn';
      nextBtn.textContent = '다음';
      nextBtn.disabled = currentPage === totalPages;
      nextBtn.onclick = () => changePage(currentPage + 1);
      pagination.appendChild(nextBtn);

      const status = document.createElement('div');
      status.className = 'pagination-status';
      status.textContent = `${currentPage} / ${totalPages} 페이지 · 총 ${totalItems}개 프로젝트`;
      pagination.appendChild(status);
    }

    function renderGallery() {
      const filteredIds = getFilteredIds();
      const start = (currentPage - 1) * itemsPerPage;
      const visibleIds = filteredIds.slice(start, start + itemsPerPage);
      container.innerHTML = '';
      visibleIds.forEach((id, idx) => {
        const data = projectData[id];
        const item = document.createElement('div');
        item.className = `portfolio-item sr-item visible sr-delay-${(idx % 5) + 1}`;
        item.dataset.category = data.cat;
        item.id = id;
        item.innerHTML = `
          <div class="img-container">
            <img alt="${data.title}" src="${data.images[0]}">
            <div class="zoom-overlay">
              <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
            </div>
          </div>
          <div class="portfolio-summary">
            <div class="cat">${data.cat}</div>
            <h4>${data.title}</h4>
            <p>${data.summary}</p>
          </div>
        `;
        item.onclick = () => window.openModal(id);
        container.appendChild(item);
      });
      renderPagination(filteredIds.length);
    }

    function changePage(nextPage) {
      currentPage = nextPage;
      renderGallery();
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    window.filterGallery = (category, button) => {
      document.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
      button?.classList?.add('active');
      currentCategory = category;
      currentPage = 1;
      renderGallery();
    };

    document.getElementById('projectModal')?.addEventListener('click', function (event) {
      if (event.target === this) window.closeModal();
    });

    renderGallery();
  }

  window.jumpToGallery = (projectId) => {
    if (page === 'gallery') {
      const btnAll = document.getElementById('btn-all');
      window.filterGallery?.('all', btnAll);
      const target = document.getElementById(projectId);
      if (!target) return;
      window.setTimeout(() => {
        const navHeight = document.getElementById('mainNav')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 24;
        window.scrollTo({ top, behavior: 'smooth' });
        target.classList.add('highlight-ring');
        window.setTimeout(() => target.classList.remove('highlight-ring'), 2500);
      }, 50);
      return;
    }
    window.location.href = `gallery.html#${projectId}`;
  };

  window.sendMail = () => {
    const name = document.getElementById('senderName')?.value?.trim();
    const phone = document.getElementById('senderPhone')?.value?.trim();
    const message = document.getElementById('senderMessage')?.value?.trim();
    if (!name || !phone || !message) {
      window.alert('모든 항목을 입력해 주세요.');
      return;
    }
    const subject = encodeURIComponent(`[서린 상담 신청] ${name} 고객님`);
    const body = encodeURIComponent(`성함/기업명: ${name}\n연락처: ${phone}\n\n문의 내용:\n${message}`);
    window.location.href = `mailto:andrew78.kim@gmail.com?subject=${subject}&body=${body}`;
  };

  function finalizeMainId() {
    const main = document.querySelector('main') || document.querySelector('section, article, div');
    if (!main) return;
    const targetId = main.id || 'main-content';
    if (!main.id) {
      main.id = targetId;
    }
    document.querySelector('.skip-link')?.setAttribute('href', `#${targetId}`);
  }

  function init() {
    injectShell();
    finalizeMainId();
    initNavScroll();
    initSmoothAnchors();
    initMobileMenu();
    initScrollReveal();
    initAboutTabs();
    initHeroSlider();
    initHistoryStaticFilter();
    initGalleryPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
