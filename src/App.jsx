import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";

const whatsapp = "https://api.whatsapp.com/send?phone=5531975673895";
const instagram = "https://www.instagram.com/jullietepsi/";

const posts = [
  { title: "Construa possibilidades, não expectativas.", text: "Respeite seus nãos. Permita viver; não somente sobreviver.", mark: "possibilidades" },
  { title: "Está tudo bem chorar", text: "por situações que você achou que já havia superado.", mark: "acolhimento" },
  { title: "Recomeçar não é uma sentença de fracasso", text: "é um ato de coragem.", mark: "recomeços" },
  { title: "Autoconfiança também é movimento.", text: "Como um rio, nem sempre é preciso conhecer o caminho inteiro para continuar.", mark: "movimento" },
];

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay, ease: [.22,1,.36,1] }}>{children}</motion.div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const close = () => window.innerWidth > 760 && setMenu(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Julliete Psicóloga — início"><strong>Julliete</strong><span>Psicóloga · CRP 04/54451</span></a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Navegação principal">
          <a href="#terapia" onClick={()=>setMenu(false)}>Psicoterapia</a>
          <a href="#gestalt" onClick={()=>setMenu(false)}>Gestalt-terapia</a>
          <a href="#esporte" onClick={()=>setMenu(false)}>Esporte</a>
          <a href="#sobre" onClick={()=>setMenu(false)}>Quem sou eu</a>
          <a className="nav-contact" href={whatsapp} target="_blank" rel="noreferrer">Conversar <ArrowRight size={15}/></a>
        </nav>
        <button className="menu-button" onClick={()=>setMenu(!menu)} aria-label={menu ? "Fechar menu" : "Abrir menu"}>{menu ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <Reveal className="hero-copy">
            <p className="eyebrow">Psicologia clínica · presença · encontro</p>
            <h1>Um espaço para existir com mais <em>consciência, cuidado e liberdade.</em></h1>
            <p className="lead">Nem sempre precisamos de respostas prontas. Às vezes, precisamos de um espaço onde seja possível olhar para o que estamos vivendo, reconhecer nossos limites e construir novas possibilidades.</p>
            <div className="hero-links">
              <a className="button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Vamos conversar</a>
              <a className="text-link" href="#terapia">Conheça esse espaço <ArrowDown size={17}/></a>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={.08}>
            <div className="photo-frame"><img src="/img/julliete-hero.jpg" alt="Retrato de Julliete" /></div>
            <p className="photo-note">Julliete Psicóloga<br/><span>CRP 04/54451</span></p>
          </Reveal>
        </section>

        <section className="identification" id="terapia">
          <Reveal className="section-intro">
            <p className="eyebrow">Talvez você se reconheça por aqui</p>
            <h2>Você não precisa chegar à terapia <em>sabendo explicar tudo.</em></h2>
          </Reveal>
          <div className="identification-grid">
            <Reveal className="prose">
              <p>Há momentos em que algo incomoda, mas é difícil até encontrar palavras para explicar. Momentos em que situações que pareciam superadas retornam, em que dizer “não” parece difícil ou em que as expectativas dos outros começam a ocupar espaço demais.</p>
              <p>Também existem momentos em que não há uma crise específica — apenas a vontade de se compreender melhor, olhar para a própria história e perceber outras possibilidades de estar no mundo.</p>
            </Reveal>
            <Reveal className="quote-card" delay={.08}>
              <span>acolhimento</span>
              <blockquote>“Está tudo bem chorar por situações que você achou que já havia superado.”</blockquote>
              <small>@jullietepsi</small>
            </Reveal>
          </div>
        </section>

        <section className="therapy">
          <Reveal className="therapy-quote">
            <span>O que acontece em uma psicoterapia?</span>
            <blockquote>“O psicoterapeuta não é aquele que cura, e sim aquele que cuida — e, quando as pessoas se sentem cuidadas, abrem o caminho para sua própria mudança.”</blockquote>
            <cite>Ribeiro, 2001</cite>
          </Reveal>
          <Reveal className="therapy-copy">
            <h2>Um encontro em que você não precisa ter <em>todas as respostas.</em></h2>
            <p>A psicoterapia não é um lugar para receber uma fórmula pronta sobre como viver. É um espaço de escuta e construção conjunta, em que sua experiência pode ser olhada com tempo, presença e respeito.</p>
            <p>Ao longo desse processo, novas percepções sobre sentimentos, escolhas, relações e formas de estar no mundo podem ganhar espaço.</p>
          </Reveal>
        </section>

        <section className="gestalt" id="gestalt">
          <Reveal className="gestalt-title">
            <p className="eyebrow">Gestalt-terapia</p>
            <h2>Você é mais do que aquilo que está <em>sentindo agora.</em></h2>
          </Reveal>
          <Reveal className="gestalt-body">
            <p>Na Gestalt-terapia, a pessoa é compreendida em sua totalidade: sua história, seu contexto, suas relações e aquilo que acontece no presente.</p>
            <p>Em vez de encaixar experiências em respostas prontas, o processo abre espaço para perceber como você se relaciona consigo, com outras pessoas e com o mundo — ampliando consciência e possibilidades de escolha.</p>
            <blockquote>“Você é você, e eu sou eu.” <cite>— Fritz Perls</cite></blockquote>
          </Reveal>
        </section>

        <section className="manifesto">
          <Reveal>
            <p>Construa possibilidades,<br/><em>não expectativas.</em></p>
            <p className="manifesto-small">Respeite seus nãos. Permita viver;<br/>não somente sobreviver.</p>
            <span>@jullietepsi</span>
          </Reveal>
        </section>

        <section className="sport" id="esporte">
          <Reveal className="sport-image"><img src="/img/julliete-esporte.jpg" alt="Julliete em um ambiente artístico" /><span>corpo · presença · movimento</span></Reveal>
          <Reveal className="sport-copy">
            <p className="eyebrow">Psicologia & esporte</p>
            <h2>Um encontro entre psicologia e uma história que começou <em>muito antes.</em></h2>
            <p>O esporte faz parte da minha vida desde a infância. No fim de 2023, esse vínculo encontrou uma nova direção profissional com o início da minha pós-graduação em Psicologia do Esporte pelo Futebol Interativo.</p>
            <p>Essa formação aproxima duas partes importantes da minha trajetória: a experiência com o esporte e o olhar construído na psicologia.</p>
          </Reveal>
        </section>

        <section className="content" id="conteudos">
          <Reveal className="content-head">
            <div><p className="eyebrow">Para ler com calma</p><h2>Conteúdos para se <em>encontrar por aqui.</em></h2></div>
            <a className="text-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> @jullietepsi</a>
          </Reveal>
          <div className="post-track">
            {posts.map((post, i) => <motion.a whileHover={{ y: -5 }} key={post.title} className="post" href={instagram} target="_blank" rel="noreferrer">
              <span>0{i+1} · {post.mark}</span><h3>{post.title}</h3><p>{post.text}</p><small>@jullietepsi ↗</small>
            </motion.a>)}
          </div>
        </section>

        <section className="about" id="sobre">
          <Reveal className="about-copy">
            <p className="eyebrow">Quem sou eu</p>
            <h2>Ei, eu sou a <em>Julliete.</em></h2>
            <p>Sou psicóloga clínica, formada pela FUMEC e especialista em Psicologia Clínica: Gestalt-terapia e Análise Existencial.</p>
            <p>Minha formação em Gestalt-terapia começou em 2020, no Instituto Carioca de Gestalt Terapia. Em 2021, iniciei minha especialização na UFMG e, em 2022, tornei-me especialista.</p>
            <p>Meu trabalho busca auxiliar quem me procura a caminhar pela própria vida de forma mais consciente e amorosa consigo.</p>
            <div className="credential">Psicóloga · CRP 04/54451</div>
          </Reveal>
          <Reveal className="about-image"><img src="/img/julliete-trajetoria.jpg" alt="Julliete em um espaço de arte" /><div className="image-caption">Psicologia construída no encontro.</div></Reveal>
        </section>

        <section className="contact" id="contato">
          <Reveal>
            <p className="eyebrow">Primeiro contato</p>
            <h2>Talvez começar seja<br/><em>simplesmente conversar.</em></h2>
            <p>Se fizer sentido para você conhecer melhor o meu trabalho, podemos começar por uma conversa.</p>
            <div className="contact-actions">
              <a className="button light" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Conversar pelo WhatsApp</a>
              <a className="text-link light-link" href={instagram} target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><strong>Julliete</strong><span>Psicóloga · CRP 04/54451</span></div>
        <div><a href={instagram} target="_blank" rel="noreferrer">Instagram</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© {new Date().getFullYear()} Julliete Psicóloga</small>
      </footer>
    </>
  );
}
export default App;
