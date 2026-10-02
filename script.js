/**
 * 王韻晴 Alina ｜ 個人面試作品集與專題復盤網站
 * WIX 1887 (Actor & Model Resume) 風格交互腳本
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ========================================================
     1. 專案內部頁籤切換 (Overview / Report / Reflection)
     ======================================================== */
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    // 支援 .case-tab-btn 與 .tab-btn
    const tabButtons = card.querySelectorAll('.case-tab-btn, .tab-btn');
    const tabPanes = card.querySelectorAll('.case-pane, .tab-pane');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.getAttribute('data-tab');

        // 移除當前卡片內的所有 active 狀態
        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        // 啟動點選的按鈕與面板
        btn.classList.add('active');
        const targetPane = card.querySelector(`#${targetTabId}`);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  });

  /* ========================================================
     2. 專案分類篩選 (Filter Bar)
     ======================================================== */
  const filterButtons = document.querySelectorAll('.filter-pill, .filter-btn');
  const allProjects = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // 更新按鈕樣式
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 篩選卡片
      allProjects.forEach(project => {
        const category = project.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          project.style.display = 'block';
          project.style.animation = 'fadeIn 0.35s ease';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });

  /* ========================================================
     3. 報告在線全頁預覽 Modal
     ======================================================== */
  const modal = document.getElementById('reportModal');
  const openModalButtons = document.querySelectorAll('.open-report-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseActionBtn = document.getElementById('modalCloseActionBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDocType = document.getElementById('modalDocType');
  const modalDocIframe = document.getElementById('modalDocIframe');
  const modalOpenExternalBtn = document.getElementById('modalOpenExternalBtn');
  const modalDownloadBtn = document.getElementById('modalDownloadBtn');
  const mockDocTitle = document.getElementById('mockDocTitle');
  const mockTag = document.getElementById('mockTag');
  const mockAuthor = document.getElementById('mockAuthor');
  const mockToc = document.getElementById('mockToc');
  const mockCalloutTip = document.getElementById('mockCalloutTip');

  const projectReports = {
    lovepaw: {
      tag: 'GRADUATION PROJECT REPORT ｜ 112-2',
      title: 'LovePaw 寵物照顧平台 實務專題報告書',
      author: '指導老師：張弘毅 ｜ 專題組員：王韻晴、余文萱、楊靜玟、鄧惠馨、吳妮芹',
      file: 'LovePaw_Report.pdf',
      downloadFile: 'LovePaw_Report.pdf',
      toc: [
        { name: '一、專題摘要與研究動機（寵物登記 vs 新生兒出生數據交叉）', page: 'P. 01' },
        { name: '二、文獻探討（寵物潮流趨勢、棄養問題、APP vs Mobile Web）', page: 'P. 02' },
        { name: '三、資訊技術架構（Android Studio MVVM、VSCode、PHP、MariaDB）', page: 'P. 02' },
        { name: '四、研究流程與方法（7 大研究步驟與功能分解圖）', page: 'P. 03' },
        { name: '五、系統功能與頁面展示（Web 網頁端 ✕ Android 原生端 介面流程）', page: 'P. 05' },
        { name: '六、資料庫規劃（使用者、寵物、照顧需求、文章交流 4 大資料表）', page: 'P. 09' },
        { name: '七、結論與效益（平衡現代人工作生活與毛孩照護、互惠共生）', page: 'P. 10' }
      ],
      tip: '💡 <strong>檢視提示：</strong>上方為 LovePaw 專題完整原版 PDF 報告，支援滑鼠捲動翻頁與縮放檢閱；亦可點擊右上角按鈕在新分頁開啟或下載保存。'
    },
    ipass: {
      tag: 'iPASS 一卡通創意大賞 ｜ 企劃組金獎作品',
      title: '「一觸即達的音樂旅程」企劃書',
      author: '指導老師：黃照貴、蘇國瑋、張弘毅 ｜ 團隊成員：隊長 余文萱、陳欣妤、王韻晴、楊靜玟、鄧惠馨、吳妮芹',
      file: 'iPASS_Plan.pdf',
      downloadFile: 'iPASS_Plan.pdf',
      toc: [
        { name: '壹、研究動機與目的（演唱會狂潮、黃牛詐騙猖獗與實名無紙化目標）', page: 'P. 04' },
        { name: '貳、服務方案說明（4 大特點、目標客群分析、服務痛點因應策略）', page: 'P. 05' },
        { name: '參、服務情境與架構說明（購票流程圖、付款流程圖、服務架構圖）', page: 'P. 08' },
        { name: '肆、商業營運與獲利模式（多元收益模式、數位支付市場趨勢、創新性比較）', page: 'P. 12' },
        { name: '伍、效益評估與永續發展（ESG 綠色低碳出行、無紙化、社會與經濟效益）', page: 'P. 15' },
        { name: '陸、結論與團隊成員名單', page: 'P. 16' }
      ],
      tip: '💡 <strong>檢視提示：</strong>上方為 iPASS 一卡通創意大賞「全國金獎」原版完整企劃書，支援滑鼠捲動與翻頁閱讀；亦可點擊右上角按鈕在新分頁開啟或下載保存。'
    },
    hermes: {
      tag: 'HERMES EPITEK ✕ 祥豐有限公司 ｜ 2023-2024',
      title: '實習專案實作報告 — 資訊系統開發與應用實踐（以點名系統、研發記錄簿與人才招募平台為例）',
      author: '學生姓名：王韻晴 ｜ 就讀學校：國立高雄科技大學 資訊管理系 ｜ 實習單位：祥豐(漢民)科技股份有限公司',
      file: 'Hermes_Internship_Report.html',
      downloadFile: 'Hermes_Internship_Report.docx',
      toc: [
        { name: '一、實習角色與學習歷程（祥豐/漢民科技定位、企業標準開發流程圖、Scrum 協作）', page: 'P. 01' },
        { name: '二、核心技術能力總覽（Twig 模板、jQuery、PHP MVC 架構、SQL 資料庫設計）', page: 'P. 03' },
        { name: '三、點名系統開發實作報告（課程訓練 ✕ 緊急疏散、刷卡與帳號雙點名、中央出勤同步）', page: 'P. 05' },
        { name: '四、研發記錄簿簽核系統（Summernote 副文本編輯器、TCPDF 報表排版、四態簽核與 Mail 簽核）', page: 'P. 08' },
        { name: '五、人才招募平台開發專案（RMS 職缺管理、人才履歷庫、AJAX 最愛清單、批次更新）', page: 'P. 11' },
        { name: '六、實作整合與反思結語（從技術實踐走向管理思維、在模糊中建立結構的能力）', page: 'P. 14' }
      ],
      tip: '💡 <strong>檢視提示：</strong>上方為祥豐(漢民)科技實習實作報告原版文件，直接在線閱讀三大系統開發實務；亦可點擊右上角「下載原版檔案」下載完整 DOCX 原始檔。'
    }
  };

  const openModal = (title, docType, projectKey) => {
    if (!modal) return;
    const reportData = projectReports[projectKey] || projectReports.lovepaw;

    if (modalTitle) modalTitle.textContent = title || reportData.title;
    if (modalDocType) modalDocType.textContent = docType || '原版專案成果';

    if (modalDocIframe) {
      modalDocIframe.src = reportData.file;
    }
    if (modalOpenExternalBtn) {
      modalOpenExternalBtn.href = reportData.file;
    }
    if (modalDownloadBtn) {
      modalDownloadBtn.href = reportData.downloadFile;
      modalDownloadBtn.setAttribute('download', reportData.downloadFile);
    }
    
    if (mockDocTitle) mockDocTitle.textContent = reportData.title;
    if (mockTag) mockTag.textContent = reportData.tag;
    if (mockAuthor) mockAuthor.textContent = reportData.author;
    if (mockCalloutTip) mockCalloutTip.innerHTML = reportData.tip;

    if (mockToc && reportData.toc) {
      mockToc.innerHTML = '';
      reportData.toc.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.name}</strong> <span>${item.page}</span>`;
        mockToc.appendChild(li);
      });
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (modalDocIframe) {
      modalDocIframe.src = '';
    }
  };

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title');
      const docType = btn.getAttribute('data-doc-type');
      const projectKey = btn.getAttribute('data-project') || 'lovepaw';
      openModal(title, docType, projectKey);
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCloseActionBtn) modalCloseActionBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ========================================================
     4. 面試常見問答手風琴 Q&A (Accordion)
     ======================================================== */
  // 支援 .qa-card / .accordion-item
  const qaCards = document.querySelectorAll('.qa-card, .accordion-item');

  qaCards.forEach(card => {
    const trigger = card.querySelector('.qa-trigger, .accordion-header');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');

        // 可選：點擊時收合其他 Q&A
        // qaCards.forEach(c => c.classList.remove('open'));

        if (isOpen) {
          card.classList.remove('open');
        } else {
          card.classList.add('open');
        }
      });
    }
  });

  /* ========================================================
     5. 複製 Email 與 Toast 提示
     ======================================================== */
  const toast = document.getElementById('toastMessage');
  const quickCopyEmailBtn = document.getElementById('quickCopyEmailBtn');
  const copyContactEmailBtn = document.getElementById('copyContactEmailBtn');
  const displayEmail = document.getElementById('displayEmail');

  const showToast = (message = '已複製到剪貼簿！') => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  };

  const copyText = (text) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`已成功複製信箱：${text}`);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`已成功複製信箱：${text}`);
    } catch (err) {
      alert(`複製失敗，請手動複製信箱：${text}`);
    }
    document.body.removeChild(textArea);
  };

  if (quickCopyEmailBtn) {
    quickCopyEmailBtn.addEventListener('click', () => {
      const email = quickCopyEmailBtn.getAttribute('data-email') || 'yunching041@gmail.com';
      copyText(email);
    });
  }

  if (copyContactEmailBtn && displayEmail) {
    copyContactEmailBtn.addEventListener('click', () => {
      copyText(displayEmail.textContent.trim());
    });
  }

  /* ========================================================
     6. 手機版導覽列選單開合
     ======================================================== */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  /* ========================================================
     7. 滾動監聽導覽列 Active 狀態
     ======================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
