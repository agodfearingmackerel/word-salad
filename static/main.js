//adds animation to the front screen -> next screen on play button click
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('play-button').addEventListener('click', function() {
        //get visible text
        const visibleText = document.querySelector('.visible-text');
        //get currently invisible text
        const invisibleText = document.querySelector('.invisible-text');

        //scale down visible text
        visibleText.style.transform = 'scale(.8)';
        visibleText.style.transition = 'transform 0.2s ease';

        setTimeout(() => {
            //scale up visible text
            visibleText.style.transform = 'scale(1)'; 
            visibleText.style.transition = 'transform 0.2s ease'; 
            
            //translate visible text up
            setTimeout(() => {
                visibleText.style.transform = 'translateY(-100%)'
                visibleText.style.transition = 'transform 0.2s ease';
                setTimeout(() => {
                    //remove visible text from DOM
                    visibleText.remove();
                    
                    //show invisible text
                    invisibleText.style.visibility = 'visible';
                }, 200); 
            }, 200);  
        }, 200); 
    });
});
