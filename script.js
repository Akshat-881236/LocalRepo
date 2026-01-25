// User profile photo (update path if needed)
const PROFILE_PHOTO = "https://akshat-881236.github.io/LearningClub-Key-of-Success-Learning-Point/PdfLibrary/PdfFiles/Akshat.png";

// Real-time date and greetings
function setHeaderInfo() {
    const welcomeMsg = document.getElementById("welcomeMsg");
    const dateInfo = document.getElementById("dateInfo");
    const now = new Date();
    const hour = now.getHours();
    let greet = "Hello";
    if (hour < 6) greet = "Good Night";
    else if (hour < 12) greet = "Good Morning";
    else if (hour < 18) greet = "Good Afternoon";
    else greet = "Good Evening";
    welcomeMsg.textContent = `${greet}, visitors!`;

    // Format date: Day, Date, Time
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let minute = now.getMinutes().toString().padStart(2, '0');
    let second = now.getSeconds().toString().padStart(2, '0');
    let time = `${now.getHours().toString().padStart(2,'0')}:${minute}:${second}`;
    dateInfo.textContent = `It's ${days[now.getDay()]}, ${now.toLocaleDateString()} | ${time}`;
}
// Clock update every second
setHeaderInfo();
setInterval(setHeaderInfo, 1000);

// "Thought of the Day" typing effect
const thoughts = [
    "Push past limits, embrace growth every single day.",
    "Push past limits, find happiness in each step.",
    "Push past limits, keep making small progress.",
    "Push past limits, believe you can do wonders.",
    "To shine like a sun, first burn like a sun.",
    "Life is too short, Learn new things in every seconds of your life.",
    "Life is too short, Utilize every pace of time.",
    "Life is too short, Once the time go cannot be recover."
];
function animateThought() {
    const output = document.getElementById("typedThought");
    let idx = Math.floor(Math.random() * thoughts.length);
    let phrase = thoughts[idx];
    let words = phrase.split(" ");
    // First 3-5 words static, rest typed
    let staticLen = Math.max(3, Math.min(5, Math.floor(words.length/2)));
    let staticPart = words.slice(0,staticLen).join(" ");
    let toType = words.slice(staticLen).join(" ");
    output.textContent = staticPart + " ";
    let i=0;
    let typeInterval = setInterval(() => {
        if (i < toType.length) {
            output.textContent = staticPart + " " + toType.slice(0,i+1);
            i++;
        } else clearInterval(typeInterval);
    }, 50);
}
animateThought();
setInterval(animateThought, 6000); // every 6 sec new thought animates

// Sidebar toggle logic
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarProfile = document.getElementById("sidebarProfile");
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
sidebarProfile.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
sidebar.addEventListener("transitionend", function() {
    if (sidebar.classList.contains("active")) {
        sidebarProfile.style.display = 'flex';
    } else {
        sidebarProfile.style.display = 'none';
    }
});

// Expandable sidebar menu logic
document.querySelectorAll(".expandable").forEach(item => {
    item.addEventListener("click", function(e) {
        e.stopPropagation();
        // Collapse others
        document.querySelectorAll('.expandable').forEach(li => {
            if (li !== item) li.classList.remove('active');
        });
        item.classList.toggle('active');
    });
});

// Visit card SPA logic
const cards = document.querySelectorAll('.visit-card');
const spaContainer = document.getElementById('spaContainer');
const dashboardSection = document.getElementById('dashboardSection');

cards.forEach(card => {
    card.addEventListener('click', () => {
        loadSPA(card.dataset.card);
    });
});

