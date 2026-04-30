// Section components for Alma de Terapeuta landing page

const Logo = () =>
<a href="#" className="nav-logo" aria-label="Alma de Terapeuta">
    <img src="assets/logo.png" alt="Alma de Terapeuta" />
  </a>;


const PromoBar = () =>
<div className="promo-bar">
    <span className="pulse-dot"></span>
    OFERTA ESPECIAL POR TEMPO LIMITADO — GARANTA SUA VAGA HOJE COM 9 BÔNUS EXCLUSIVOS
  </div>;


const Nav = () =>
<nav className="nav">
    <div className="nav-inner">
      <Logo />
      <a href="#oferta" className="btn nav-cta">Quero me inscrever <span className="arrow">→</span></a>
    </div>
  </nav>;


const Hero = () =>
<header className="hero">
    <div className="ana-bg"></div>
    <div className="sparkles"></div>
    <Petal style={{ top: '12%', left: '6%', width: '70px' }} rotate={-20} variant="float" speed={0.18} />
    <Petal style={{ top: '70%', right: '8%', width: '55px', zIndex: 3 }} rotate={30} variant="float-rev" speed={0.25} />
    <div className="ribbon" style={{ top: '60%', left: '-10%', width: '60%', height: '180px', transform: 'rotate(-12deg)' }}></div>
    <div className="ribbon" style={{ top: '20%', right: '-15%', width: '60%', height: '160px', transform: 'rotate(15deg)' }}></div>
    <div className="container">
      <div className="hero-grid">
        <div className="hero-text reveal in" style={{ width: "569px", height: "739px" }}>
          <span className="smallcaps">Método Exclusivo · Ana Martha</span>
          <h1 className="serif" style={{ fontSize: "52px", lineHeight: 1.1 }}>
            Aprenda o <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>Toque Terapêutico</em> que alivia dores e abra as portas para uma <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>nova profissão</em>
          </h1>
          <p style={{ marginTop: '22px', fontSize: '17px', color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: '540px' }}>
            O Alma de Terapeuta é exatamente o que você precisa para despertar o poder das suas mãos e mudar de vida sem ter que abandonar o que você faz hoje.
          </p>
          <div className="divider-ornament" style={{ justifyContent: 'flex-start' }}>
            <span style={{ width: '60px', height: '1px', background: 'var(--gold)' }}></span>
            <span className="diamond"></span>
            <span style={{ flex: 1, maxWidth: '120px', height: '1px', background: 'linear-gradient(to right, var(--gold), transparent)' }}></span>
          </div>

          <ul className="hero-list" style={{ width: 'auto', height: 'auto' }}>
            <li>
              <span className="icon-circle"><Icon name="clock" /></span>
              <span className="line"></span>
              <span className="label">Seu primeiro atendimento em <strong>24h</strong></span>
            </li>
            <li>
              <span className="icon-circle"><Icon name="handshake" /></span>
              <span className="line"></span>
              <span className="label">Seu primeiro cliente em <strong>2 dias</strong></span>
            </li>
            <li>
              <span className="icon-circle"><Icon name="leaf" /></span>
              <span className="line"></span>
              <span className="label">Uma <strong>nova vida</strong> nos próximos meses</span>
            </li>
          </ul>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', margin: '20px 0 18px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>
              <span className="icon-circle" style={{ width: '32px', height: '32px' }}><Icon name="play" /></span>
              <strong>100% online</strong>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>
              <span className="icon-circle" style={{ width: '32px', height: '32px' }}><Icon name="badge" /></span>
              <strong>Certificado de conclusão incluso</strong>
            </span>
          </div>

          <a href="#oferta" className="btn btn-lg">Despertar o poder das minhas mãos <span className="arrow">→</span></a>
          <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--ink-soft)', letterSpacing: '0.05em' }}>
            🔒 Pagamento 100% seguro · Garantia de satisfação · +51 mil alunas formadas
          </p>
        </div>

        <div className="hero-photo-wrap reveal in" style={{ background: 'transparent', boxShadow: 'none', overflow: 'visible', aspectRatio: 'auto', alignSelf: 'end', marginBottom: '-1px' }}>
          <img src="assets/ana_hero.png" alt="Ana Martha" style={{ width: '115%', maxWidth: 'none', marginLeft: '-7%', height: 'auto', display: 'block', position: 'relative', zIndex: 2, filter: 'drop-shadow(0 30px 40px rgba(154,124,67,0.25))' }} />
        </div>
      </div>
    </div>
  </header>;


