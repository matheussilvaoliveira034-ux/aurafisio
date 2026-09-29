const $=id=>document.getElementById(id);
const slot=(k,n,cls="")=>`<div class="slot ${cls}" data-img="${k}" data-name="${n}"></div>`;

$("mq").innerHTML=(t=>t+t)([
  "Fisioterapia ortopédica", "Quiropraxia", "Liberação miofascial", 
  "Fisioterapia respiratória", "Fisioterapia pediátrica", "Espirometria", 
  "Reabilitação de atletas", "Clínica em Patos de Minas, MG"
].map(x=>`<span>${x}</span>`).join(""));

const pair=(a,d,n)=>`<div class="pair">${slot(a,n+" – ANTES")}${slot(d,n+" – DEPOIS")}</div>`;

$("ba").innerHTML=[
  ["Recuperação de mobilidade e alívio da dor"],
  ["Reabilitação pós-cirúrgica ortopédica"],
  ["Tratamento de coluna e quiropraxia"],
  ["Reabilitação esportiva"]
].map((c,i)=>`<div class="bc"><span class="badge">Antes e depois</span>${pair("ad"+(i+1)+"_antes","ad"+(i+1)+"_depois","CASO "+(i+1))}<div class="cap">${c[0]}</div></div>`).join("");

$("tg").innerHTML=[
  ["Fisioterapia Ortopédica", "Tratamento especializado para lesões articulares, musculares e tendíneas com foco na recuperação funcional."],
  ["Quiropraxia", "Ajustes articulares e manipulação para alívio de dores na coluna e melhora da postura."],
  ["Liberação Miofascial", "Técnicas manuais para relaxamento dos tecidos, melhora da flexibilidade e alívio de tensões."],
  ["Fisioterapia Respiratória", "Cuidado focado na expansão pulmonar, melhora da capacidade e alívio de sintomas respiratórios."],
  ["Fisioterapia Pediátrica", "Atendimento lúdico e especializado para o desenvolvimento motor infantil."],
  ["Espirometria", "Exame de função pulmonar para diagnóstico preciso e seguro."],
  ["Reabilitação de Atletas", "Protocolos avançados para retorno seguro ao esporte e prevenção de novas lesões."],
  ["Tratamento da Dor", "Abordagens integradas para controle e eliminação de dores crônicas e agudas."]
].map((c,i)=>`<div class="tc">${slot("trat"+(i+1),"TRATAMENTO "+(i+1))}<div class="b"><h3>${c[0]}</h3><p>${c[1]}<\/p><a href="#">Saber mais →</a></div></div>`).join("");

$("rg").innerHTML=[
  ["Alívio de dores lombares e correção postural"],
  ["Recuperação completa de atletas"],
  ["Reabilitação de movimento pós-lesão"]
].map((c,i)=>`<div class="bc"><span class="badge">Resultado</span>${pair("res"+(i+1)+"_antes","res"+(i+1)+"_depois","RESULTADO "+(i+1))}<div class="cap">${c}</div></div>`).join("");

$("ag").innerHTML=[
  ["Tatiana Rodrigues","TR","2 meses atrás","O melhor atendimento de Patos de Minas, fisioterapeuta Eli Cesar muito humano e muito dedicado."],
  ["Sthéfany Lorrane","SL","2 meses atrás","Profissionais extremamente competentes, atendimento de qualidade e humanizado! O fisioterapeuta Eli o mais top!! Indico muuuuuito!!"],
  ["Murilo Balsanelli","MB","um mês atrás","Melhor clínica de patos"],
  ["Nilcilene Ferreira","NF","um mês atrás","Recentemente, eu tive a sorte de ganhar um sorteio incrível no @aura fisioterapia... O ambiente transmite uma paz inexplicável."],
  ["Marina Isabella Rodrigues","MI","2 meses atrás","Ótimo atendimento! Profissionais capacitados! Recomendo."],
  ["Juliana Rodrigues","JR","um mês atrás","Excelente resultado!"]
].map(r=>`<div class="rv"><div class="h"><div class="av">${r[1]}</div><div><b style="font-weight:500;font-size:14px">${r[0]}</b><small>${r[2]}</small></div></div><div class="s">★★★★★</div><p>${r[3]}</p><em><b>G</b>Avaliação do Google</em></div>`).join("");

$("wg").innerHTML=[
  ["👥","Atendimento com 2 Drs. e 1 Dra.","Equipe altamente capacitada, unindo diferentes expertises para cuidar de você de forma integrada."],
  ["♡","Atendimento humanizado","Escuta atenta, acolhimento e planos de cuidados desenhados individualmente para as suas necessidades."],
  ["☰","Avaliação individualizada","Cada sessão é pensada a partir de um diagnóstico preciso da sua condição física."],
  ["＋","Serviços completos em um só lugar","Da ortopedia à reabilitação de atletas e espirometria, tudo estruturado para o seu bem-estar."],
  ["∿","Movimento, saúde e qualidade de vida","Foco total em devolver a sua autonomia, mobilidade e livrar você das dores."],
  ["⌖","Em Patos de Minas, MG","Localização de fácil acesso na Rua Osvando Amaro Teixeira, Bairro Laranjeiras."]
].map(c=>`<div class="wc"><i>${c[0]}</i><h3>${c[1]}</h3><p>${c[2]}</p></div>`).join("");

/* aplica imagens */
document.querySelectorAll("[data-img]").forEach(e=>{const s=IMG[e.dataset.img];
 if(s){e.classList.add("has");e.innerHTML=`<img src="${s}" alt="${e.dataset.name}">`}
 else e.innerHTML=`<span>📷 ${e.dataset.name}<br><small style="font-weight:400">IMG.${e.dataset.img}</small></span>`});
document.querySelectorAll(".wpp").forEach(a=>a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`);

/* ============ EFEITOS ============ */
const hd=document.querySelector("header"),nv=document.querySelector("nav"),bg=$("bg");
addEventListener("scroll",()=>hd.classList.toggle("sc",scrollY>10),{passive:true});
const closeM=()=>{nv.classList.remove("open");bg.classList.remove("x")};
bg.onclick=()=>{nv.classList.toggle("open");bg.classList.toggle("x")};
nv.querySelectorAll("a").forEach(a=>a.addEventListener("click",closeM));
addEventListener("resize",()=>innerWidth>820&&closeM());

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".eyebrow,h2,.sub,.hero h1,.hero p,.hb,.chk,.hi,.fr,.sg>div,.st,.bc,.tc,.rv,.wc,.dif,.cta,.rg+a").forEach(e=>{
 e.classList.add("fx");const i=[...e.parentElement.children].indexOf(e);e.style.transitionDelay=Math.min(i,5)*90+"ms";io.observe(e)});

const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;co.unobserve(e.target);
 const t=e.target.textContent,n=parseInt(t),suf=t.replace(/[0-9]/g,"");let s=null;
 const f=ts=>{s=s||ts;const p=Math.min((ts-s)/1200,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)))+suf;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}));
document.querySelectorAll(".st b").forEach(b=>co.observe(b));

const ids=["inicio","sobre","tratamentos","diferencial","resultados","contato"],links=[...nv.querySelectorAll("a")];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
ids.forEach(i=>$(i)&&so.observe($(i)));