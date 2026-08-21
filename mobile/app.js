const chat=document.getElementById("chat"), welcome=document.getElementById("welcome"), form=document.getElementById("composer"), input=document.getElementById("input");
const settings=document.getElementById("settings"), plans=document.getElementById("plans");
const keyEl=document.getElementById("apiKey"), modelEl=document.getElementById("model");
let messages=JSON.parse(localStorage.getItem("warhex_ai_messages")||"[]");
keyEl.value=localStorage.getItem("warhex_ai_key")||"";
modelEl.value=localStorage.getItem("warhex_ai_model")||modelEl.value;
function render(){document.querySelectorAll(".message").forEach(x=>x.remove());messages.forEach(m=>addBubble(m.role,m.content));if(messages.length)welcome.style.display="none";}
function addBubble(role,text){const row=document.createElement("div");row.className="message "+(role==="user"?"user":"ai");const b=document.createElement("div");b.className="bubble";b.textContent=text;row.appendChild(b);chat.appendChild(row);chat.scrollTop=chat.scrollHeight;}
function save(){localStorage.setItem("warhex_ai_messages",JSON.stringify(messages));}
async function ask(text){
 const key=localStorage.getItem("warhex_ai_key"); if(!key){settings.classList.remove("hidden");throw new Error("أدخل API Key من الإعدادات أولًا.");}
 messages.push({role:"user",content:text});addBubble("user",text);save();
 const thinking={role:"assistant",content:"جارٍ التفكير…"};addBubble("assistant",thinking.content);
 try{
  const res=await fetch("https://api.together.xyz/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+key},body:JSON.stringify({model:localStorage.getItem("warhex_ai_model")||modelEl.value,messages:messages.filter(m=>m.role==="user"||m.role==="assistant").slice(-20),temperature:.7})});
  const data=await res.json(); if(!res.ok) throw new Error(data?.error?.message||"فشل طلب الذكاء الاصطناعي");
  document.querySelectorAll(".message").at(-1).remove();
  const answer=data.choices?.[0]?.message?.content||"لم تصل إجابة.";
  messages.push({role:"assistant",content:answer});addBubble("assistant",answer);save();
 }catch(e){document.querySelectorAll(".message").at(-1)?.remove();addBubble("assistant","خطأ: "+e.message);}
}
form.addEventListener("submit",e=>{e.preventDefault();const t=input.value.trim();if(!t)return;input.value="";ask(t)});
document.querySelectorAll("[data-prompt]").forEach(b=>b.onclick=()=>{input.value=b.dataset.prompt;form.requestSubmit()});
document.getElementById("settingsBtn").onclick=()=>settings.classList.remove("hidden");
document.getElementById("closeSettings").onclick=()=>settings.classList.add("hidden");
document.getElementById("saveSettings").onclick=()=>{localStorage.setItem("warhex_ai_key",keyEl.value.trim());localStorage.setItem("warhex_ai_model",modelEl.value.trim());settings.classList.add("hidden")};
render();
