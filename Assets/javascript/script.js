document.getElementById("myformulaire").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    showPopup();
  });
  
  document.getElementById("closeBtn").addEventListener("click", function() {
    hidePopup();
  });
  
  function showPopup() {
    document.getElementById("popup").classList.add("show");
  }
  
  function hidePopup() {
    document.getElementById("popup").classList.remove("show");
  }

  
  