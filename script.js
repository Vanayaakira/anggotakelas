// Student data
const studentsData = {
    student1: {
        name: "ADNAN SHIDQI FAUZI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "01",
        instagram: "https://www.instagram.com/adnanf3734?igsh=MXF2Z3NhM3U2MjBzcg==",
        quote: "Teknologi bukan hanya tentang kode, tapi tentang memecahkan masalah dan membuat hidup lebih mudah.",
        photo: "pics/nan.jpg"
    },
    student2: {
        name: "ALDAFA PANCA PUTRA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "02",
        instagram: "https://www.instagram.com/aldfpncptr?igsh=a2VhMDEyemd3ZTNx",
        quote: "Coding bukan hanya passion, tapi juga seni dalam menciptakan solusi digital yang elegant.",
        photo: "pics/punk.jpg"
    },
    student3: {
        name: "ANANDA MAISYAROH",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "03",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "Sebagai System Administrator masa depan, saya percaya bahwa infrastruktur yang kuat adalah fondasi kesuksesan.",
        photo: "pics/nanda.jpg"
    },
    student4: {
        name: "ANFALUL AZZAHRA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "04",
        instagram: "https://www.instagram.com/anfalulazz?igsh=dGV2M2pwdng2c2tl",
        quote: "Web development adalah canvas digital tempat kreativitas bertemu dengan functionality.",
        photo: "pics/uls.jpg"
    },
    student5: {
        name: "ANGGITO MAULANA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "05",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "IT Support bukan hanya tentang memperbaiki masalah, tapi tentang membantu orang mencapai potensi mereka.",
        photo: "pics/gt.jpg"
    },
    student6: {
        name: "APRILLIA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "06",
        instagram: "https://www.instagram.com/4prliy?igsh=ZzY4YmkybnBkZjRt",
        quote: "Data adalah aset paling berharga di era digital, dan sebagai DBA, saya adalah penjaga gerbangnya.",
        photo: "pics/ar.jpg"
    },
    student7: {
        name: "AZARIN RAHMA AULIA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "07",
        instagram: "https://www.instagram.com/azarinrhm?igsh=MXBweGl6cW0wdDl4NA==",
        quote: "Network security adalah benteng pertahanan dunia digital, dan saya siap menjaganya.",
        photo: "pics/az.jpg"
    },
    student8: {
        name: "BAHTIAR ADIKA PUTRA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "08",
        instagram: "https://www.instagram.com/bahtiar_adk.p?igsh=aGkwMmF0aTR3cnM3",
        quote: "Software engineering adalah seni menciptakan solusi yang tidak hanya berfungsi, tapi juga indah.",
        photo: "pics/dk.jpg"
    },
    student9: {
        name: "DEGGA ANGGER PRASTYA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "09",
        instagram: "https://www.instagram.com/xraiwa?igsh=bmxodjBta3EwbjJ6",
        quote: "Sebagai programmer, saya percaya bahwa setiap baris kode adalah langkah menuju inovasi.",
        photo: "pics/de.jpg"
    },
    student10: {
        name: "DYAH UMI MU'MINAH",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "10",
        instagram: "https://www.instagram.com/dynahz_?igsh=MWgzNnowbGdoMHV0dQ==",
        quote: "IT adalah jembatan menuju masa depan, dan saya siap menyeberanginya.",
        photo: "https://via.placeholder.com/200x250/8b5cf6/ffffff?text=Foto+Siswa+10"
    },
    student11: {
        name: "EVA CAHYANINGRUM",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "11",
        instagram: "https://www.instagram.com/va_chy12?igsh=MTE0bDllbHlqdnV2Yw==",
        quote: "Teknologi adalah alat, dan saya adalah arsiteknya.",
        photo: "pics/evy.jpg"
    },
    student12: {
        name: "FAJAR IRSYAD WIDIATMOKO",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "12",
        instagram: "https://www.instagram.com/pajarsyad_?igsh=MTB0ZDVheTdsNXhtbw==",
        quote: "Digital marketing adalah seni menjangkau hati dan pikiran konsumen di dunia maya.",
        photo: "pics/fajr.jpg"
    },
    student13: {
        name: "FATUR DIHAN AIDIL",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "13",
        instagram: "https://www.instagram.com/fathuryzx?igsh=aXMycnY4NWs3YTdn",
        quote: "IT adalah bahasa universal yang menghubungkan manusia di seluruh dunia.",
        photo: "pics/tor.jpg"
    },
    student14: {
        name: "FAWWAAZ HAFIIZH KHOIRUDDIN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "14",
        instagram: "https://www.instagram.com/hpiizzh?igsh=ZmMwaGQ4NXJqbzY4",
        quote: "Sebagai web designer, saya menciptakan pengalaman digital yang menarik dan intuitif.",
        photo: "pics/wz.jpg"
    },
    student15: {
        name: "FEBRIANA NURINDAH SARI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "15",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "IT adalah jendela menuju dunia baru, dan saya adalah penjelajahnya.",
        photo: "pics/in.jpg"
    },
    student16: {
        name: "FILANDO RASYA FIVALDI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "16",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "IT adalah alat untuk menciptakan masa depan yang lebih baik, dan saya siap berkontribusi.",
        photo: "pics/fil.jpg"
    },
    student17: {
        name: "GALIH NUR ROKHIMAH",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "17",
        instagram: "https://www.instagram.com/galnrma?igsh=ZHU0MmtiaGs3N3pt",
        quote: "Sebagai programmer, saya percaya bahwa setiap tantangan adalah peluang untuk belajar dan tumbuh.",
        photo: "pics/ga.jpg"
    },
    student18: {
        name: "HENI ERNA ANJARWATI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "18",
        instagram: "https://www.instagram.com/_henirnaa?igsh=cGJ6eHhtaXRmczZ3",
        quote: "Digitalisasi adalah kunci untuk membuka potensi bisnis di era modern.",
        photo: "pics/heni.jpg"
    },
    student19: {
        name: "IMAM NUR IHSANUDDIN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "19",
        instagram: "https://www.instagram.com/imam_nur_i12?igsh=eDgzcmVlNmYybngz",
        quote: "IT adalah jembatan yang menghubungkan ide dengan realitas.",
        photo: "pics/mam.jpg"
    },
    student20: {
        name: "KEYSHA DEWANTARI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "20",
        instagram: "https://www.instagram.com/keyshadewantari_?igsh=MWN2YzZhOXNxMTBteA==",
        quote: "Sebagai IT Support, saya adalah jembatan antara teknologi dan pengguna.",
        photo: "pics/key.jpg"
    },
    student21: {
        name: "MUHAMMAD FAIZ RAMADHAN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "21",
        instagram: "https://www.instagram.com/mfaizramadhan7?igsh=MTZyOTFjcHo5MmhiNA==",
        quote: "Web development adalah seni menciptakan pengalaman digital yang menarik dan intuitif.",
        photo: "pics/iz.jpg"
    },
    student22: {
        name: "MUHAMMAD FAIZUL MUNAL",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "22",
        instagram: "https://www.instagram.com/f41zul_?igsh=MXZzZDQ0bXhzZmVrag==",
        quote: "IT adalah alat untuk menciptakan masa depan yang lebih baik, dan saya siap berkontribusi.",
        photo: "pics/mon.jpg"
    },
    student23: {
        name: "MUHAMMAD FATIH IQBAL AHWAS",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "23",
        instagram: "https://www.instagram.com/fqblhwzz?igsh=b3Y0MTNnb3NhenMx",
        quote: "Digitalisasi adalah kunci untuk membuka potensi bisnis di era modern.",
        photo: "pics/iq.jpg"
    },
    student24: {
        name: "MUHAMMAD NUROKHIM",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "24",
        instagram: "https://www.instagram.com/nurz.43?igsh=dTR5OHkwMTFjaDZt",
        quote: "IT adalah jembatan yang menghubungkan ide dengan realitas.",
        photo: "pics/bos.jpg"
    },
    student25: {
        name: "MUMTAZ KHOLAFIYAN ALFAN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "25",
        instagram: "https://www.instagram.com/mumtazzka_?igsh=cWx5OG5iMmpwbzJ3",
        quote: "Sebagai programmer, saya percaya bahwa setiap baris kode adalah langkah menuju inovasi.",
        photo: "pics/mum.jpg"
    },
    student26: {
        name: "RADEN ADUYUAN FADHIL NAJWAN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "26",
        instagram: "https://www.instagram.com/_raduyuan?igsh=MTlwZDB5eWRpYTBvbw==",
        quote: "IT adalah alat untuk menciptakan masa depan yang lebih baik, dan saya siap berkontribusi.",
        photo: "pics/uan.jpg"
    },
    student27: {
        name: "RADITHYA RAFA AQHAR",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "27",
        instagram: "https://www.instagram.com/antiviaque/",
        quote: "Digitalisasi adalah kunci untuk membuka potensi bisnis di era modern.",
        photo: "pics/rafa.jpg"
    },
    student28: {
        name: "RADITYA RASHYA HAFIZH PRATAMA",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "28",
        instagram: "https://www.instagram.com/radityarashyaa_?igsh=bTVxNnk3MWV3MnBl",
        quote: "Web development adalah seni menciptakan pengalaman digital yang menarik dan intuitif.",
        photo: "pics/rs.jpg"
    },
    student29: {
        name: "RETNO DWI NAWANGSARI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "29",
        instagram: "https://www.instagram.com/wnaws?igsh=cGdpNGJ6Y2NzazN6",
        quote: "IT adalah jembatan yang menghubungkan ide dengan realitas.",
        photo: "pics/naw.jpg"
    },
    student30: {
        name: "RIFALINA ZULFIANI LATHIFAH",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "30",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "Sebagai IT Support, saya adalah jembatan antara teknologi dan pengguna.",
        photo: "pics/rif.jpg"
    },
    student31: {
        name: "SITI NUR'AINI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "31",
        instagram: "https://www.instagram.com/stewa_tjkt26?igsh=MW1hcHJiYXJwMnZyMw==",
        quote: "Digitalisasi adalah kunci untuk membuka potensi bisnis di era modern.",
        photo: "https://via.placeholder.com/200x250/10b981/ffffff?text=Foto+Siswa+31"
    },
    student32: {
        name: "SYIFA ARIELA DEVANI",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "32",
        instagram: "https://www.instagram.com/syifaariela_?igsh=bHUxdDEweXQ0anIw",
        quote: "IT adalah alat untuk menciptakan masa depan yang lebih baik, dan saya siap berkontribusi.",
        photo: "https://via.placeholder.com/200x250/6366f1/ffffff?text=Foto+Siswa+32"
    },
    student33: {
        name: "VALENO AXEL PRAMONO",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "33",
        instagram: "https://www.instagram.com/v41eno?igsh=MWxjdnNldndiaXd0bA==",
        quote: "Web development adalah seni menciptakan pengalaman digital yang menarik dan intuitif.",
        photo: "pics/xl.jpg"
    },
    student34: {
        name: "YANSYAH FAIRUZ SURYA LAKSONO",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "34",
        instagram: "https://www.instagram.com/_yayanrl?igsh=MTViY2duZ2dvdmczYg==",
        quote: "IT adalah jembatan yang menghubungkan ide dengan realitas.",
        photo: "pics/yz.jpg"
    },
    student35: {
        name: "ZULHAM SYAIFUL ADNAN",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "35",
        instagram: "https://www.instagram.com/_raduyuan?igsh=MTlwZDB5eWRpYTBvbw==",
        quote: "Sebagai programmer, saya percaya bahwa setiap baris kode adalah langkah menuju inovasi.",
        photo: "pics/pl.jpg"
    },
    student36: {
        name: "ZURIAN ZONAFELLANO ALEXA WIBOWO",
        class: "XII TKJ 2",
        year: "2023",
        major: "Teknik Komputer & Jaringan",
        absen: "36",
        instagram: "https://www.instagram.com/_zrian_z_?igsh=M2QxcDB2Y3I4aXlp",
        quote: "Digitalisasi adalah kunci untuk membuka potensi bisnis di era modern.",
        photo: "pics/za.jpg"
    }
};

