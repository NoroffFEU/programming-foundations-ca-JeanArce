const phone = {
    brand: "apple",
    description: "Apple Inc. (formerly Apple Computer Inc.) is an American computer and consumer electronics company famous for creating the iPhone, iPad and Macintosh computers. Apple is one of the largest companies globally with a market cap of over 2 trillion dollars.",
    model: 13,
    memory: 256,
    on: true,
    specs: ["call", "text", "games","surfing"],
    switchOn: function() {
        phone.on = true;
    }, 
    switchOff: function() {
        phone.on = false;
    }
};

const brandEl = document.getElementById("brand");
brandEl.innerText = phone.brand.toUpperCase();
brandEl.style.color = "red";

const descpEl = document.querySelector("#description");
descpEl.innerText = phone.description;

const specsEl = document.querySelector("#specs");
for(let i=0; i<phone.specs.length; i++) {
    let val=phone.specs[i];

    const node = document.createElement("li");
    node.innerText = val;
    specsEl.appendChild(node);

}


const onEl = document.querySelector("#on");
onEl.innerText = phone.on;

const offButtonEl = document.querySelector("#offButton");
offButtonEl.onclick = function(){
   phone.switchOff();
   onEl.innerText = phone.on;
   
};

const onButtonEl = document.querySelector("#onButton");
onButtonEl.onclick = function(){
   phone.switchOn();
   onEl.innerText = phone.on;
   
};