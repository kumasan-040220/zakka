document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーメニューの動作
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");

      if (!nav.style.display || nav.style.display === "none") {
        nav.style.display = "block";
        nav.style.position = "absolute";
        nav.style.top = "90px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        nav.style.padding = "20px";
        nav.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";

        // メニューアイテムを縦に並べる
        const navItems = nav.querySelectorAll("ul");
        navItems.forEach((item) => {
          item.style.flexDirection = "column";
          const links = item.querySelectorAll("li");
          links.forEach((link) => {
            link.style.margin = "15px 0";
            link.style.textAlign = "center";
          });
        });
      } else {
        nav.style.display = "none";
      }
    });
  }

  // ハンバーガーメニュー展開時のリンククリック時の処理
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.style.display = "none";
        hamburger.classList.remove("active");
      }
    });
  });

  // スクロール時のヘッダー背景透過度変更
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
    }
  });

  // スクロールアニメーション
  const revealElements = document.querySelectorAll(
    ".product-card, .about-content"
  );

  function checkScroll() {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;

    revealElements.forEach((element) => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;

      if (
        elementBottomPosition >= windowTopPosition &&
        elementTopPosition <= windowBottomPosition
      ) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // 初期チェック

  // ページ内リンクのスムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 90,
          behavior: "smooth",
        });
      }
    });
  });
});
