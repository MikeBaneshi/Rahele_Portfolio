/////////////////////// Home navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

////////////////////////// Scrolling Effect

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.2, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        observer.observe(element); 
    });
});


/////////// FAQ////////////

document.addEventListener('DOMContentLoaded', () => {
    const mainTexts = document.querySelectorAll('.main-text');

    mainTexts.forEach(mainText => {
        mainText.addEventListener('click', () => {
            const subText = mainText.nextElementSibling;
            const arrow = mainText.querySelector('.arrow');
            
            subText.classList.toggle('active');
            arrow.classList.toggle('active');

        });
    });
});

const faqbtn=document.getElementById("faqbtn");
const faqbox= document.getElementById("faqbox");

faqbtn.addEventListener('click',(e) => {
    e.preventDefault();
    faqbox.classList.toggle('faqhide');

});

//////////////////////// Typing Text////////////////////
const textElement = document.getElementById('typing-text');
const words = ["ماکارونی", "کباب" , "پیتزا" , "قیمه" , "قورمه سبزی"]; 
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {   /////// // حالت تایپ کردن

        const currentText = currentWord.slice(0, charIndex + 1);
        textElement.innerHTML = currentText + '<span class="cursor">|</span>';
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeText, 2000); // تأخیر قبل از شروع پاک کردن
        } else {
            setTimeout(typeText, 100); // سرعت تایپ
        }
    } else { //////////// حالت پاک کردن

        const currentText = currentWord.slice(0, charIndex - 1);
        textElement.innerHTML = currentText + '<span class="cursor">|</span>';
        charIndex--;

        if (charIndex === 0) {
        
            isDeleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            setTimeout(typeText, 500); // تأخیر قبل از شروع تایپ کلمه بعدی
        } else {
            setTimeout(typeText, 70); // سرعت پاک کردن
        }
    }
}

typeText();

/////////////////// Submit Contact Form /////////////

async function sendForm(e) {
    e.preventDefault();
    try{

    const fullname=document.getElementById("FormFullName").value;
    const email=document.getElementById("formEmail").value;
    const phoneNamber=document.getElementById("phoneNamber").value;
    const formSubject=document.getElementById("formSubject").value;
    const formMessageBody=document.getElementById("formMessageBody").value;
    const formMsgStatus=document.getElementById("formMsgStatus");

    const message = `Name: ${fullname}\nEmail: ${email}\nPhone Number: ${phoneNamber}\nForm Subject: ${formSubject}\nMessege: ${formMessageBody}`;

    const res=await(fetch(`https://api.telegram.org/bot7681812391:AAGDDlAOxSQAofJDm5Jsh_gdcMtNcIQDRtw/sendMessage?chat_id=681536405&text=${encodeURIComponent(message)}`));
    const data=await res.json();
    console.log(data);

    if(data.ok){
        formMsgStatus.textContent="با سپاس از همراهی شما، پیام با موفقیت فرستاده شد.";
        formMsgStatus.className="success";
        formMsgStatus.style.display="block"

    }else{
        formMsgStatus.textContent="با تقدیم پوزش فراوان، پیام فرستاده نشد.";
        formMsgStatus.className="error";
        formMsgStatus.style.display="block"
    }
    }

    catch (error) {
        console.error('There was an error during sending form data: ', error);
        formMsgStatus.textContent="با تقدیم پوزش فراوان، پیام فرستاده نشد.";
        formMsgStatus.className="error";
        formMsgStatus.style.display="block"
    }
    
};
document.getElementById('formContactMike').addEventListener('submit', sendForm);

/////////////////////// change theme //////////////////////

const sunTheme = document.getElementById("sunTheme");
const darkTheme = document.getElementById("darkTheme");
const bodyTag = document.querySelector("body");

sunTheme.addEventListener("click",()=>{
    bodyTag.classList.toggle("light");

    sunTheme.style.display="none";
    darkTheme.style.display="block";
});
darkTheme.addEventListener("click",()=>{
    bodyTag.classList.toggle("light");

    sunTheme.style.display="block";
    darkTheme.style.display="none";
});
///////////////////////////////////
