 function toggleMenu() {
      const menu = document.getElementById("menuItems");
      const icon = document.getElementById("menuIcon");

      menu.classList.toggle("show");

      if (menu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }

    // Toggle dropdowns on mobile
    document.querySelectorAll(".dropdown > a").forEach(link => {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          const dropdownContent = this.nextElementSibling;
          if (dropdownContent && dropdownContent.classList.contains("dropdown-content")) {
            dropdownContent.classList.toggle("show-dropdown");
          }
        }
      });
    });
