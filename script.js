
// FONCTION D'AFFICHAGE DES PRESENTATIONS DES JEUX SUR PAGE ACCUEIL
document.addEventListener('DOMContentLoaded', function() 
{
    const gameBlocks = document.querySelectorAll('.game-block');

    gameBlocks.forEach(block => 
        {
        block.addEventListener('click', function() {
            const details = block.querySelector('.game-details');
            if (details.style.display === 'block') 
            {
                details.style.display = 'none';
            } 
            else 
            {
                details.style.display = 'block';
            }
        });
    });
});
