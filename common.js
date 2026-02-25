// ページトップボタンの表示/非表示
window.addEventListener('scroll', function() {
  const pageTop = document.getElementById('page-top');
  if (pageTop) {
    if (window.scrollY > 300) {
      pageTop.style.display = 'block';
    } else {
      pageTop.style.display = 'none';
    }
  }
});

// ページトップへスムーズスクロール
document.addEventListener('DOMContentLoaded', function() {
  const pageTopLink = document.querySelector('#page-top a');
  if (pageTopLink) {
    pageTopLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ギャラリーアンカーリンクのスムーズスクロール
  const anchorLinks = document.querySelectorAll('.anchor_link');
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          const headerHeight = 58;
          const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }
      // アクティブクラスの切り替え
      anchorLinks.forEach(function(l) { l.classList.remove('active'); });
      this.classList.add('active');
    });
  });
});
