
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("page-content");
  const title = document.getElementById("window-title");
  const buttons = document.querySelectorAll(".nav-button");

  const pages = {
    home: {
      title: "welcome to my little world",
      html: `
        <div class="page-kicker">✧ WELCOME TO MY LITTLE WORLD ✧</div>
        <h1>Welcome, Little Butterfly! 🦋</h1>
        <p><em>A little universe filled with love, dreams, and a touch of lavender.</em></p>

        <div class="soft-note">
          <h3>♡ Hello, I'm Fairy Purple!</h3>
          <p>Welcome to my little corner of the internet! 💜 Here I keep all the things that make me happy: my favorite stories, my passions, the music that accompanies me, and those special moments that deserve a place of their own.</p>
          <p>This is my little hideaway filled with purple shades, butterflies, and beautiful dreams. Make yourself comfortable, explore my little world, and stay as long as you like. ✨</p>
        </div>

        <h2>💜 My Special Corner: XingQiu</h2>
        <p>A special place dedicated to <strong>Eliot Huang Xing and Kipuka Qiu</strong>, my favorite pairing. Here, I want to collect their photos, unforgettable moments, precious memories, and everything that makes XingQiu so special to me. 🦋</p>

        <h2>✧ Explore My Little World ✧</h2>
        <div class="card-grid">
          <button class="content-card" data-go="fanfics" type="button"><span class="card-art">📖</span><span class="card-copy"><strong>FANFICS</strong><small>Stories, emotions, and little universes.</small></span></button>
          <button class="content-card" data-go="reviews" type="button"><span class="card-art">🎀</span><span class="card-copy"><strong>REVIEWS</strong><small>My thoughts on series and stories.</small></span></button>
          <button class="content-card" data-go="gallery" type="button"><span class="card-art">📸</span><span class="card-copy"><strong>GALLERY</strong><small>Photos, memories, and special moments.</small></span></button>
          <button class="content-card" data-go="idols" type="button"><span class="card-art">🦋</span><span class="card-copy"><strong>MY IDOLS</strong><small>My favorites and my XingQiu corner.</small></span></button>
        </div>
        <p style="text-align:center;color:#9c71c6"><em>“A little world, a lot of love, and endless purple dreams.” ♡</em></p>
      `
    },

    about: {
      title: "a little about me",
      html: `
        <div class="page-kicker">♡ NICE TO MEET YOU ♡</div>
        <h1>About Me 🎀</h1>
        <div class="soft-note">
          <h3>Welcome to my world!</h3>
          <p>I'm Fairy Purple, a little butterfly with a heart full of stories, music, and dreams. 💜</p>
          <p>This website is my personal space to share the things I love, discover beautiful stories, and keep precious memories.</p>
        </div>
        <h2>Things I Love ✨</h2>
        <p>♡ Music and beautiful voices</p>
        <p>♡ Series, stories, and romantic moments</p>
        <p>♡ My favorite idols and pairings</p>
        <p>♡ Purple aesthetics, butterflies, and cute details</p>
        <p>Thank you for visiting my little corner of the internet! 🦋</p>
      `
    },

    fanfics: {
      title: "stories & fanfics",
      html: `
        <div class="page-kicker">✧ WORDS BECOME WORLDS ✧</div>
        <h1>My FanFics 📖</h1>
        <p>Every story is a little universe waiting to be discovered. 💜</p>
        <div class="soft-note">
          <h3>♡ My Story Collection</h3>
          <p>This is where my stories will live: romance, emotions, unforgettable moments, and characters who stay in our hearts.</p>
          <p><em>More stories coming soon...</em> ✨</p>
        </div>
      `
    },

    reviews: {
      title: "my reviews",
      html: `
        <div class="page-kicker">☆ STORIES THAT STAY WITH US ☆</div>
        <h1>My Reviews 🎬</h1>
        <p>My personal thoughts about the series, films, and stories I enjoy.</p>
        <div class="soft-note">
          <h3>♡ Reviews Corner</h3>
          <p>I'll share my favorite moments, characters, emotions, and what makes each story special to me.</p>
          <p><em>My first reviews are coming soon...</em> 🎀</p>
        </div>
      `
    },

    gallery: {
      title: "little moments gallery",
      html: `
        <div class="page-kicker">📸 LITTLE MOMENTS, BIG FEELINGS 📸</div>
        <h1>My Gallery 🦋</h1>
        <p>A little collection of beautiful moments and memories.</p>
        <div class="soft-note">
          <h3>💜 XingQiu Corner</h3>
          <p>This space is reserved for photos and special memories of Eliot Huang Xing and Kipuka Qiu.</p>
          <p>Gallery photos will be added here when we're ready.</p>
        </div>
      `
    },

    idols: {
      title: "my favorite people",
      html: `
        <div class="page-kicker">♡ PEOPLE WHO MAKE ME SMILE ♡</div>
        <h1>My Idols 🌟</h1>
        <div class="soft-note">
          <h3>💜 My XingQiu Corner</h3>
          <p>A special place for Eliot Huang Xing and Kipuka Qiu, their work, their moments, and everything that makes this pairing so precious to me. 🦋</p>
        </div>
        <h2>My Little Collection</h2>
        <p>Here I'll collect information, photos, favorite moments, and other lovely details about my favorite people.</p>
        <p><em>This little collection will grow soon...</em> ✨</p>
      `
    }
  };

  function showPage(name) {
    const page = pages[name] || pages.home;

    content.innerHTML = page.html;
    title.textContent = page.title;

    buttons.forEach((button) => {
      const active = button.dataset.page === name;
      button.classList.toggle("active", active);
      button.setAttribute("aria-current", active ? "page" : "false");
    });

    content.scrollTop = 0;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showPage(button.dataset.page);
    });
  });

  content.addEventListener("click", (event) => {
    const card = event.target.closest("[data-go]");
    if (card) showPage(card.dataset.go);
  });

  showPage("home");
});
