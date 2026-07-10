document.addEventListener("DOMContentLoaded",()=>{
  const targets=document.querySelectorAll(".paper,.cards article,.benefit-grid article,.route-grid article,.doc-grid article,.risk-grid article,.lang-card,.faq details,.calculator");
  targets.forEach(el=>el.classList.add("fade-in"));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")}),{threshold:.12});
  targets.forEach(el=>observer.observe(el));

  const ids=["education","career","income","age","japanese","research","bonus"];
  const button=document.getElementById("calculate");
  const score=document.getElementById("score");
  const judgment=document.getElementById("judgment");
  button.addEventListener("click",()=>{
    const total=ids.reduce((sum,id)=>sum+Number(document.getElementById(id).value),0);
    score.textContent=total+"点";
    if(total>=80){
      judgment.textContent="80点以上です。高度専門職の基準と、永住1年短縮の立証条件を個別に確認しましょう。";
    }else if(total>=70){
      judgment.textContent="70点以上です。高度専門職の基礎要件と立証資料を確認しましょう。";
    }else{
      judgment.textContent="70点まであと"+(70-total)+"点です。加算項目と証明資料を再確認してください。";
    }
  });
});