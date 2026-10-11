
let currentLang = 'en';
let hasPhoto = false;
const translations = {
    en: {
        pageTitle: "Personal Portfolio",
        logo: "MyPortfolio",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",
        themeBtn: "Toggle Theme",
        aboutTitle: "About Me",
        aboutDesc: "Hello! I am a passionate web developer learning to build responsive, accessible, and dynamic web applications from scratch using pure HTML5, CSS3, and JavaScript ES6+.",
        photoPlaceholder: "Profile Photo",
        loadPhotoBtn: hasPhoto ? "Remove Photo" : "Load Photo",
        skillsTitle: "Skills",
        skill1: "HTML5 Semantic Structure",
        skill2: "CSS3 Layouts & Flexbox",
        skill3: "JavaScript ES6+ & DOM",
        skill4: "Git & GitHub Workflow",
        skill5: "Unix Terminal & Bash",
        skill6: "Responsive Web Design",
        projectsTitle: "Project Showcase",
        proj1Title: "Project 00",
        proj1Desc: "Shell scripting and file management automation exercises in Unix environment.",
        proj2Title: "Project 01",
        proj2Desc: "Git repository configuration, SSH keys setup, and remote version control workflow.",
        proj3Title: "Project 02",
        proj3Desc: "Pure CSS geometric shape rendering and custom responsive layout design.",
        proj4Title: "Project 03",
        proj4Desc: "Interactive DOM manipulation, event handling, and dynamic task manager web application.",
        hobbiesTitle: "Hobbies & Interests",
        hobby1: "💻 Coding & Building Problem-Solving Projects",
        hobby2: "📚 Exploring Web Development Best Practices",
        hobby3: "🔒 Cybersecurity & Network Architecture Principles",
        hobby4: "🎮 Tech Exploration & Digital Creation",
        contactTitle: "Contact Me",
        labelName: "Name:",
        placeholderName: "Your Name",
        labelEmail: "Email:",
        placeholderEmail: "Your Email",
        labelMessage: "Message:",
        placeholderMessage: "Your Message",
        submitBtn: "Send Message",
        footerText: "© 2026 Crafted with precision and pride. Built without frameworks."
    },
    ar: {
        pageTitle: "البورتفوليو الشخصي",
        logo: "ملفي الشخصي",
        navAbout: "عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الاهتمامات",
        navContact: "اتصل بي",
        themeBtn: "تغيير الثيم",
        aboutTitle: "نبذة عني",
        aboutDesc: "أهلاً بك! أنا مطور ويب شغوف أتعلم بناء تطبيقات ويب تفاعلية ومرنة ومتجاوبة من الصفر باستخدام HTML5 و CSS3 و JavaScript ES6+.",
        photoPlaceholder: "صورة شخصية",
        loadPhotoBtn: hasPhoto ? "إزالة الصورة" : "تحميل الصورة",
        skillsTitle: "المهارات التقنية",
        skill1: "هيكلية HTML5 الدلالية",
        skill2: "تنسيقات CSS3 و Flexbox",
        skill3: "جافاسكريبت ES6+ والـ DOM",
        skill4: "إدارة الإصدارات Git و GitHub",
        skill5: "بيئة سطر الأوامر Unix & Bash",
        skill6: "التصميم المتجاوب للشاشات",
        projectsTitle: "معرض المشاريع",
        proj1Title: "المشروع 00",
        proj1Desc: "سكريبتات الشل وأتتمة إدارة الملفات في بيئة يونكس.",
        proj2Title: "المشروع 01",
        proj2Desc: "إعداد مستودعات جيت، مفاتيح SSH، وإدارة مسار العمل.",
        proj3Title: "المشروع 02",
        proj3Desc: "رسم الأشكال الهندسية بـ CSS الخالص وتصميم تخطيط متجاوب.",
        proj4Title: "المشروع 03",
        proj4Desc: "تطبيقات الويب التفاعلية والتحكم بالـ DOM وإدارة المهام.",
        hobbiesTitle: "الهوايات والاهتمامات",
        hobby1: "💻 البرمجة وبناء مشاريع لحل المشكلات",
        hobby2: "📚 استكشاف أفضل ممارسات تطوير الويب",
        hobby3: "🔒 مبادئ الأمن السيبراني وهندسة الشبكات",
        hobby4: "🎮 استكشاف التقنية والإبداع الرقمي",
        contactTitle: "تواصل معي",
        labelName: "الاسم:",
        placeholderName: "اسمك الكريم",
        labelEmail: "البريد الإلكتروني:",
        placeholderEmail: "بريدك الإلكتروني",
        labelMessage: "الرسالة:",
        placeholderMessage: "اكتب رسالتك هنا...",
        submitBtn: "إرسال الرسالة",
        footerText: "© ٢٠٢٦ صُنع بكل دقة واعتراف. تم بناؤه بدون أطر عمل."
    }
};

function updateLanguageUI() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    switchPhotoBtn.textContent = hasPhoto 
        ? (currentLang === 'ar' ? 'إزالة الصورة' : 'Change Photo')
        : (currentLang === 'ar' ? 'تحميل الصورة' : 'Change Photo');

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
}
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
const profileImg = document.getElementById('profile-img');
const placeholderText = document.getElementById('placeholder-text');
const switchPhotoBtn = document.getElementById('switch-photo-btn');

switchPhotoBtn.addEventListener('click', () => {
    profileImg.classList.add('fade-out');

    setTimeout(() => {
        if (!hasPhoto) {
            profileImg.src = 'assets2/profile.jpeg'; 
            profileImg.alt = currentLang === 'ar' ? 'صورة الملف الشخصي' : 'My Profile Photo';
            placeholderText.style.display = 'none';
            hasPhoto = true;
        } else {
            profileImg.src = '';
            profileImg.alt = 'No Photo';
            placeholderText.style.display = 'block';
            hasPhoto = false;
        }

        updateLanguageUI();
        profileImg.classList.remove('fade-out');
    }, 200);
});
const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    updateLanguageUI();
});