const Trust = () =>
<section className="trust">
    <div className="container">
      <div className="trust-grid">
        <div className="trust-item">
          <span className="icon-circle"><Icon name="star" /></span>
          <div className="label"><strong>98% das alunas</strong><br />indicam o curso</div>
        </div>
        <div className="trust-item">
          <span className="icon-circle"><Icon name="badge" /></span>
          <div className="label"><strong>Top Indicado</strong><br />pela Hotmart no Brasil</div>
        </div>
        <div className="trust-item">
          <span className="icon-circle"><Icon name="book" /></span>
          <div className="label"><strong>Certificado</strong><br />de Conclusão Incluso</div>
        </div>
        <div className="trust-item">
          <span className="icon-circle"><Icon name="shield" /></span>
          <div className="label"><strong>Método Exclusivo</strong><br />Reconhecido pela Faculdade Brasília</div>
        </div>
      </div>
    </div>
  </section>;


const BENEFITS = [
  { icon: 'clock', title: 'Aprenda a Técnica em apenas 1 dia', text: 'Com aulas práticas, direto ao ponto.' },
  { icon: 'heart', title: 'Cuidado sem dor', text: 'Não gera dor nem no seu paciente e nem em você.' },
  { icon: 'coin', title: 'R$ 100 por hora', text: 'Uma sessão da técnica vale no mínimo 1h.' },
  { icon: 'handshake', title: 'Cliente em 2 dias', text: 'Você conquista seu primeiro cliente em apenas 48 horas usando apenas o WhatsApp.' },
  { icon: 'refresh', title: 'Transição gradual', text: 'Você não precisa parar tudo que está fazendo para começar a atender.' },
  { icon: 'cross', title: 'ZERO equipamentos', text: 'Você só precisa das suas mãos para atender.' },
  { icon: 'bed', title: 'Comece em casa', text: 'Seus primeiros atendimentos na sua casa ou na casa da cliente.' },
];

const Benefits = () =>
<section className="section benefits-section">
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">Por que escolher</span>
        <h2 className="serif">
          Benefícios do<br/>
          <span className="script" style={{ fontSize: '1.2em' }}>Alma de Terapeuta</span>
        </h2>
        <div className="gold-line"></div>
      </div>

      <div className="benefits-grid">
        {BENEFITS.map((b, i) =>
        <div className="benefit-card reveal" key={i}>
            <span className="icon-circle lg"><Icon name={b.icon} /></span>
            <h3 className="serif">{b.title}</h3>
            <p>{b.text}</p>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
        <a href="#oferta" className="btn btn-lg">Quero me inscrever agora <span className="arrow">→</span></a>
      </div>
    </div>
  </section>;


const VSL = () =>
<section className="section">
    <div className="container">
      <div className="designer-note reveal" style={{
    margin: '0 auto 60px',
    maxWidth: '920px',
    border: '2px dashed var(--gold)',
    background: 'rgba(184,151,89,0.06)',
    padding: '40px 32px',
    textAlign: 'center',
    position: 'relative'
  }}>
        <span style={{
      position: 'absolute',
      top: '-12px',
      left: '24px',
      background: 'var(--cream)',
      padding: '0 12px',
      fontSize: '11px',
      letterSpacing: '0.18em',
      color: 'var(--gold-deep)',
      fontWeight: 600
    }}>NOTA AO DESIGNER</span>
        <p style={{ margin: 0, color: 'var(--ink)', fontSize: '15px', lineHeight: 1.7, fontFamily: 'inherit', fontStyle: 'normal' }}>
          Inserir aqui um <strong>mockup composto</strong> com:<br/>
          <strong>FOTO DA ANA</strong> · <strong>FOTO DA PLATAFORMA</strong> · <strong>IMAGENS FECHADAS EM MÃOS</strong>
          <br/>
          <span style={{ color: 'var(--ink-soft)', fontSize: '13px', fontStyle: 'italic' }}>(evitar mostrar que é massagem)</span>
        </p>
      </div>

      <div className="section-head reveal">
        <span className="smallcaps">Conheça o método</span>
        <h2 className="serif">
          O que é o <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>Alma de Terapeuta?</em>
        </h2>
        <div className="gold-line"></div>
        <p>
          É um curso rápido e prático para você aprender uma técnica validada até por médicos para alívio de dores. É a melhor forma de você iniciar os seus atendimentos, ganhando R$ 100 por hora, ainda nos próximos 3 dias, mesmo começando do zero e sem ter que comprar equipamentos.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }} className="reveal">
        <a href="#oferta" className="btn btn-lg">Quero começar agora <span className="arrow">→</span></a>
      </div>
    </div>
  </section>;


