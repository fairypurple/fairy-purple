

(() => {
  "use strict";

  const content = document.getElementById("page-content");
  const title = document.getElementById("window-title");
  const buttons = document.querySelectorAll(".nav-button");

  const pages = {
    home: {
      file: "home.html",
      title: "welcome to my little world"
    },
    about: {
      file: "about.html",
      title: "a little about me"
    },
    fanfics: {
      file: "fanfics.html",
      title: "stories & fanfics"
    },
    reviews: {
      file: "reviews.html",
      title: "my reviews"
    },
    gallery: {
      file: "gallery.html",
      title: "little moments gallery"
    },
    idols: {
      file: "idols.html",
      title: "my favorite people"
    }
  };

  if (!content || !title) {
    console.error("Fairy Purple: content panel not found.");
    return;
  }

  async function showPage(name) {
    const page = pages[name] || pages.home;

    buttons.forEach((button) => {
      const active = button.dataset.page === name;
      button.classList.toggle("active", active);

      if (active) {
        button.setAttribute("aria-current", "page");
      } else {
        button.removeAttribute("aria-current");
      }
    });

    title.textContent = page.title;
    content.innerHTML = "<p>Loading... 💜</p>";

    try {
      const response = await fetch("./" + page.file, {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error("HTTP " + response.status);
      }

      const html = await response.text();
      content.innerHTML = html;
      content.scrollTop = 0;
    } catch (error) {
      console.error("Fairy Purple page error:", error);

      content.innerHTML = `
        <div class="soft-note">
          <h3>Oops! 💜</h3>
          <p>We couldn't load this page.</p>
          <p>Please check that <strong>${page.file}</strong>
          exists in the same folder as index.html.</p>
          <p>You can try clicking the navigation button again.</p>
        </div>
      `;
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showPage(button.dataset.page);
    });
  });

  content.addEventListener("click", (event) => {
    const card = event.target.closest("[data-go]");

    if (card) {
      showPage(card.dataset.go);
    }
  });

  showPage("home");
})();
