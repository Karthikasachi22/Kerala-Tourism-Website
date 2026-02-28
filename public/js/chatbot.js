function initChatbot(){

const btn = document.getElementById("ai-btn");
const chat = document.getElementById("chatbox");
const close = document.getElementById("close-chat");
const send = document.getElementById("send-btn");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

// wait until html exists
if(!btn){
    setTimeout(initChatbot,200);
    return;
}

/* OPEN CHAT */
btn.onclick = () => {
    chat.style.display = "flex";
};

/* CLOSE CHAT */
close.onclick = () => {
    chat.style.display = "none";
};

/* SEND */
send.onclick = sendMessage;
input.addEventListener("keypress", e=>{
    if(e.key==="Enter") sendMessage();
});

async function sendMessage(){

    const text = input.value.trim();
    if(!text) return;

    add(text,"user");
    input.value="";

    add("Typing...","bot");

    try{
       const res = await fetch("http://localhost:3000/api/chat",{

            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message:text})
        });

        const data = await res.json();

        messages.lastChild.remove();
        add(data.reply,"bot");

    }catch{
        messages.lastChild.remove();
        add("Server not responding","bot");
    }
}

function add(text,type){
    const div=document.createElement("div");
    div.className=type;
    div.innerText=text;
    messages.appendChild(div);
    messages.scrollTop=messages.scrollHeight;
}

}

initChatbot();
