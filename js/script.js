document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ANO AUTOMÁTICO NO RODAPÉ
    ========================================== */

    const anoAtual = document.getElementById("anoAtual");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }



    /* ==========================================
       NAVBAR AO ROLAR
    ========================================== */

    const navbar = document.getElementById("navbar");

    function atualizarNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    }

    atualizarNavbar();

    window.addEventListener("scroll", atualizarNavbar);



    /* ==========================================
       ANIMAÇÕES AO APARECER NA TELA
    ========================================== */

    const elementosReveal =
        document.querySelectorAll(".reveal");


    const prefereMenosMovimento =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (prefereMenosMovimento) {

        elementosReveal.forEach((elemento) => {
            elemento.classList.add("reveal-visible");
        });

    } else {

        const observer = new IntersectionObserver(

            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                        observerInstance.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


        elementosReveal.forEach((elemento) => {

            observer.observe(elemento);

        });

    }



    /* ==========================================
       BOTÃO VOLTAR AO TOPO
    ========================================== */

    const backToTop =
        document.getElementById("backToTop");


    function controlarBotaoTopo() {

        if (!backToTop) return;

        if (window.scrollY > 650) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    }


    controlarBotaoTopo();

    window.addEventListener(
        "scroll",
        controlarBotaoTopo
    );


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: prefereMenosMovimento
                        ? "auto"
                        : "smooth"
                });

            }
        );

    }



    /* ==========================================
       FECHAR MENU MOBILE APÓS CLICAR
    ========================================== */

    const menuPrincipal =
        document.getElementById("menuPrincipal");


    const linksMenu =
        document.querySelectorAll(
            "#menuPrincipal .nav-link"
        );


    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            if (
                window.innerWidth < 992 &&
                menuPrincipal &&
                menuPrincipal.classList.contains("show")
            ) {

                const instanciaCollapse =
                    bootstrap.Collapse.getOrCreateInstance(
                        menuPrincipal
                    );

                instanciaCollapse.hide();

            }

        });

    });



    /* ==========================================
       LINK ATIVO NO MENU
    ========================================== */

    const secoes =
        document.querySelectorAll(
            "main section[id]"
        );


    const linksNavegacao =
        document.querySelectorAll(
            '.nav-link[href^="#"]'
        );


    function atualizarLinkAtivo() {

        let secaoAtual = "";

        const posicaoScroll =
            window.scrollY + 180;


        secoes.forEach((secao) => {

            const topo =
                secao.offsetTop;

            const altura =
                secao.offsetHeight;


            if (
                posicaoScroll >= topo &&
                posicaoScroll < topo + altura
            ) {

                secaoAtual =
                    secao.getAttribute("id");

            }

        });


        linksNavegacao.forEach((link) => {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                `#${secaoAtual}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        atualizarLinkAtivo
    );


    atualizarLinkAtivo();

});