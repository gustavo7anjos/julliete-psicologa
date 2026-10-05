# Documentação do Projeto Front-end

## 1. Nome do projeto

Julliete Psicóloga


## 2. Descrição do projeto

O projeto Julliete Psicóloga é um site profissional desenvolvido para apresentar o trabalho da psicóloga Julliete.

O site reúne informações sobre a profissional, suas áreas de atuação, trajetória acadêmica e profissional, conteúdos relacionados à psicologia e formas de contato.

A página foi desenvolvida com uma identidade visual baseada nas cores e no estilo já utilizados pela profissional em suas redes sociais.


## 3. Objetivo

O objetivo do projeto é criar uma presença digital profissional para a psicóloga, permitindo que os usuários conheçam seu trabalho, sua trajetória e suas principais áreas de atuação.

O site também facilita o contato com a profissional por meio de links diretos para WhatsApp e Instagram.


## 4. Público-alvo

O projeto foi desenvolvido para pessoas interessadas em conhecer o trabalho da psicóloga, obter informações sobre psicoterapia, Gestalt-terapia e Psicologia do Esporte e entrar em contato para saber mais sobre os atendimentos.


## 5. Tecnologias utilizadas

• HTML5 — utilizado para criar a estrutura e organizar o conteúdo da página.

• CSS3 — utilizado para personalizar cores, fontes, espaçamentos, imagens, animações e responsividade.

• Bootstrap 5 — utilizado como framework para auxiliar na criação do menu, sistema de grid, responsividade e componentes como o accordion da seção de dúvidas.

• Bootstrap Icons — utilizado para adicionar ícones aos botões, links e elementos da interface.

• JavaScript — utilizado para adicionar interatividade ao site, como animações durante a rolagem, alteração do menu, botão para voltar ao topo e atualização automática do ano no rodapé.

• Google Fonts — utilizado para aplicar as fontes DM Sans e DM Serif Display na identidade visual do projeto.


## 6. Estrutura do site

O site possui as seguintes áreas:

• Header/Menu: apresenta a identidade da profissional e permite navegar pelas principais seções do site.

• Hero: apresenta a psicóloga, seu CRP, uma mensagem principal e um botão para contato pelo WhatsApp.

• Sobre: apresenta informações sobre Julliete e sua relação com a psicologia.

• Formas de atuação: apresenta Psicoterapia, Gestalt-terapia e Psicologia do Esporte.

• Psicologia do Esporte: apresenta a relação da profissional com o esporte e sua formação nessa área.

• Trajetória: apresenta uma linha do tempo com informações sobre sua graduação, especializações e formação profissional.

• Conteúdos: direciona o usuário para conteúdos relacionados à psicologia e para o perfil profissional no Instagram.

• Primeiro contato: apresenta de forma simples os passos para iniciar um contato com a profissional.

• FAQ: apresenta perguntas e respostas sobre abordagem, atendimento e formas de contato.

• Chamada final: incentiva o usuário a entrar em contato pelo WhatsApp.

• Rodapé: apresenta informações profissionais, CRP, links de navegação e redes sociais.


## 7. Organização dos arquivos

A estrutura principal do projeto está organizada da seguinte forma:

julliete-psicologa/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── img/
│   ├── julliete-hero.jpg
│   ├── julliete-quem-sou-eu.jpg
│   ├── julliete-esporte.jpg
│   └── julliete-trajetoria.jpg
│
└── docs/
    └── documentacao.md


O arquivo index.html contém a estrutura principal e o conteúdo do site.

O arquivo style.css contém as personalizações de aparência, cores, fontes, espaçamentos, animações e adaptações para diferentes tamanhos de tela.

O arquivo script.js contém as funcionalidades de interação da página.

A pasta img contém as imagens utilizadas no projeto.

A pasta docs contém a documentação do projeto.


## 8. Responsividade

O projeto foi desenvolvido para funcionar em diferentes tamanhos de tela.

Foram utilizados o sistema de grid e recursos responsivos do Bootstrap, além de Media Queries no CSS.

Em telas menores, elementos que aparecem lado a lado no computador passam a ser exibidos verticalmente, facilitando a leitura e a navegação pelo celular.

O menu também utiliza o comportamento responsivo do Bootstrap, sendo transformado em um menu recolhível em dispositivos menores.


## 9. Acessibilidade

Foram utilizados alguns cuidados básicos de acessibilidade:

• as imagens possuem o atributo alt com uma descrição;

• os títulos foram organizados de forma hierárquica;

• os textos possuem contraste em relação às cores de fundo;

• os links e botões possuem textos que indicam suas funções;

• foi utilizado o atributo aria-label no botão de voltar ao topo;

• o projeto considera a preferência do usuário por redução de movimentos através de prefers-reduced-motion.


## 10. Decisões de UX

Algumas decisões tomadas pensando na experiência do usuário foram:

• manter o menu disponível durante a navegação;

• utilizar uma identidade visual semelhante à utilizada pela profissional em suas redes sociais;

• destacar o botão de contato pelo WhatsApp;

• organizar as informações em seções para facilitar a leitura;

• utilizar uma linha do tempo para apresentar a trajetória profissional;

• apresentar as três principais áreas de atuação com o mesmo padrão visual;

• utilizar perguntas frequentes para facilitar o acesso às principais informações;

• adaptar o conteúdo para computadores, tablets e celulares;

• utilizar animações leves para tornar a navegação mais dinâmica sem prejudicar a leitura.


## 11. Dificuldades encontradas

Uma das dificuldades encontradas durante o desenvolvimento foi organizar diferentes quantidades de texto e imagens sem perder a identidade visual do projeto.

Para resolver esse problema, foram utilizados o sistema de grid do Bootstrap e estilos personalizados em CSS.

Outra dificuldade foi manter as três áreas de atuação — Psicoterapia, Gestalt-terapia e Psicologia do Esporte — com a mesma hierarquia visual.

O problema foi resolvido criando uma estrutura padronizada para os três conteúdos, utilizando o mesmo tamanho de título, numeração, cores e espaçamentos.

Também foi necessário adaptar seções com imagens e textos para telas menores. Para isso, foram utilizadas classes responsivas do Bootstrap e Media Queries no CSS.


## 12. Melhorias futuras

Futuramente, o projeto poderá receber:

• integração de um formulário de contato;

• integração com um sistema de agendamento;

• publicação dinâmica de conteúdos;

• integração dos conteúdos publicados no Instagram;

• melhorias de SEO;

• otimização das imagens para melhorar o desempenho;

• criação de páginas internas para conteúdos e informações profissionais;

• implementação de ferramentas de análise de acesso ao site.