const PAINS = [
{ icon: 'wallet', title: 'Deseja uma renda extra mas não sabe por onde começar', text: 'Você sente que pode mais, mas as opções parecem distantes da sua realidade — sem clareza, sem direção.' },
{ icon: 'refresh', title: 'Quer uma transição de carreira sem riscos', text: 'Trocar de profissão parece um salto no escuro. Você quer segurança antes de dar o próximo passo.' },
{ icon: 'coin', title: 'Acha que precisa de muito dinheiro para investir', text: 'A ideia de abrir um negócio próprio sempre vem acompanhada de um custo alto que você não pode bancar.' },
{ icon: 'spark', title: 'Tem medo de começar do zero sem experiência', text: 'Você teme não ter as habilidades certas, não saber por onde começar e travar logo nos primeiros passos.' },
{ icon: 'clock', title: 'Não tem tempo para longos cursos e formações', text: 'Sua rotina já é cheia. Você precisa de algo objetivo, prático, que caiba na vida real que você vive hoje.' },
{ icon: 'handshake', title: 'Quer ajudar pessoas e ser reconhecida pelo que faz', text: 'Você sente um chamado para cuidar, transformar vidas — e ser valorizada de verdade pelo seu trabalho.' }];


const Pains = () =>
<section className="section" style={{ background: 'var(--warm-white)' }}>
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">Para quem é</span>
        <h2 className="serif">
          Curso feito <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>sob medida</em><br/>
          para você que:
        </h2>
        <div className="gold-line"></div>
      </div>

      <div className="pains-board reveal" style={{
    maxWidth: '760px',
    margin: '0 auto',
    background: 'var(--cream)',
    border: '1px solid var(--line)',
    padding: '48px 56px',
    position: 'relative',
    boxShadow: 'var(--shadow-soft)'
  }}>
        <span style={{ position: 'absolute', top: 0, left: 0, width: '60px', height: '2px', background: 'var(--gold)' }}></span>
        <span style={{ position: 'absolute', bottom: 0, right: 0, width: '60px', height: '2px', background: 'var(--gold)' }}></span>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
      'Quer ganhar melhor',
      'Quer ajudar pessoas e ser reconhecida pelo que faz',
      'Não quer investir em equipamentos caros',
      'Quer uma renda extra mas não sabe por onde começar',
      'Quer uma transição de carreira sem riscos',
      'Não tem tempo para cursos longos'].
      map((item, i) =>
      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', fontSize: '18px', color: 'var(--ink)', lineHeight: 1.5, paddingBottom: '20px', borderBottom: i < 5 ? '1px solid var(--line)' : 'none' }}>
              <span style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--gold)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-deep)', marginTop: '-2px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
              </span>
              <span>{item}</span>
            </li>
      )}
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
        <a href="#oferta" className="btn btn-lg">Quero me inscrever agora <span className="arrow">→</span></a>
      </div>
    </div>
  </section>;


