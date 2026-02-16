// Toggle submenu visibility (for story dropdowns)
function toggleSection(sectionId) {
    const submenu = document.getElementById(sectionId);
    if (submenu) {
        submenu.classList.toggle('active');
    }
}

// Mobile menu toggle
function toggleSidebar() {
    const navList = document.querySelector('.nav-list');
    if (navList) {
        navList.classList.toggle('active');
    }
}

// Close submenus when clicking outside
document.addEventListener('click', function(event) {
    const submenus = document.querySelectorAll('.submenu.active');
    submenus.forEach(submenu => {
        if (!submenu.contains(event.target) && !event.target.classList.contains('story-title')) {
            submenu.classList.remove('active');
        }
    });
});

// Chapter navigation arrows logic (now centralized here)
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // List of all chapter files in order
    const chapters = [
        'index.html',           // optional home page (arrows disabled)
        'main-story.html',      // main story landing (arrows disabled)
        'prologue.html',
        'chapter1.html',
        'chapter2.html',
        'chapter3.html',
        'chapter4.html',
        'chapter5.html',
        'chapter6.html',
        'chapter7.html',
        'chapter8.html',
        'chapter9.html',
        'chapter10.html',
        'chapter11.html',
        'chapter12.html'
    ];

    const currentIndex = chapters.indexOf(currentPage);
    const prevLink = document.getElementById('prev-chapter');
    const nextLink = document.getElementById('next-chapter');

    // If we're on a non-chapter page (index or main-story), disable both arrows
    if (currentPage === 'index.html' || currentPage === 'main-story.html') {
        if (prevLink) prevLink.classList.add('disabled');
        if (nextLink) nextLink.classList.add('disabled');
        return;
    }

    // For actual chapter pages
    if (currentIndex > -1 && prevLink && nextLink) {
        // Previous chapter
        if (currentIndex > 0) {
            let prevPath = chapters[currentIndex - 1];
            // Adjust path if we're inside the short-stories folder
            if (window.location.pathname.includes('/short-stories/')) {
                prevPath = prevPath; // already correct relative path
            } else {
                prevPath = '/short-stories/the-whispers-in-the-blackwood/' + prevPath;
            }
            prevLink.href = prevPath;
            prevLink.classList.remove('disabled');
        } else {
            prevLink.classList.add('disabled');
        }

        // Next chapter
        if (currentIndex < chapters.length - 1) {
            let nextPath = chapters[currentIndex + 1];
            if (window.location.pathname.includes('/short-stories/')) {
                nextPath = nextPath;
            } else {
                nextPath = '/short-stories/the-whispers-in-the-blackwood/' + nextPath;
            }
            nextLink.href = nextPath;
            nextLink.classList.remove('disabled');
        } else {
            nextLink.classList.add('disabled');
        }
    }
});