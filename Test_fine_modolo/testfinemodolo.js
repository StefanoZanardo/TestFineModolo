let flipCount = 0;
let Penultimamemogir = null;

function toggleFlip(memory) {
    const memoryInner = memory.querySelector('.memory-inner');
    const ultima = memory.querySelector('.photo-front').src;
    
 
    if ( Penultimamemogir !==null &&  Penultimamemogir == ultima) {
       
        memoryInner.style.transform = 'rotateY(180deg)';
    } else {
        
        memoryInner.style.transform = memoryInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      
    }
    flipCount++;

    
    document.getElementById('flip-count').textContent = flipCount;

    Penultimamemogir = ultima;
}


   
  
