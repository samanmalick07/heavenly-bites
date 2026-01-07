/* SLIDESHOW - index.html */
(function(){
  const slides = ["img1.jpg", "img2.jpg", "img3.jpg"];
  let i = 0;

  const slideEl = document.getElementById("slide");
  const prev = document.getElementById("prevSlide");
  const next = document.getElementById("nextSlide");

  function showSlide(x){
    slideEl.src = slides[x];
  }

  setInterval(()=>{
    i = (i+1) % slides.length;
    showSlide(i);
  }, 3000);

  prev.onclick = ()=>{ i = (i-1+slides.length)%slides.length; showSlide(i); }
  next.onclick = ()=>{ i = (i+1)%slides.length; showSlide(i); }
})();

/* DISCOUNT TIMER */
(function(){
  const el = document.getElementById("homepage-timer");
  const end = Date.now() + 30*60*1000;

  setInterval(()=>{
    const left = Math.floor((end - Date.now())/1000);
    if(left <= 0){
      el.textContent = "Offer Ended";
      return;
    }
    el.textContent = Math.floor(left/60)+"m "+(left%60)+"s";
  }, 1000);
})();

/* FLIPPED CARD */
document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector(".card");
  
    card.addEventListener("click", function() {
      card.classList.toggle("flipped");
    });
  });
  
function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill all fields!";
        return;
    }

    // Example login credentials
    if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login successful! Redirecting…";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
    }
}
function placeOrder() {
let name = document.getElementById("name").value;
let card = document.getElementById("card").value;


if (name === "" || card === "") {
alert("Please fill all required fields");
} else {
alert("Order placed successfully!\nThank you, " + name);
}
}

// ================= CART SYSTEM =================

// Get cart from storage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count badge
function updateCartCount() {
    const cart = getCart();
    let count = 0;

    cart.forEach(item => count += item.qty);

    const badge = document.getElementById("cart-count");
    if (badge) badge.innerText = count;
}

// Add item to cart
function addToCart(name, price) {
    let cart = getCart();

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name, price, qty: 1 });
    }

    saveCart(cart);
    updateCartCount();
    alert(name + " added to cart");
}

// Attach click events to buttons
document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const name = btn.dataset.item;
            const price = Number(btn.dataset.price);
            addToCart(name, price);
        });
    });

    updateCartCount();
});

function showImage(src) {
    var overlay = document.getElementById("overlay");
    var overlayImage = document.getElementById("overlayImage");
  
    overlayImage.src = src;
    overlay.style.display = "block";
  }
  
  document.getElementById("overlay").addEventListener("click", function() {
    this.style.display = "none";
  });
  
