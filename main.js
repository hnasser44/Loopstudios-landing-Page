const HeaderTitle = document.querySelector('header .title h1');
const VRSection = document.querySelector('section.vr');
const CreationElements = document.querySelectorAll('section.creations .creation');
const MobileMenu = document.querySelector('.mobile-menu');
const OpenMobileMenuIcon = document.querySelector('.mobile-menu-icon img');
const CloseMobileMenuIcon = document.querySelector('.mobile-menu-close');


const headerObserver = new IntersectionObserver((entries, headerObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) 
            HeaderTitle.classList.add('test');
    });
}
);

const vrObserver = new IntersectionObserver((entries, vrObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            VRSection.classList.add('intersecting');
    });
}, {threshold: 0.1});

const creationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) 
        entry.target.classList.add('intersecting');
    });
  }, { threshold: 0.1 });

CreationElements.forEach(element => {
    creationObserver.observe(element);
});

headerObserver.observe(HeaderTitle);
vrObserver.observe(VRSection);

OpenMobileMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.add('open');
});

CloseMobileMenuIcon.addEventListener('click', () => {
    MobileMenu.classList.remove('open');
});