const colorValue = document.getElementById('head');
const colorScheme = document.getElementById('lang');
const colorSchemeBtn = document.getElementById('color-btn');

colorSchemeBtn.addEventListener('click', function(event) {
    let currentColor = colorValue.value.replace('#', '');
    currentColorScheme = colorScheme.value;
    event.preventDefault();

    fetch(
        `https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentColorScheme}`,
    )
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < data.colors.length; i++) {
                const hexColor = data.colors[i].hex.value;
                const rectangle = document.querySelectorAll('.rectangle');
                const hexText = document.querySelectorAll('.para');
                rectangle[i].style.backgroundColor = hexColor;
                hexText[i].textContent = hexColor;
            }
        });
});
