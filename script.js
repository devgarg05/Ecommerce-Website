document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar'); // Hamburger icon
    const close = document.getElementById('close'); // Close icon
    const nav = document.getElementById('navbar'); // Navbar

   
    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.add('active'); // Show navbar
        });
    }

  
    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('active'); 
        });
    }
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message submitted! We'll get back to you soon.");
  });
  

// cart.html
  function removeRow(btn) {
    const row = btn.closest("tr");
    row.remove();
  }

  function updateSubtotal(input) {
    const row = input.closest("tr");
    const price = parseFloat(row.cells[3].innerText.replace("$", ""));
    const quantity = parseInt(input.value);
    const subtotal = price * quantity;
    row.querySelector(".subtotal").innerText = `$${subtotal.toFixed(2)}`;
  }


//   apply coupon js
  function applyCoupon() {
    const input = document.getElementById('couponCode').value.trim();
    const subtotalElem = document.getElementById('subtotal');
    const totalElem = document.getElementById('total');

    let subtotal = 335;

    if (input.toLowerCase() === "save10") {
      subtotal *= 0.9;
      alert("Coupon applied: 10% off!");
    } else if (input) {
      alert("Invalid coupon code");
    }

    subtotalElem.innerText = `$${subtotal.toFixed(2)}`;
    totalElem.innerText = `$${subtotal.toFixed(2)}`;
  }