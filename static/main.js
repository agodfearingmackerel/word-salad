document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('play-button').addEventListener('click', function() {
        const visibleText = document.querySelector('.visible-text');

        // First scale up
        visibleText.style.transform = 'scale(.8)';
        visibleText.style.transition = 'transform 0.2s ease';

        setTimeout(() => {
            visibleText.style.transform = 'scale(1)'; 
            visibleText.style.transition = 'transform 0.2s ease'; 
            setTimeout(() => {
                visibleText.style.transform = 'translateY(-100%)'
                visibleText.style.transition = 'transform 0.2s ease';
            }, 200);  
        }, 200); 
    });
});
