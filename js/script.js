const phone = {
    brand: "apple",
    model: 13,
    memory: 256,
    on: true,
    specs: ["call", "text", "games","surfing"],
    calling: function() {
        phone.on = !phone.on
    } 
};

console.log(phone);
