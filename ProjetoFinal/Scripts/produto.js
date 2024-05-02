/* função para alternar a seleção do botão */
function toggleSelection(button) {
    /* remove a classe "selected" de todos os botões */
    var buttons = document.querySelectorAll('.tam input[type="button"]');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });
    
    /* add a a classe "selected" apenas ao botão clicado */
    button.classList.add('selected');
}

/* add um clique a todos os botões */
var sizeButtons = document.querySelectorAll('.tam input[type="button"]');
sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        toggleSelection(this);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var plusBtn = document.querySelector('.qtd .plus');
    var minusBtn = document.querySelector('.qtd .minus');
    var inputNumber = document.querySelector('.qtd input[type="number"]');

    plusBtn.addEventListener('click', function() {
        var currentValue = parseInt(inputNumber.value);
        if (currentValue < parseInt(inputNumber.max)) {
            inputNumber.value = currentValue + 1;
        }
    });

    minusBtn.addEventListener('click', function() {
        var currentValue = parseInt(inputNumber.value);
        if (currentValue > parseInt(inputNumber.min)) {
            inputNumber.value = currentValue - 1;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var zoomableImages = document.querySelectorAll('.mainImg');
    zoomableImages.forEach(function(image) {
        image.addEventListener('mousemove', function(event) {
            var boundingRect = this.getBoundingClientRect();
            var offsetX = event.clientX - boundingRect.left;
            var offsetY = event.clientY - boundingRect.top;
            var scale = 1.1; /* bglh de zoom*/

            var transformValue = `scale(${scale}) translate(${-(offsetX * (scale - 1))}px, ${-(offsetY * (scale - 1))}px)`;
            this.style.transform = transformValue;
        });

        image.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});