const Bio = () =>
<section className="bio-section" id="bio">
    <div className="bio-bg"></div>
    <Petal style={{ top: '8%', right: '5%', width: '60px' }} rotate={25} variant="float-slow" speed={0.2} />
    <Petal style={{ bottom: '12%', left: '4%', width: '80px' }} rotate={-15} variant="float" speed={0.15} />
    <div className="sparkles"></div>
    <div className="container">
      <div className="bio-grid">
        <div className="bio-photo reveal" style={{ boxShadow: 'none', borderRadius: 0, overflow: 'visible', background: 'transparent' }}>
          <img src="assets/ana_bio.webp" alt="Ana Martha" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
        </div>

        <div className="bio-text reveal">
          <span className="smallcaps">Conheça sua professora</span>
          <h2 className="serif">
            Quem é<br />
            <span className="script">Ana Martha?</span>
          </h2>
          <p style={{ fontStyle: 'italic', color: 'var(--gold-deep)', fontSize: '18px', marginBottom: '28px' }}>
            Criadora do Método Alma de Terapeuta
          </p>
          <p>
            Ana Martha é referência nacional em terapia integrativa e formação de novas terapeutas.
            Há mais de uma década dedica sua vida a transformar mulheres comuns em profissionais
            confiantes, capazes de aliviar dores e construir uma renda digna a partir de suas próprias mãos.
          </p>
          <p>
            Seu método registrado já formou mais de cinquenta mil alunas em todo o Brasil — mulheres
            que partiram do zero, sem experiência prévia, e hoje têm agendas lotadas e o reconhecimento
            que sempre buscaram. Ana acredita que toda mulher carrega em si o dom de cuidar.
          </p>
          <p>
            O Alma de Terapeuta nasceu desse propósito: tornar acessível, prático e seguro o caminho
            de quem deseja viver da terapia e fazer a diferença na vida das pessoas ao redor.
          </p>

          <div className="bio-stats">
            <div className="bio-stat">
              <div className="num serif">+51 mil</div>
              <div className="label">Alunas formadas</div>
            </div>
            <div className="bio-stat">
              <div className="num serif">9.8</div>
              <div className="label">Reclame Aqui</div>
            </div>
            <div className="bio-stat">
              <div className="num serif">100%</div>
              <div className="label">Método exclusivo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;


const JOURNEY = [
{ d: '01', title: 'Aprenda a técnica', text: 'Em apenas 1 dia você aprende a técnica.' },
{ d: '02', title: 'Aplique a técnica', text: 'Depois de aprender, já aplica em alguém próximo a você.' },
{ d: '03', title: 'Assista à aula "Lista de Casamento"', text: 'E já faz o que eu vou te pedir lá imediatamente.' },
{ d: '04', title: 'Sua primeira cliente', text: 'Agende sua primeira sessão e receba o seu primeiro Pix com a Terapia do Toque.' }];


