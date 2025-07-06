// اختر كل الصور في المعرض
const galleryImages = document.querySelectorAll('.gallery img');

// العناصر في المودال
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// لما تضغط على صورة، افتح المودال واظهر الصورة المكبرة
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = img.src;
        modalImage.alt = img.alt;
    });
});

// اغلاق المودال لما تضغط على علامة الإغلاق
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// اغلاق المودال لو ضغطت في أي مكان خارج الصورة
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
