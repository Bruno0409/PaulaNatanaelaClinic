(function ($) {
  "use strict";

  // // Spinner
  // var spinner = function () {
  //   setTimeout(function () {
  //     if ($("#spinner").length > 0) {
  //       $("#spinner").removeClass("show");
  //     }
  //   }, 1);
  // };
  // spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });
})(jQuery);

const carousel = document.querySelector(".image-carousel");

let scrollAmount = 0;
function autoScroll() {
  scrollAmount += carousel.offsetWidth * 0.8 + 20; // largura do slide + gap
  if (scrollAmount >= carousel.scrollWidth) scrollAmount = 0;
  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}

setInterval(autoScroll, 3000); // muda a cada 3s

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", () => {
    // Fechar outros itens
    document.querySelectorAll(".faq-item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    // Abrir ou fechar item clicado
    item.classList.toggle("active");
    const answer = item.querySelector(".faq-answer");
    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// Obtém o ano atual
var currentYear = new Date().getFullYear();

// Se o ano atual for maior ou igual a 2025, atualiza o ano exibido
if (currentYear >= 2025) {
  document.getElementById("current-year").textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", function () {
  let currentPage = 1; // Página inicial
  let loading = false; // Flag para evitar múltiplos carregamentos simultâneos

  // Função para carregar mais serviços
  function loadMoreServices() {
    if (loading) return; // Evita chamadas múltiplas enquanto já carrega
    loading = true;

    // Exibe a mensagem de "Carregando..."
    document.getElementById("loading").style.display = "block";

    // Simulação de carregamento de dados (substitua com AJAX se necessário)
    setTimeout(function () {
      const servicesContainer = document.getElementById("services-container");

      // Adiciona novos cards (para fins de demonstração, repetindo o mesmo conteúdo)
      for (let i = 0; i < 3; i++) {
        // Adiciona 3 novos cards por vez
        const newCard = document.createElement("div");
        newCard.classList.add("col-lg-4", "col-md-6", "service-card");
        newCard.innerHTML = `
          <div class="service-banner" style="background-image: url('img/revitalizacao.jpg')">
            <div class="overlay"></div>
            <div class="service-info">
              <h5 class="titulo-card">Novo Serviço ${
                currentPage * 3 + i + 1
              }</h5>
              <a href="#" class="service-btn">Conheça</a>
            </div>
          </div>
        `;
        servicesContainer.appendChild(newCard);
      }

      // Atualiza a página e esconde a mensagem de "Carregando..."
      currentPage++;
      document.getElementById("loading").style.display = "none";
      loading = false;
    }, 1000); // Simulando um tempo de carregamento de 1 segundo
  }

  // Detecta quando o usuário chega ao final da página
  window.addEventListener("scroll", function () {
    const bottom =
      document.documentElement.scrollHeight ===
      window.innerHeight + window.scrollY;
    if (bottom) {
      loadMoreServices();
    }
  });

  // Carregar os primeiros serviços
  loadMoreServices();
});

document.addEventListener("DOMContentLoaded", function () {
  // Obter todos os botões "Saiba Mais"
  const saibaMaisBtns = document.querySelectorAll(".saiba-mais");

  // Adicionar evento de clique a cada botão
  saibaMaisBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".curso-card-body"); // Encontrar o card que contém o botão
      const textoCurto = card.querySelector(".curso-info-short");
      const textoCompleto = card.querySelector(".curso-info-full");

      // Alternar entre mostrar e esconder o texto completo
      if (textoCompleto.style.display === "none") {
        textoCompleto.style.display = "inline"; // Mostrar texto completo
        textoCurto.style.display = "none"; // Ocultar o texto curto
        btn.textContent = "Saiba Menos"; // Alterar texto do botão
      } else {
        textoCompleto.style.display = "none"; // Esconder texto completo
        textoCurto.style.display = "inline"; // Mostrar texto curto
        btn.textContent = "Saiba Mais"; // Alterar texto do botão
      }
    });
  });
});




