/* Mensagem pronta em todo botão de WhatsApp do site (dono, 20/11/2026: "em
   qualquer ponto que a pessoa clicar no WhatsApp, deixa uma mensagem [...] se
   ela tá em artigos trabalhistas, vai mais o cara trabalhista").
   Na página de Atuação, a área é a da aba aberta no momento do clique; nas
   outras, a mensagem é a geral. As páginas de artigos e a calculadora (que
   são do sistema) montam a mensagem delas no servidor. */
(function () {
  var AREAS = {
    trabalhista: "Direito Trabalhista", previdenciario: "Direito Previdenciário", civel: "Direito Cível",
    familia: "Direito de Família", criminal: "Direito Criminal"
  };
  function areaAberta() {
    var aba = document.querySelector(".tab-btn.active");
    return aba ? AREAS[aba.dataset.tab] : null;
  }
  function mensagem() {
    var area = areaAberta();
    return "Olá! Vi o site da Lobato & Salazar Advocacia e tenho interesse em "
      + (area ? "atendimento em " + area + "." : "um atendimento.");
  }
  document.addEventListener("click", function (evento) {
    var link = evento.target.closest && evento.target.closest('a[href*="wa.me/"]');
    if (!link) return;
    var url = new URL(link.href);
    url.searchParams.set("text", mensagem());
    link.href = url.toString();
  }, true);
})();