// SPA templates for each card
function loadSPA(cardType) {
    let html = `
    <div class="spa-content">
        <div class="spa-inner">
            <div class="spa-layer spa-layer-1">
                <div class="spa-layer spa-layer-2">
                    <div class="spa-layer spa-layer-3">
    `;

    switch(cardType) {

        /* ================= BIO ================= */
        case "bio":
            html += `
            <section class="spa-section bio-section" id="bioSection">
                <header class="section-header">
                <button class="spa-close" onclick="exitSPA()">&times;</button>
                    <i class="bi bi-person-fill"></i>
                    <h2>Personal Info</h2>
                </header>

                <div class="profile-wrapper">
                    <div class="profile-ring">
                        <img src="${PROFILE_PHOTO}" class="profile-img">
                        <hr class="hr-icon">
                    </div>
                </div>

                <div class="info-table">
                    <div class="info-row"><span>Name</span><span>Akshat Prasad</span></div>
                    <div class="info-row"><span>Father</span><span>Mr. Sanjay Prasad</span></div>
                    <div class="info-row"><span>Mother</span><span>Mrs. Leela Prasad</span></div>
                    <div class="info-row"><span>Location</span><span>Kherki Daula, Gurugram, Haryana</span></div>
                </div>

                <article class="bio-text">
                    Passionate developer and lifelong learner focused on building scalable web and AI-powered systems.
                </article>

                <footer class="section-footer bio-footer">

  <div class="footer-shell">
    <div class="footer-layer layer-1">
      <div class="footer-layer layer-2">
        <div class="footer-layer layer-3">

          <div class="social-inline">

            <!-- LinkedIn -->
            <div class="social-box linkedin-box">
              <div class="social-wrap">
                <div class="social-icon">
                  <a target="_blank"
                     href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=akshat-prasad-b53936379">
                    <svg viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.104-.92 2-1.99 2S1 4.604 1 3.5 1.92 1.5 2.99 1.5s1.99.896 1.99 2zM.5 8.5h4.98v13H.5v-13zM9.5 8.5h4.77v1.78h.07c.66-1.25 2.28-2.57 4.71-2.57 5.04 0 5.97 3.32 5.97 7.64v8.15h-4.98v-7.22c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.88-2.77 3.81v7.34H9.5v-13z"/></svg>
                  </a>
                </div>
                <span class="social-label">LinkedIn</span>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="social-box whatsapp-box">
              <div class="social-wrap">
                <div class="social-icon">
                  <a target="_blank"
                     href="https://wa.me/917838250289?text=Hello%20Akshat%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.94 11.94 0 0012 .04 11.9 11.9 0 003.36 3.5 11.96 11.96 0 00.04 12c0 2.05.54 3.98 1.56 5.7L0 24l6.65-1.72A11.96 11.96 0 0012 24c6.62 0 12-5.38 12-12 0-1.96-.44-3.8-1.48-5.52zM12 21.5c-1.47 0-2.9-.4-4.14-1.16l-.3-.19-3.95 1.02 1.06-3.85-.2-.31A8.44 8.44 0 013.5 12c0-4.7 3.82-8.52 8.5-8.52 4.7 0 8.52 3.82 8.52 8.52 0 4.7-3.82 8.52-8.52 8.52zM17.3 14.1c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.8.98-.98 1.18-.18.2-.36.22-.66.07-.3-.15-1.26-.47-2.4-1.49-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2 0-.38-.05-.53-.05-.15-.68-1.6-.93-2.2-.25-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.52.07-.8.35-.28.28-1.08 1.05-1.08 2.56 0 1.5 1.1 2.95 1.25 3.16.15.2 2.16 3.3 5.24 4.62 3.08 1.32 3.08.88 3.64.83.57-.05 1.78-.73 2.03-1.45.25-.73.25-1.36.18-1.45-.06-.08-.25-.13-.55-.28z" /></svg>
                  </a>
                </div>
                <span class="social-label">WhatsApp</span>
              </div>
            </div>

            <!-- Email -->
            <div class="social-box email-box">
              <div class="social-wrap">
                <div class="social-icon">
                  <a target="_blank"
                     href="mailto:akshatpsd2005@gmail.com">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </a>
                </div>
                <span class="social-label">Email</span>
              </div>
            </div>

            <!-- GitHub -->
            <div class="social-box github-box">
              <div class="social-wrap">
                <div class="social-icon">
                  <a target="_blank"
                     href="https://github.com/Akshat-881236">
                    <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67c.5.09.68-.22.68-.48c0-.24-.01-.87-.01-1.71c-2.78.62-3.37-1.36-3.37-1.36c-.45-1.18-1.11-1.5-1.11-1.5c-.91-.64.07-.63.07-.63c1 .07 1.53 1.05 1.53 1.05c.9 1.56 2.36 1.11 2.94.85c.09-.67.35-1.11.64-1.37c-2.22-.26-4.56-1.13-4.56-5.04c0-1.11.39-2.02 1.03-2.73c-.1-.26-.45-1.32.1-2.75c0 0 .84-.27 2.75 1.04c.8-.23 1.66-.34 2.51-.34c.85 0 1.71.11 2.51.34c1.91-1.31 2.75-1.04 2.75-1.04c.55 1.43.2 2.49.1 2.75c.64.71 1.03 1.62 1.03 2.73c0 3.92-2.34 4.78-4.57 5.03c.36.32.68.95.68 1.92c0 1.39-.01 2.5-.01 2.84c0 .26.18.58.69.48c3.97-1.35 6.84-5.17 6.84-9.67C22 6.58 17.52 2 12 2z"/></svg>
                  </a>
                </div>
                <span class="social-label">GitHub</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

            </section>
            `;
            break;

        /* ================= EDUCATION ================= */
        case "education":
            html += `
            <section class="spa-section edu-section" id="eduSection">
                <header class="section-header">
                <button class="spa-close" onclick="exitSPA()">&times;</button>
                    <i class="bi bi-book"></i>
                    <h2>Education</h2>
                </header>

                <div class="edu-block">
                    <h3>Class 10th</h3>
                    <div class="edu-grid">
                        <span>School</span><span>Shishu Kalyan Senior Secondary School</span>
                        <span>Board</span><span>CBSE</span>
                        <span>Roll No</span><span>17136031</span>
                        <span>Year</span><span>2022</span>
                        <span>Max Marks</span><span>500</span>
                        <span>Marks Obt.</span><span>392</span>
                        <span>Percentage</span><span>78.5%</span>
                    </div>
                    <a class="doc-link" href="https://ik.imagekit.io/2412361999/Image-145609/in.gov.cbse-SSCER-171360312022.pdf?updatedAt=1764337480011" target="_blank">View DMC</a>
                </div>

                <div class="edu-block">
                    <h3>Class 12th</h3>
                    <div class="edu-grid">
                        <span>School</span><span>Government Senior Secondary School</span>
                        <span>Board</span><span>BSEH</span>
                        <span>Roll No</span><span>3024077960</span>
                        <span>Year</span><span>2024</span>
                        <span>Max Marks</span><span>500</span>
                        <span>Marks Obt.</span><span>371</span>
                        <span>CGPA</span><span>06.80</span>
                    </div>
                    <a class="doc-link" href="https://ik.imagekit.io/2412361999/Image-145609/in.org.bseh-HSCER-30240779602024MARCH.pdf?updatedAt=1764337479998" target="_blank">View DMC</a>
                </div>

                <div class="edu-block">
                    <h3>BCA</h3>
                    <div class="edu-grid">
                        <span>University</span><span>Maharshi Dayanand University , Rohtak</span>
                        <span>College</span><span>DPG School of Technology & Mgmt</span>
                        <span>Student ID</span><span>881238</span>
                        <span>University Registration Number</span><span>2412361999</span>
                        <span>Exam Roll No</span><span>6101912</span>
                        <span>Semester 1 SGPA</span><span>8.2</span>
                        <span>DMC</span><span><a class="doc-link" href="https://ik.imagekit.io/2412361999/Image-145609/in.ac.mdurohtak-DGMST-610191220242412361999I.pdf?updatedAt=1764337480245" target="_blank">View</a></span>
                        <span>Semester 2 SGPA</span><span>8.6</span>
                        <span>Academic Year</span><span>2024–2027</span>
                    </div>
                </div>
            </section>
            `;
            break;

        /* ================= SKILLS ================= */
        case "skills":
            html += `
            <section class="spa-section skill-section" id="skillSection">
                <header class="section-header">
                <button class="spa-close" onclick="exitSPA()">&times;</button>
                    <i class="bi bi-lightbulb"></i>
                    <h2>Skills & Future Scope</h2>
                </header>

                <article class="skill-card">
                    <h3>JavaScript</h3>
                    <p>Used for SPA, UI logic, and AI integration. Future scope includes Web AI, Node.js, and SaaS platforms.</p>
                </article>

                <article class="skill-card">
                    <h3>Python</h3>
                    <p>Automation, backend APIs, AI systems, and ML pipelines. Long-term goal: intelligent agents.</p>
                </article>

                <article class="skill-card">
                    <h3>Web Development</h3>
                    <p>HTML, CSS, Bootstrap, SPA architecture. Target: scalable educational & enterprise platforms.</p>
                </article>

                <article class="skill-card">
                    <h3>Git & GitHub</h3>
                    <p>Version control, CI-ready workflows, and collaborative development.</p>
                </article>
            </section>
            `;
            break;

        /* ================= PROJECTS ================= */
        case "projects":
            html += `
            <section class="spa-section project-section" id="projectSection">
                <header class="section-header">
                    <i class="bi bi-kanban"></i>
                    <h2>Projects</h2>
                    <button class="spa-close" onclick="exitSPA()">&times;</button>
                </header>

                <div class="project-card">
                    <h3>Akshat Network Hub</h3>
                    <p>A centralized dashboard showing all of my project supporting Quick Navigation.</p>
                    <a href="https://akshat-881236.github.io/AkshatNetworkHub/" target="_blank">Visit Project</a>
                </div>

                <div class="project-card">
                    <h3>Learning Hub</h3>
                    <p>Academic resource manager with offline support and PDF canvas.</p>
                    <a href="#" target="_blank">Visit Project</a>
                </div>

                <div class="project-card">
                    <h3>Portfolio Website</h3>
                    <p>SPA-based portfolio with dynamic UI and contact workflow. This project is the root of my Web Development Journey.</p>
                    <a href="https://akshat-881236.github.io/Portfolio-881236" target="_blank">Visit Project</a>
                </div>

                <footer class="section-footer">
                    <a class="link-btn" href="https://akshat-881236.github.io/Portfolio-881236/Projects.htm">View All Projects</a>
                </footer>
            </section>
            `;
            break;

        /* ================= CONTACT ================= */
        case "contact":
            html += `
            <section class="spa-section contact-section" id="contactSection">
                <header class="section-header">
                <button class="spa-close" onclick="exitSPA()">&times;</button>
                    <i class="bi bi-envelope"></i>
                    <h2>Contact Me</h2>
                </header>

                <form class="contact-form" onsubmit="sendContact(event)">
                    <div class="form-row"><input name="name" placeholder="Name" required></div>
                    <div class="form-row"><input type="email" name="email" placeholder="Email" required></div>
                    <div class="form-row"><input name="country" placeholder="Country" required></div>
                    <div class="form-row"><input name="state" placeholder="State"></div>
                    <div class="form-row"><input name="contact" placeholder="Contact Number" required></div>

                    <div class="form-row">
                        <select name="occupation" id="occupationSelect" required>
                            <option value="">Choose Occupation</option>
                            <option value="Student">Student</option>
                            <option value="Employee">Employee</option>
                            <option value="HR">HR</option>
                            <option value="Manager">Manager</option>
                        </select>
                    </div>

                    <div id="occupationDetail" class="occupation-detail"></div>

                    <button class="primary-btn">Send Email</button>
                </form>

                <div id="contactStatus" class="status-text"></div>
            </section>
            `;
            break;

        default:
            html += `No Details Available`;
    }

    html += `
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;

    spaContainer.innerHTML = html;
    spaContainer.classList.add("active");
    window.history.pushState({ spa: true, card: cardType }, "", "#" + cardType);

    if (cardType === "contact") {
        setTimeout(() => {
            document.getElementById("occupationSelect")
                ?.addEventListener("change", updateOccupationDetail);
        }, 160);
    }
}

window.exitSPA = function() 
{ spaContainer.classList.remove('active'); 
  setTimeout(() => spaContainer.innerHTML = '', 300); 
  window.history.pushState({}, "", window.location.pathname); 
} 

window.onpopstate = function(event) {
     if (event.state && event.state.spa) {
         loadSPA(event.state.card); 
        } else {
             exitSPA(); 
            } 
        }

function updateOccupationDetail(e) {
    const val = e.target.value;
    const det = document.getElementById("occupationDetail");
    let html = "";

    if (val === "Student") {
        html = `
        <div class="occ-block student-block">
            <div class="occ-layer l1"><div class="occ-layer l2">
                <label>College / School
                    <input type="text" name="college">
                </label>
                <label>Address
                    <input type="text" name="address">
                </label>
                <label>Current Year
                    <input type="text" name="year">
                </label>
                <label>Skills
                    <input type="text" name="skills">
                </label>
            </div></div>
        </div>`;
    }

    if (val === "Employee" || val === "HR" || val === "Manager") {
        html = `
        <div class="occ-block professional-block">
            <div class="occ-layer l1"><div class="occ-layer l2">
                <label>Company Name
                    <input type="text" name="company">
                </label>
                <label>Company Address
                    <input type="text" name="companyAddress">
                </label>
                <label>Hiring For
                    <input type="text" name="hiringFor">
                </label>
                <label>Stipend / Salary
                    <input type="text" name="salary">
                </label>
                <label>Hiring Process
                    <textarea name="hiringProcess"></textarea>
                </label>
                <label>Date of Interview
                    <input type="date" name="interviewDate">
                </label>
                <label>Documents Required
                    <input type="text" name="docsReq">
                </label>
            </div></div>
        </div>`;
    }

    det.innerHTML = html;
}


// Demo Contact Form Email (Mock, not live send. Implement backend for real)
window.sendContact = function(event) {
    event.preventDefault();
    // Gather form data and show "Sent!" message
    document.getElementById('contactStatus').textContent = 
        "Your details have been sent to akshatpsd2005@gmail.com.";
    setTimeout(() => exitSPA(), 2400);
}
