import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";

const whatsapp = "https://api.whatsapp.com/send?phone=5531975673895";
const instagram = "https://www.instagram.com/jullietepsi/";

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ duration: .5, delay, ease: [.22,1,.36,1] }}>{children}</motion.div>;
}
function Leaf({ className = "" }) { return <span className={`leaf ${className}`} aria-hidden="true"><i/><i/><i/></span>; }
function Monogram({ small = false }) { return <span className={small ? "monogram small" : "monogram"} aria-hidden="true"><span>J</span><i/></span>; }

export default function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => window.innerWidth > 760 && setMenu(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return <>
    <header className="site-header">
      <a className="brand" href="#inicio">
        <Monogram small/>
        <span className="brand-copy"><strong>Julliete</strong><small>Psicóloga · CRP 04/54451</small></span>
      </a>
      <nav className={menu ? "nav open" : "nav"}>
        <a href="#psicoterapia" onClick={()=>setMenu(false)}>Psicoterapia</a>
        <a href="#gestalt" onClick={()=>setMenu(false)}>Gestalt-terapia</a>
        <a href="#esporte" onClick={()=>setMenu(false)}>Psicologia do esporte</a>
        <a href="#sobre" onClick={()=>setMenu(false)}>Quem sou eu</a>
        <a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer">Conversar <ArrowRight size={14}/></a>
      </nav>
      <button className="menu-button" onClick={()=>setMenu(!menu)} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-decoration" aria-hidden="true"/>
        <Reveal className="hero-copy">
          <p className="eyebrow">Psicologia · Gestalt-terapia · Psicologia do esporte</p>
          <h1>Psicoterapia como espaço de <em>encontro, consciência e cuidado.</em></h1>
          <p className="lead">Nem sempre é preciso chegar com tudo organizado. Aqui, há espaço para olhar com mais calma para o que você vive, sente e escolhe.</p>
          <div className="hero-actions">
            <a className="button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Vamos conversar</a>
            <a className="quiet-link" href="#psicoterapia">Conheça meu trabalho <ArrowRight size={14}/></a>
          </div>
        </Reveal>
        <Reveal className="hero-portrait" delay={.08}>
          <div className="portrait-frame"><img src="/img/julliete-perfil.jpg" alt="Julliete, psicóloga"/><Leaf className="portrait-leaf"/></div>
          <p><em>presença</em> · escuta · encontro</p>
        </Reveal>
      </section>

      <section className="psychotherapy section" id="psicoterapia">
        <Reveal className="section-heading"><p className="eyebrow">Psicoterapia</p><h2>Você não precisa chegar sabendo <em>explicar tudo.</em></h2></Reveal>
        <Reveal className="section-copy"><p>Há momentos em que algo incomoda e ainda não encontramos palavras. Outros em que queremos compreender melhor nossa história, nossos limites e a forma como nos relacionamos conosco e com o mundo.</p><p>A psicoterapia não oferece uma fórmula pronta sobre como viver. É um encontro de escuta e construção conjunta, com tempo e respeito à sua experiência.</p></Reveal>
        <span className="organic-mark" aria-hidden="true"/>
      </section>

      <section className="quote-band"><Reveal><span className="quote-label">acolhimento</span><blockquote>“O psicoterapeuta não é aquele que cura, e sim aquele que cuida — e, quando as pessoas se sentem cuidadas, abrem o caminho para sua própria mudança.”</blockquote><cite>Ribeiro, 2001</cite></Reveal></section>

      <section className="gestalt section" id="gestalt">
        <Reveal className="section-heading"><p className="eyebrow">Gestalt-terapia</p><h2>Olhar para si com mais <em>presença.</em></h2></Reveal>
        <Reveal className="section-copy"><p>Na Gestalt-terapia, a pessoa é compreendida em sua totalidade: sua história, seu contexto, suas relações e aquilo que acontece no presente.</p><p>O processo abre espaço para perceber como você se relaciona consigo, com outras pessoas e com o mundo — ampliando consciência e possibilidades de escolha.</p><div className="perls">“Você é você, e eu sou eu.” <span>— Fritz Perls</span></div></Reveal>
        <Leaf className="section-leaf"/>
      </section>

      <section className="reflections">
        <Reveal className="reflection-intro"><p className="eyebrow">Para guardar por perto</p><h2>Palavras que convidam a <em>olhar para dentro.</em></h2></Reveal>
        <div className="reflection-composition">
          <Reveal className="reflection-main"><small>possibilidades</small><blockquote>“Construa possibilidades, não expectativas.”</blockquote><p>Respeite seus nãos. Permita viver; não somente sobreviver.</p></Reveal>
          <Reveal className="reflection-side" delay={.06}><span>01</span><p>Está tudo bem chorar por situações que você achou que já havia superado.</p></Reveal>
          <Reveal className="reflection-side second" delay={.1}><span>02</span><p>Recomeçar não é uma sentença de fracasso. É um ato de coragem.</p></Reveal>
        </div>
      </section>

      <section className="sport section" id="esporte">
        <Reveal className="sport-signature"><span>corpo</span><strong>movimento</strong><span>presença</span><div className="sport-line"/></Reveal>
        <Reveal className="section-copy"><p className="eyebrow">Psicologia & esporte</p><h2>Duas partes de uma mesma <em>trajetória.</em></h2><p>O esporte faz parte da minha vida desde a infância. No fim de 2023, esse vínculo ganhou uma nova direção profissional com o início da minha pós-graduação em Psicologia do Esporte pelo Futebol Interativo.</p><p>Essa formação aproxima a experiência com o esporte e o olhar construído na psicologia.</p></Reveal>
      </section>

      <section className="about" id="sobre">
        <div className="about-layout">
          <Reveal className="about-art"><img src="/img/julliete-quem-sou-eu.jpg" alt="Arte Quem sou eu de Julliete Psicóloga"/></Reveal>
          <div className="about-content">
            <Reveal className="about-heading"><p className="eyebrow">Quem sou eu</p><h2>Ei, eu sou a <em>Julliete.</em></h2><p className="about-intro">Busco, com meu trabalho, auxiliar quem me procura a caminhar pela própria vida de forma mais consciente e amorosa consigo.</p></Reveal>
            <Reveal className="about-story">
              <p>Sou psicóloga clínica, formada em 2018 pela FUMEC, com colação de grau em fevereiro de 2019.</p>
              <p>Em 2020, iniciei minha formação em Gestalt-terapia no Instituto Carioca de Gestalt Terapia. Em 2021, comecei a especialização na UFMG e, em 2022, tornei-me especialista em <strong>Psicologia Clínica: Gestalt-terapia e Análise Existencial.</strong></p>
              <p>Minha monografia foi <em>“O ajustamento criativo das vítimas de racismo no Brasil”.</em> No fim de 2023, iniciei a pós-graduação em Psicologia do Esporte pelo Futebol Interativo.</p>
            </Reveal>
          </div>
        </div>
        <Reveal className="timeline">
          <div className="timeline-item"><span>2018</span><p>Formação em Psicologia pela FUMEC.</p></div>
          <div className="timeline-item"><span>2020</span><p>Formação em Gestalt-terapia no Instituto Carioca de Gestalt Terapia.</p></div>
          <div className="timeline-item"><span>2021–22</span><p>Especialização na UFMG em Psicologia Clínica: Gestalt-terapia e Análise Existencial.</p></div>
          <div className="timeline-item"><span>2023</span><p>Início da pós-graduação em Psicologia do Esporte pelo Futebol Interativo.</p></div>
        </Reveal>
        <Reveal className="about-footer"><Leaf/><span>Psicóloga · CRP 04/54451</span></Reveal>
      </section>

      <section className="contact"><Reveal><p className="eyebrow">Primeiro contato</p><h2>Talvez começar seja <em>simplesmente conversar.</em></h2><p>Se fizer sentido conhecer melhor o meu trabalho, podemos começar por uma conversa.</p><div className="contact-actions"><a className="button light" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Conversar pelo WhatsApp</a><a className="quiet-link light-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={16}/> @jullietepsi</a></div></Reveal></section>
    </main>

    <footer>
      <div className="footer-brand"><Monogram small/><span className="brand-copy"><strong>Julliete</strong><small>Psicóloga · CRP 04/54451</small></span></div>
      <div className="footer-social">
        <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18}/></a>
        <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={18}/></a>
      </div>
      <small className="copyright">© {new Date().getFullYear()} Julliete Psicóloga</small>
    </footer>
  </>;
}
