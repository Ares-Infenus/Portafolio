const text = "Welcome to the terminal simulation...";
    const speed = 100; // Velocidad en ms por letra
    let i = 0;

    function typeEffect() {
      const textElement = document.getElementById("text");
      if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
      }
    }

    typeEffect();