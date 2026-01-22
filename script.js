// Mobile Menu Toggle with icon rotation
      const menuBtn = document.getElementById("menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        menuBtn.classList.toggle("active");
      });

      // Close menu when clicking outside
      document.addEventListener("click", (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
          mobileMenu.classList.add("hidden");
          menuBtn.classList.remove("active");
        }
      });

      // Close menu when clicking a link
      document.querySelectorAll("#mobile-menu a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuBtn.classList.remove("active");
        });
      });

      // Smooth Scroll
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href");
          if (targetId === "#") return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        });
      });

      // Animate progress bars when in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBars =
                entry.target.querySelectorAll(".progress-bar");
              progressBars.forEach((bar) => {
                // Reset animation first
                bar.style.animation = "none";
                // Force reflow
                void bar.offsetWidth;
                // Apply animation
                bar.style.animation =
                  "progressAnimation 1.5s ease-out forwards";
              });
            }
          });
        },
        { threshold: 0.2 }
      );

      // Observe skills section
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        observer.observe(skillsSection);
      }

      // Form Submission with Alert
      const contactForm = document.getElementById("contactForm");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form values
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const message = document.getElementById("message").value;

          // Show success alert with emoji
          alert(
            `🎉 Thank you for your message, ${name}!\n\n📧 I have received your inquiry and will get back to you at:\n${email}\n\n⏰ I usually respond within 24 hours.\n\n💬 Your message:\n"${message.substring(
              0,
              100
            )}${message.length > 100 ? "..." : ""}"`
          );

          // Reset form
          this.reset();
        });
      }

      // Project button functions
      function viewProject(projectName) {
        alert(
          `👩‍💻 Viewing code for ${getProjectTitle(
            projectName
          )} project!\n\n🔗 GitHub repository will open in a new tab.\n\nNote: This is a demo alert. In a real portfolio, this would link to your GitHub.`
        );
      }

      function demoProject(projectName) {
        alert(
          `🚀 Launching live demo of ${getProjectTitle(
            projectName
          )}!\n\n🌐 The project will open in a new window.\n\nNote: This is a demo alert. In a real portfolio, this would link to your deployed project.`
        );
      }

      function getProjectTitle(projectName) {
        const titles = {
          portfolio: "Personal Portfolio",
          "flower-shop": "Flower Shop E-commerce",
          calculator: "Calculator App",
          "plant-shop": "Plant Shop E-commerce",
        };
        return titles[projectName] || "Project";
      }

      // Add scroll effect to navbar
      window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
        if (window.scrollY > 100) {
          nav.classList.add("shadow-md", "bg-white/98");
        } else {
          nav.classList.remove("shadow-md", "bg-white/98");
          nav.classList.add("bg-white/95");
        }
      });

      // Trigger progress bars animation on page load
      document.addEventListener("DOMContentLoaded", function () {
        if (skillsSection) {
          const progressBars = skillsSection.querySelectorAll(".progress-bar");
          progressBars.forEach((bar) => {
            // Start animation after a small delay
            setTimeout(() => {
              bar.style.animation = "progressAnimation 1.5s ease-out forwards";
            }, 500);
          });
        }
      }); 