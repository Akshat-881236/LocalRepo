// User profile photo (update path if needed)
const PROFILE_PHOTO = "profile.jpg";

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
    welcomeMsg.textContent = `${greet}, Akshat!`;

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
    "Push past limits, believe you can do wonders."
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
    }, 70);
}
animateThought();
setInterval(animateThought, 12000); // every 12 sec new thought animates

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
    let html = `<button class="spa-close" onclick="exitSPA()">&times;</button><div class="spa-content">`;
    switch(cardType) {
        case "bio":
            html += `
            <h2><i class="bi bi-person-fill"></i> Personal Info</h2>
            <img src="${PROFILE_PHOTO}" style="width:84px;border-radius:50%;border:2px solid #74e7fa;background:#efefff;margin-top:12px;">
            <p><b>Name:</b> Akshat Pratap Singh</p>
            <p><b>Bio:</b> Passionate developer and lifelong learner. Loves solving problems and building new things.</p>
            <p><b>Location:</b> India</p>
            `;
            break;
        case "education":
            html += `
            <h2><i class="bi bi-book"></i> Education</h2>
            <p><b>Degree:</b> Bachelor of Technology (B.Tech)</p>
            <p><b>Institute:</b> XYZ University</p>
            <p><b>Year:</b> 2025</p>
            `;
            break;
        case "skills":
            html += `
            <h2><i class="bi bi-lightbulb"></i> Skills</h2>
            <ul>
                <li>JavaScript, Python, C++</li>
                <li>Web Development (HTML, CSS, Bootstrap, React)</li>
                <li>Git, GitHub</li>
            </ul>
            `;
            break;
        case "projects":
            html += `
            <h2><i class="bi bi-kanban"></i> Projects</h2>
            <ul>
                <li>LocalRepo (GitHub): Personal projects repository</li>
                <li>Portfolio Website</li>
            </ul>
            `;
            break;
        case "contact":
            html += `
            <h2><i class="bi bi-envelope"></i> Contact Me</h2>
            <form class="contact-form" onsubmit="sendContact(event)">
                <label>Name: <input type="text" name="name" required></label>
                <label>Email: <input type="email" name="email" required></label>
                <label>Country: <input type="text" name="country" required></label>
                <label>State: <input type="text" name="state"></label>
                <label>Contact Number: <input type="tel" name="contact" required></label>
                <label>Occupation: 
                    <select name="occupation" id="occupationSelect" required>
                        <option value="">Choose...</option>
                        <option value="Student">Student</option>
                        <option value="Employee">Employee</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                    </select>
                </label>
                <div id="occupationDetail"></div>
                <button type="submit">Send Email</button>
            </form>
            <div id="contactStatus" style="color:#23b922;margin-top:8px;"></div>
            `;
            break;
        default:
            html += `No Details Available`;
    }
    html += "</div>";
    spaContainer.innerHTML = html;
    spaContainer.classList.add('active');
    window.history.pushState({spa: true, card: cardType}, "", "#"+cardType);

    // Occupation change handler (Contact form extra fields)
    if (cardType === "contact") {
        setTimeout(() => {
            document.getElementById('occupationSelect')
                .addEventListener('change', updateOccupationDetail);
        }, 160);
    }
}

window.exitSPA = function() {
    spaContainer.classList.remove('active');
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

// Contact form: add extra fields
function updateOccupationDetail(e) {
    const val = e.target.value;
    const det = document.getElementById("occupationDetail");
    let html = "";
    if (val === "Student") {
        html = `
            <label>College/School Name: <input type="text" name="college"></label>
            <label>Address: <input type="text" name="address"></label>
            <label>Current Year: <input type="text" name="year"></label>
            <label>Skills: <input type="text" name="skills"></label>
        `;
    } else if (val === "Employee" || val === "HR" || val === "Manager") {
        html = `
            <label>Company Name: <input type="text" name="company"></label>
            <label>Company Address: <input type="text" name="companyAddress"></label>
            <label>Hiring For: <input type="text" name="hiringFor"></label>
            <label>Stipend/Salary (per Month): <input type="text" name="salary"></label>
            <label>Hiring Process: <textarea name="hiringProcess"></textarea></label>
            <label>Date of Interview: <input type="date" name="interviewDate"></label>
            <label>Documents Required: <input type="text" name="docsReq"></label>
        `;
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
