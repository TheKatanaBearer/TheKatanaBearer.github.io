

  lucide.createIcons();

  const body = document.body;
  const toggleBtn = document.querySelector(".toggle-btn");
  const quoteEl = document.getElementById("security-quote");

  toggleBtn.addEventListener("click", () => {
    const currentIcon = toggleBtn.querySelector("svg, i");
    currentIcon.style.opacity = "0";
    currentIcon.style.transform = "rotate(180deg) scale(0.6)";
    setTimeout(() => {
      body.classList.toggle("light-mode");
      if (body.classList.contains("light-mode")) {
        toggleBtn.innerHTML = '<i data-lucide="sun"></i>';
        quoteEl.style.color = "black";
      } else {
        toggleBtn.innerHTML = '<i data-lucide="moon"></i>';
        quoteEl.style.color = "white";
      }
      lucide.createIcons();
      const newIcon = toggleBtn.querySelector("svg");
      newIcon.style.opacity = "0";
      newIcon.style.transform = "rotate(-180deg) scale(0.6)";
      setTimeout(() => {
        newIcon.style.opacity = "1";
        newIcon.style.transform = "rotate(0) scale(1)";
        newIcon.style.stroke = body.classList.contains("light-mode") ? "black" : "white";
      }, 50);
    }, 300);
  });

  // Encrypted-style reveal with defender on new line
  const text = "Checkpoint Secured Great Defender !";
  const el = document.getElementById("encrypted-text");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
  let i = 0;

  function reveal() {
    if (i < text.length) {
      let iterations = 0;
      const interval = setInterval(() => {
        if (iterations > 1) {
          clearInterval(interval);
          el.textContent = el.textContent.slice(0, -1) + text[i];
          i++;
          setTimeout(reveal, 10);
        } else {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          el.textContent = el.textContent.slice(0, -1) + randomChar;
          iterations++;
        }
      }, 10);
      el.textContent += " ";
    } else {
      const sub = document.getElementById("sub-text");
      const lines = [
        "Name: Hamza Khan Tariq",
        "University: Quaid e Azam ( 5th semester )",
        `Currently: Intern @ <img src="pta-logo.png" alt="PTA" style="height:2.6em; vertical-align:middle; margin-left:5px; filter: brightness(1.8);"> ( Cyber Wing )`
      ];

      let lineIdx = 0;

      function typeLine() {
        if (lineIdx < lines.length) {
          const line = lines[lineIdx];
          if (line.includes("<img")) {
            sub.innerHTML += line + "<br>";
            lineIdx++;
            setTimeout(typeLine, 80);
          } else {
            let charIdx = 0;
            function typeChar() {
              if (charIdx < line.length) {
                sub.textContent += line[charIdx];
                charIdx++;
                setTimeout(typeChar, 25);
              } else {
                sub.textContent += "\n";
                lineIdx++;
                setTimeout(typeLine, 80);
              }
            }
            typeChar();
          }
        } else {
          const resumeLink = document.getElementById("resume-link");
          setTimeout(() => { resumeLink.classList.add("show-resume"); }, 300);
          setTimeout(() => {
            const quotes = [
              "“Security is not a product, but a process.”",
              "“Trust, but verify.”",
              "“An ounce of prevention is worth a pound of cure.”",
              "“The only secure computer is the one that is unplugged.”",
              "“Security through obscurity is no security at all.”",
              "“Protecting information is protecting people.”",
              "“In security, the weakest link is the human element.”"
            ];
            quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
            quoteEl.style.opacity = "1";
          }, 600);
        }
      }

      typeLine();
    }
  }

  reveal();

  // Navbar scroll highlight
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a:not(.toggle-btn)");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if(window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if(link.getAttribute("href") === "#" + current){
        link.classList.add("active");
      }
    });

    const backToTop = document.getElementById("backToTop");
    if(window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  // Back to top button
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({top:0, behavior:"smooth"});
  });

  // Animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-event, .certificate, .education-title').forEach(el => {
  observer.observe(el);
});


const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  if(window.scrollY > window.innerHeight) {
    heroImage.style.opacity = '0.30'; // faded in other sections
  } else {
    heroImage.style.opacity = '0.55'; // full opacity in home
  }
});

const skillElements = document.querySelectorAll('.skill');
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      // stagger animation
      skillElements.forEach((el, index) => {
        setTimeout(() => el.classList.add('show'), index * 100);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('#skills .skills-container').forEach(el => {
  skillObserver.observe(el);
});


// Animate contact card and type "REACH OUT TO ME, DEFENDER!" on scroll
// Animate contact card on scroll
const contactCard = document.querySelector('.contact-card');
const contactLeft = document.querySelector('.contact-left');
const contactRight = document.querySelector('.contact-right');

const contactObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      contactCard.classList.add('show');
      contactRight.classList.add('show');

      // Typing animation inside contact-left
      const text = "REACH OUT TO ME, DEFENDER!";
      contactLeft.textContent = ""; // clear initially
      let idx = 0;

      function typeChar() {
        if(idx < text.length){
          contactLeft.textContent += text[idx];
          idx++;
          setTimeout(typeChar, 80);
        }
      }

      typeChar();

      observer.disconnect(); // only animate once
    }
  });
}, { threshold: 0.3 });

contactObserver.observe(contactCard);









