// JavaScript-bestand (script.js bijvoorbeeld)
document.addEventListener('DOMContentLoaded', function() {
  var socialIcons = document.querySelectorAll('.socials img');

  socialIcons.forEach(function(icon) {
    var originalSrc = icon.src; // Sla het originele src-attribuut op

    icon.addEventListener('mouseenter', function() {
      // Verander de src naar een andere afbeelding bij hover
      var className = icon.classList[0]; // Haal de eerste klasse op (bijv. 'icon-facebook')
      var hoverSrc = 'images/' + className + '-orange.svg'; // Dynamisch pad naar hover-afbeelding
        icon.src = hoverSrc;
    });

    icon.addEventListener('mouseleave', function() {
      // Herstel de originele src wanneer de muis het element verlaat
      icon.src = originalSrc;
    });
  });
});