// DOM elements
const modal = document.getElementById('studentModal');
const closeBtn = document.querySelector('.close');
const polaroids = document.querySelectorAll('.polaroid');

// Modal elements
const modalPhoto = document.getElementById('modalPhoto');
const modalName = document.getElementById('modalName');
const modalClass = document.getElementById('modalClass');
const modalYear = document.getElementById('modalYear');
const modalMajor = document.getElementById('modalMajor');
const modalAbsen = document.getElementById('modalAbsen');
const modalInstagram = document.getElementById('modalInstagram');
const modalQuote = document.getElementById('modalQuote');

// Add click event listeners to polaroids
polaroids.forEach(polaroid => {
    polaroid.addEventListener('click', function() {
        const studentId = this.getAttribute('data-student');
        const student = studentsData[studentId];
        
        if (student) {
            // Populate modal with student data
            modalPhoto.src = student.photo;
            modalPhoto.alt = student.name;
            modalName.textContent = student.name;
            modalClass.textContent = student.class;
            modalYear.textContent = student.year;
            modalMajor.textContent = student.major;
            modalAbsen.textContent = student.absen;
            modalInstagram.href = student.instagram;
            modalQuote.textContent = student.quote;
            
            // Show modal with animation
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Add entrance animation
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        }
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    closeModal();
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Function to close modal
function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Add parallax effect to background shapes
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');
    const floatingElements = document.querySelectorAll('.floating-elements i');
    
    shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    floatingElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    // Add staggered animation to polaroids
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach((polaroid, index) => {
        polaroid.style.opacity = '0';
        polaroid.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            polaroid.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            polaroid.style.opacity = '1';
            polaroid.style.transform = 'translateY(0)';
        }, index * 150);
    });
    
    // Add entrance animation to header
    const header = document.querySelector('.header');
    header.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        header.style.transition = 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        header.style.transform = 'translateY(0)';
    }, 100);
    
    // Add entrance animation to intro section
    const introSection = document.querySelector('.intro-section');
    introSection.style.opacity = '0';
    introSection.style.transform = 'translateY(30px)';
    setTimeout(() => {
        introSection.style.transition = 'all 0.8s ease';
        introSection.style.opacity = '1';
        introSection.style.transform = 'translateY(0)';
    }, 300);
});

