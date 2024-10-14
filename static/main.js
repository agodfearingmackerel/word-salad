//adds animation to the front screen -> next screen on play button click
document.addEventListener('DOMContentLoaded', function() {
    //define button
    const playButton = document.getElementById('play-button');
    
    playButton.addEventListener('click', function() {
        //get visible text
        const visibleText = document.querySelector('.visible-text');
        //get currently invisible text
        const invisibleText = document.querySelector('.invisible-text');
        
        //disable play button
        playButton.disabled = true;
        
        //scale down visible text
        visibleText.style.transform = 'scale(.8)';
        visibleText.style.transition = 'transform 0.2s ease';

        setTimeout(() => {
            //scale up visible text
            visibleText.style.transform = 'scale(1)'; 
            visibleText.style.transition = 'transform 0.2s ease'; 
            
            setTimeout(() => {
                //translate visible text up
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
