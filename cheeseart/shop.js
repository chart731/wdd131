document.addEventListener("DOMContentLoaded", function () {
    const checkoutButton = document.querySelector(".checkout");
    const totalFeesDisplay = document.getElementById("total-fees");

    checkoutButton.addEventListener("click", function () {
        const quantities = document.querySelectorAll(".quantity");
        let totalFees = 0;

        quantities.forEach(input => {
            const quantity = parseInt(input.value) || 0;
            const price = parseFloat(input.dataset.price); // read data-price
            totalFees += quantity * price;
        });

        const shopForm = document.getElementById("main-shop");
        const checkoutMessage = document.getElementById("summary");
        const checkoutMessage2 = document.getElementById("summary2");
        const footer = document.getElementById("main-footer");

        if (totalFees >= 100) {
            const info = { totalFee: totalFees };
            checkoutMessage2.innerHTML = checkoutTemplate2(info);
            shopForm.style.display = "none";
            checkoutButton.style.display = "none";
            footer.style.display = "none";
        } else {
            const info = { totalFee: totalFees };
            checkoutMessage.innerHTML = checkoutTemplate(info);
            shopForm.style.display = "none";
            checkoutButton.style.display = "none";
            footer.style.display = "none";
        }
    });
});

  function checkoutTemplate(info) {
  return `<section class="success">
      <h2>Checkout Successful</h2>
      <p>Thank you for supporting Cheese Does Art!   We appreciate the support.  
      You owe: 
       $${info.totalFee.toFixed(2)} in fees. </p>
        </section>`
}

function checkoutTemplate2(info) {
  return `<section class="success">
      <h2>Checkout Successful</h2>
      <p>Thank you for supporting Cheese Does Art!   We appreciate the generous support.  
      You are one of our biggest supporters!   Thank you for helping a budding artist 
      acheive their dreams.  You owe:  
       $${info.totalFee.toFixed(2)} in fees. </p>
        </section>`
}