const Journey = () =>
<section className="section journey">
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">Sua jornada de transformação</span>
        <h2 className="serif">
          Do zero à sua primeira renda<br />
          <span className="script" style={{ fontSize: '1.1em' }}>em apenas 4 passos</span>
        </h2>
        <div className="gold-line"></div>
      </div>

      <div className="timeline">
        {JOURNEY.map((j, i) =>
      <div className="timeline-item reveal" key={i}>
            <div className="timeline-day">
              <div className="num serif">{j.d}</div>
              <div className="label">Passo</div>
            </div>
            <div className="timeline-content">
              <h3 className="serif">{j.title}</h3>
              <p>{j.text}</p>
            </div>
          </div>
      )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px' }} className="reveal">
        <p className="serif" style={{ fontSize: '24px', color: 'var(--gold-deep)', fontStyle: 'italic', marginBottom: '32px', letterSpacing: '0.02em' }}>
          É simples. É prático. É rápido.
        </p>
        <a href="#oferta" className="btn btn-lg">Garantir minha vaga com desconto <span className="arrow">→</span></a>
      </div>
    </div>
  </section>;


const INCLUDES = [
{ title: 'Método Registrado e Exclusivo', text: 'Técnica exclusiva, desenvolvida e registrada por mim, com resultados comprovados por milhares de alunas.' },
{ title: 'Aulas Práticas e Didáticas', text: 'Conteúdo simples de entender, direto ao ponto, para você absorver rápido e colocar em prática no mesmo dia.' },
{ title: 'Material de Estudos Ilustrado', text: 'Material completo, visual e fácil de consultar durante os seus atendimentos, em qualquer lugar que estiver.' },
{ title: 'Mensagens prontas para enviar', text: 'Mensagens para copiar e colar para conquistar suas primeiras pacientes através do WhatsApp, sem ser invasiva e sem constrangimento nenhum.' },
{ title: 'Monitor do curso no WhatsApp', text: 'Tire suas dúvidas diretamente com especialistas de forma humanizada, sempre que precisar.' },
{ title: 'Acesso Vitalício + Certificado', text: 'Acesse todas as aulas e materiais para sempre. Receba seu Certificado de Conclusão ao terminar o curso.' },
{ title: '30 Dias para experimentar', text: 'Não gostou? Você tem 30 dias para pedir seu dinheiro de volta, sem perguntas, sem burocracia, sem precisar explicar nada a ninguém.' },
{ title: 'Entre os Mais Bem Avaliados do Brasil', text: 'Alunas dão avaliações acima de 90/100 e estamos entre os mais indicados pela Hotmart no País.' }];


const Includes = () =>
<section className="section">
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">O que está incluso</span>
        <h2 className="serif">
          Tudo que você<br />
          <span className="script" style={{ fontSize: '1.2em' }}>vai receber</span>
        </h2>
        <div className="gold-line"></div>
      </div>
      <div className="includes-grid">
        {INCLUDES.map((it, i) =>
      <div className="include-item reveal" key={i}>
            <span className="include-check">✓</span>
            <div>
              <h4 className="serif">{it.title}</h4>
              <p>{it.text}</p>
            </div>
          </div>
      )}
      </div>
    </div>
  </section>;


const BONUSES = [
{ tag: 'Bônus 1', icon: 'gift', title: '10 Matrículas Gratuitas', text: 'Presenteie 10 pessoas importantes para caminhar junto com você no Alma de Terapeuta.' },
{ tag: 'Bônus 2', icon: 'user', title: '1 dia de Mentoria, em grupo, com a Ana Martha', text: 'Descubra como se tornar uma terapeuta indicada por médicos e reconhecida na sua região.' },
{ tag: 'Bônus 3', icon: 'bed', title: 'Protocolo "Maca Improvisada"', text: 'Como atender com excelência na casa do cliente ou em espaços pequenos.' },
{ tag: 'Bônus 4', icon: 'list', title: 'Guia de Indicações e Contraindicações', text: 'Para você não errar nada nos primeiros atendimentos e agir com segurança desde o início.' },
{ tag: 'Bônus 5', icon: 'rocket', title: 'Workshop: Como Perder o Medo de Atender', text: 'Workshop prático para você atender com confiança e profissionalismo desde o primeiro dia.' },
{ tag: 'Bônus 6', icon: 'calendar', title: 'Curso Agenda Lotada, Terapeuta Realizada', text: 'Estratégias completas para encher sua agenda e nunca mais ter um horário vazio na semana.' },
{ tag: 'Bônus 7', icon: 'hospital', title: 'Ingresso — Semana de Casos Clínicos', text: 'Como não travar diante de pacientes com lipedema, fibromialgia, pós-cirúrgico e dor crônica.' },
{ tag: 'Bônus 8', icon: 'wallet', title: 'R$ 100 de Cashback — TopCorpus', text: 'Presente em cashback na Formação Profissionalizante e Certificada TopCorpus.', value: 'Valor: R$ 100,00' },
{ tag: 'Bônus 9', icon: 'bag', title: 'R$ 97 em Cashback — Loja TopCorpus', text: 'Desconto especial na Loja de Produtos Terapêuticos TopCorpus para você começar equipada.', value: 'Valor: R$ 97,00' }];


const Bonuses = () =>
<section className="section bonus-section">
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">Somente para quem comprar hoje</span>
        <h2 className="serif">
          9 <em style={{ fontStyle: 'italic', color: 'var(--gold-deep)' }}>Presentes</em>
        </h2>
        <div className="gold-line"></div>
        <p>Presentes exclusivos para você garantir sua vaga nos próximos minutos.</p>
      </div>

      <div className="bonus-grid">
        {BONUSES.map((b, i) =>
      <div className="bonus-card reveal" key={i}>
            <span className="bonus-tag">{b.tag.toUpperCase()}</span>
            <span className="icon-circle lg"><Icon name={b.icon} /></span>
            <h4 className="serif">{b.title}</h4>
            <p>{b.text}</p>
            {b.value && <span className="bonus-value">{b.value}</span>}
          </div>
      )}
      </div>
    </div>
  </section>;


const TESTIMONIALS = [
{ name: 'Maria Silva', loc: 'Terapeuta — São Paulo, SP', initial: 'M', text: 'Eu não tinha experiência alguma com terapia. Em 7 dias estava atendendo, e consegui minha primeira cliente logo no segundo dia! O método é claro, prático e fácil de seguir.' },
{ name: 'Juliana Costa', loc: 'Terapeuta — Belo Horizonte, MG', initial: 'J', text: 'Nunca imaginei que em uma semana já estaria recebendo pela minha prática. O método é incrível e super didático! A Ana Martha realmente cuida de cada detalhe.' },
{ name: 'Carla Mendes', loc: 'Terapeuta — Curitiba, PR', initial: 'C', text: 'Eu tinha muito medo de começar, mas a Ana Martha me guiou em cada passo. Hoje tenho agenda cheia toda semana e uma renda que mudou minha vida.' },
{ name: 'Amanda Ferreira', loc: 'Terapeuta — Rio de Janeiro, RJ', initial: 'A', text: 'Comecei sem experiência alguma. Hoje tenho uma clientela fiel e uma renda que mudou completamente minha vida. Recomendo de olhos fechados.' },
{ name: 'Fernanda Lima', loc: 'Terapeuta — Salvador, BA', initial: 'F', text: 'O suporte no WhatsApp é excepcional. Me senti acompanhada em cada dúvida. Curso nota 10, sem dúvidas! Me trouxe segurança em todos os atendimentos.' },
{ name: 'Patricia Souza', loc: 'Terapeuta — Porto Alegre, RS', initial: 'P', text: 'O material ilustrado é tudo! Uso durante os atendimentos e me sinto muito mais segura e profissional. Foi a melhor decisão que tomei nos últimos anos.' }];


const Testimonials = () => {
  const [idx, setIdx] = React.useState(0);
  const total = TESTIMONIALS.length;
  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const [perView, setPerView] = React.useState(3);

  React.useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 700) setPerView(1);else
      if (w < 1080) setPerView(2);else
      setPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIdx = Math.max(0, total - perView);
  const safeIdx = Math.min(idx, maxIdx);

  const next = () => setIdx((i) => i >= maxIdx ? 0 : i + 1);
  const prev = () => setIdx((i) => i <= 0 ? maxIdx : i - 1);

  // Auto-rotate
  React.useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => {
        const m = Math.max(0, total - perView);
        return i >= m ? 0 : i + 1;
      });
    }, 6000);
    return () => clearInterval(t);
  }, [perView, total]);

  const slideWidth = 100 / perView;
  const offset = safeIdx * slideWidth;

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="smallcaps">Histórias reais</span>
          <h2 className="serif">
            O que nossas alunas<br />
            <span className="script" style={{ fontSize: '1.2em' }}>dizem</span>
          </h2>
          <div className="gold-line"></div>
        </div>

        <div className="testi-carousel reveal">
          <button className="testi-arrow testi-arrow-prev" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <div className="testi-viewport">
            <div className="testi-track" style={{ transform: `translateX(-${offset}%)` }}>
              {TESTIMONIALS.map((t, i) =>
              <div className="testi-slide" style={{ flex: `0 0 ${slideWidth}%` }} key={i}>
                  <div className="testi">
                    <div className="testi-quote">"</div>
                    <div className="testi-stars">★ ★ ★ ★ ★</div>
                    <p className="testi-text">"{t.text}"</p>
                    <div className="testi-author">
                      <span className="testi-avatar serif">{t.initial}</span>
                      <div>
                        <div className="testi-name">{t.name}</div>
                        <div className="testi-loc">{t.loc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="testi-arrow testi-arrow-next" onClick={next} aria-label="Próximo">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>

        <div className="testi-dots">
          {Array.from({ length: maxIdx + 1 }).map((_, i) =>
          <button
            key={i}
            className={`testi-dot ${i === safeIdx ? 'active' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Ir para slide ${i + 1}`} />

          )}
        </div>
      </div>
    </section>);

};

const Pricing = () =>
<section className="section pricing-section" id="oferta">
    <div className="sparkles"></div>
    <Petal style={{ top: '8%', left: '5%', width: '70px' }} rotate={-25} variant="float" speed={0.18} />
    <Petal style={{ bottom: '15%', right: '6%', width: '85px' }} rotate={20} variant="float-rev" speed={0.22} />
    <div className="container">
      <div className="section-head reveal">
        <span className="smallcaps">A sua vez chegou</span>
        <h2 className="serif">
          Escolha sua<br />
          <span className="script" style={{ fontSize: '1.2em' }}>transformação hoje</span>
        </h2>
        <div className="gold-line"></div>
        <p>+ 9 Bônus Exclusivos · Acesso Vitalício · Certificado Incluso</p>
      </div>

      <div className="pricing-card reveal">
        <span className="smallcaps">Curso Alma de Terapeuta</span>
        <h3 className="serif" style={{ fontSize: '32px', margin: '14px 0 0' }}>
          O método completo
        </h3>
        <div className="divider-ornament">
          <span className="diamond"></span>
        </div>

        <ul className="pricing-list">
          <li><span className="pricing-check">✓</span><span><strong>Método Alma de Terapeuta</strong> — registrado e exclusivo</span></li>
          <li><span className="pricing-check">✓</span><span><strong>Material Ilustrado Completo</strong> — Para consultar sempre</span></li>
          <li><span className="pricing-check">✓</span><span><strong>Mensagens prontas</strong> — para conquistar sua primeira cliente</span></li>
          <li><span className="pricing-check">✓</span><span><strong>Monitor no WhatsApp</strong> — com especialistas reais</span></li>
          <li><span className="pricing-check">✓</span><span><strong>Certificado de Conclusão</strong></span></li>
          <li><span className="pricing-check">✓</span><span><strong>+ 9 presentes</strong> (10 matrículas adicionais, mentoria em grupo, workshops e cashbacks)</span></li>
          <li><span className="pricing-check">✓</span><span><strong>Garantia total</strong> — 30 dias de prazo de arrependimento</span></li>
        </ul>

        <div className="price">
          <span className="label">Por apenas</span>
          <div className="install serif">
            <span className="x">6x de</span>
            <span className="currency">R$</span>7,83
          </div>
          <span className="or">— ou — <strong>R$ 47 à vista</strong></span>
        </div>

        <a href="https://pay.hotmart.com/P105538261K?off=x8lj2o7d&checkoutMode=10" target="_blank" rel="noopener" className="btn btn-lg" style={{ width: '100%' }}>Comprar agora <span className="arrow">→</span></a>

        <div className="pay-icons">
          🔒 Pagamento seguro · Hotmart · Garantia de 30 dias
        </div>
      </div>
    </div>
  </section>;


const Guarantee = () =>
<section className="section guarantee" style={{ height: "492px", fontSize: "17px" }}>
    <div className="container">
      <div className="guarantee-grid reveal" style={{ width: "1016px", height: "270px" }}>
        <div className="guarantee-seal" style={{ border: 'none', background: 'transparent', padding: 0 }}>
          <img src="assets/selo-30-dias.webp" alt="Selo de Garantia 30 dias" style={{ height: 'auto', display: 'block', width: "255px" }} />
        </div>
        <div className="guarantee-text">
          <span className="smallcaps">Compre com tranquilidade</span>
          <h3 className="serif" style={{ marginTop: '10px' }}>30 dias de prazo de arrependimento</h3>
          <p>
            Testamos o nosso curso por você. Se por qualquer motivo — e olha que qualquer
            motivo mesmo — você não ficar satisfeita, você tem até 30 dias para nos
            avisar e devolvemos cada centavo investido. Sem perguntas, sem burocracia,
            sem precisar explicar nada a ninguém.
          </p>
          <p style={{ marginTop: '14px' }}>
            São <em>30 dias inteiros</em> para experimentar o método sem risco algum.{' '}
            Porque confiamos 100% no nosso método.
          </p>
        </div>
      </div>
    </div>
  </section>;


const FAQS = [
{ q: 'Preciso ter experiência prévia para fazer o curso?', a: 'Não! O Alma de Terapeuta foi criado especialmente para quem está começando do zero. O método é passo a passo e você estará pronta para atender já no primeiro dia de curso.' },
{ q: 'Quanto tempo vou gastar por dia no curso?', a: 'Cada aula dura entre 20 e 40 minutos e foi pensada para caber na rotina mais cheia. Em apenas 1 hora por dia você consegue avançar com tranquilidade e absorver todo o conteúdo.' },
{ q: 'Precisarei de materiais ou equipamentos especiais?', a: 'Você pode começar com o que tem em casa. Ensinamos inclusive o protocolo "maca improvisada", para que nada seja barreira para o seu início. À medida que avança, você se equipa no seu ritmo.' },
{ q: 'O acesso ao curso tem prazo de validade?', a: 'Não. Você tem acesso vitalício a todas as aulas e materiais. Sempre que houver atualizações, você também terá acesso sem custo adicional.' },
{ q: 'Como funciona a garantia de satisfação?', a: 'Você tem 30 dias de prazo de arrependimento. Se por qualquer motivo você não ficar satisfeita, basta entrar em contato dentro desse período e devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.' },
{ q: 'Como recebo os bônus após a compra?', a: 'Todos os bônus são liberados automaticamente na sua área de aluna logo após a confirmação do pagamento. Você recebe um e-mail com os acessos e instruções completas.' },
{ q: 'Posso parcelar no cartão de crédito?', a: 'Sim! O investimento pode ser dividido em até 6x de R$ 7,83 no cartão de crédito, ou R$ 47 à vista via PIX, boleto ou cartão.' }];


const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-head reveal">
          <span className="smallcaps">Tire suas dúvidas</span>
          <h2 className="serif">
            Perguntas<br />
            <span className="script" style={{ fontSize: '1.2em' }}>frequentes</span>
          </h2>
          <div className="gold-line"></div>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) =>
          <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{f.a}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

