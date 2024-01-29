var data= {
    chatinit:{
        title: ["Hola <span class='emoji'> &#128075;</span>","¿Te puedo ayudar en algo?"],
        options: ["Lugar","Quiero book","Tu turno","Señas dificil? 🙌"]
    },
    lugar: {
        title:["Dejame "],
        options:['Tengo lugar de fotos ','O tu elegir queres',],
        url : {
            
        }
    },
    
    quiero: {
        title:["Aqui dejo link:"],
        options:["Entre pagina web"],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos"]
        }
    },
    tu: {
        title:["Gracias por su respuesta",],
        options:['Viernes','Sabado','Domingo',],
        url : {
            
        }
    },
    señas: {
        title:["No te preocupes","Te enseño rapidisimo y facilisimo."],
        options:['Videos',],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    beauty: {
        title:["Thanks for your response","Here are some beauty products for you","Click on it to know more"],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    mobiles: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: ["song 1","song 2","song 3","song 4","song 5"],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos"]
        }
    },
    hollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    bollywood: {
        title: ["Thanks for your response","Here are some genre based movies"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    web: {
        title: ["Thanks for your response","Here are some genre based web series"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#","#"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["YouTube","Netflix","Amazon Prime","Hot Star"],
        url: {
            more:"https://www.youtube.com/",
            link:["#","#","#","#","#"]
        }
    },
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='Comenzar chat'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='Cerrar chat';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'Ver</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}

