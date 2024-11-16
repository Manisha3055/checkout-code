document.querySelectorAll('input[type="radio"]').forEach((radio) => {
  radio.addEventListener('change', function () {
    document.querySelectorAll('input[type="radio"]').forEach((btn) => {
      btn.style.accentColor = ''; 
    });

    this.style.accentColor = '#e0435d';
  });
});

document.querySelectorAll(".unit-box").forEach((unitBox) => {
  unitBox.addEventListener("click", function () {
    document.querySelectorAll(".unit-box").forEach((box) => {
      box.style.backgroundColor = ""; 
      box.style.border = ""; 
      box.querySelector(".options").style.display = "none"; 
    });

    this.style.backgroundColor = "#FFF9FA";
    this.style.border = "2px solid #FF6B82";

    const options = this.querySelector(".options");
    if (options.style.display === "none" || options.style.display === "") {
      options.style.display = "block"; 
    } else {
      options.style.display = "none"; 
    }


    const radio = this.querySelector('input[type="radio"]');
    if (!radio.checked) {
      radio.checked = true;
      radio.dispatchEvent(new Event("change")); 
    }
    updateTotalPrice(radio);
  });
});

document.querySelectorAll('input[name="unit"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    updateTotalPrice(this);
  });
});

function updateTotalPrice(radio) {
  const priceText = radio.closest(".unit-box").querySelector(".current-price").textContent;
  const price = parseFloat(priceText.replace("$", "").replace(" USD", ""));
  document.getElementById("total-price").textContent = "Total: $" + price.toFixed(2) + " USD";
}

document.querySelector('input[name="unit"]:checked').dispatchEvent(new Event("change"));