const FinalCTA = () =>
<section className="section final-cta">
    <Petal style={{ top: '15%', left: '8%', width: '65px', opacity: 0.4 }} rotate={-30} variant="float" speed={0.2} />
    <Petal style={{ bottom: '20%', right: '7%', width: '90px', opacity: 0.4 }} rotate={15} variant="float-rev" speed={0.18} />
    <div className="container reveal" style={{ position: 'relative', zIndex: 2 }}>
      <span className="smallcaps" style={{ color: 'var(--gold-light)' }}>Sua nova vida começa agora</span>
      <h2 className="serif" style={{ marginTop: '14px' }}>
        Comece hoje a construir<br />
        <span className="script" style={{ fontSize: '1.15em' }}>a vida que você merece</span>
      </h2>
      <div className="gold-line"></div>
      <p>
        Mais de <strong style={{ color: 'var(--gold-light)' }}>7.000 mulheres</strong> já transformaram
        suas vidas com o Alma de Terapeuta. Agora é a sua vez.
      </p>
      <a href="https://pay.hotmart.com/P105538261K?off=x8lj2o7d&checkoutMode=10" target="_blank" rel="noopener" className="btn btn-lg">Garantir minha vaga agora <span className="arrow">→</span></a>
    </div>
  </section>;


const Footer = () =>
<footer className="footer">
    <div className="container">
      <img src="assets/logo.png" alt="Alma de Terapeuta" style={{ height: '50px', margin: '0 auto 20px', filter: 'brightness(1.1)' }} />
      <div>© 2026 Alma de Terapeuta · Todos os direitos reservados</div>
      <div className="footer-links">
        <a href="#">Política de Privacidade</a>·
        <a href="#">Termos de Uso</a>·
        <a href="#">Contato</a>
      </div>
      <p className="footer-disclaimer">
        Este produto é distribuído pela plataforma Hotmart. Os depoimentos apresentados são relatos
        reais de alunas. Os resultados podem variar de acordo com o esforço e dedicação de cada pessoa.
      </p>
    </div>
  </footer>;


const StickyCTA = () =>
<div className="sticky-cta">
    <a href="https://pay.hotmart.com/P105538261K?off=x8lj2o7d&checkoutMode=10" target="_blank" rel="noopener" className="btn">Quero me inscrever <span className="arrow">→</span></a>
  </div>;


Object.assign(window, {
  PromoBar, Nav, Hero, Trust, Benefits, VSL, Pains, Bio, Journey,
  Includes, Bonuses, Testimonials, Pricing, Guarantee, FAQ,
  FinalCTA, Footer, StickyCTA
});