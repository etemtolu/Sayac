let sayac = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            sayac--;
        }else if(styles.contains('increase')){
            sayac++;
        }else{
            sayac = 0;
        }
        if(sayac > 0){
            value.style.color = 'green';
        } else if(sayac < 0){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }

        value.textContent = sayac;
    });
});