// Add hover sound effect (optional - requires audio files)
function playHoverSound() {
    // Uncomment and add audio file if needed
    // const audio = new Audio('hover-sound.mp3');
    // audio.volume = 0.1;
    // audio.play().catch(e => console.log('Audio play failed:', e));
}

// Add click sound effect (optional - requires audio files)
function playClickSound() {
    // Uncomment and add audio file if needed
    // const audio = new Audio('click-sound.mp3');
    // audio.volume = 0.2;
    // audio.play().catch(e => console.log('Audio play failed:', e));
}

// Add random rotation to polaroids for more natural look
function addRandomRotation() {
    const polaroids = document.querySelectorAll('.polaroid');
    polaroids.forEach(polaroid => {
        const randomRotation = (Math.random() - 0.5) * 6; // Random rotation between -3 and 3 degrees
        polaroid.style.transform = `rotate(${randomRotation}deg)`;
    });
}

// Initialize random rotation when page loads
window.addEventListener('load', addRandomRotation);

// Add typing effect to quotes in modal
function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Enhance modal opening with typing effect
const originalModalOpen = polaroids.forEach;
polaroids.forEach(polaroid => {
    polaroid.addEventListener('click', function() {
        const studentId = this.getAttribute('data-student');
        const student = studentsData[studentId];
        
        if (student) {
            // Populate modal with student data
            modalPhoto.src = student.photo;
            modalPhoto.alt = student.name;
            modalName.textContent = student.name;
            modalClass.textContent = student.class;
            modalYear.textContent = student.year;
            modalMajor.textContent = student.major;
            modalAbsen.textContent = student.absen;
            modalInstagram.href = student.instagram;
            
            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Add typing effect to quote after modal is shown
            setTimeout(() => {
                typeWriter(modalQuote, student.quote, 30);
            }, 500);
        }
    });
});

// Add resize handler for responsive behavior
window.addEventListener('resize', function() {
    // Adjust modal position on resize
    if (modal.style.display === 'block') {
        // Recenter modal if needed
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
    }
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
    if (modal.style.display === 'block') {
        if (event.key === 'Tab') {
            // Handle tab navigation within modal
            const focusableElements = modal.querySelectorAll('button, a, input, textarea, select');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// Initialize tooltips for social links
function initializeTooltips() {
    const socialLinks = document.querySelectorAll('.instagram-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.setAttribute('title', 'Klik untuk mengunjungi Instagram');
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTooltips();
    console.log('Yearbook SMK TKJ 2 - Initialized successfully!');
});
