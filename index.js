const colorValue = document.getElementById('head');
const colorScheme = document.getElementById('lang');
const colorSchemeBtn = document.getElementById('color-btn');
const colorBlocksContainer = document.querySelector('.color-blocks-container');

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

function rgbToHex(rgb) {
    const hex = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!hex) {
        return rgb;
    }

    const r = parseInt(hex[1]);
    const g = parseInt(hex[2]);
    const b = parseInt(hex[3]);

    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexColor =
        '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return hexColor;
}
function copyToClipboard(hex) {
    const input = document.createElement('textarea');
    input.value = hex;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

colorBlocksContainer.addEventListener('click', function(e) {
    if (e.target.classList.contains('para')) {
        copyToClipboard(e.target.textContent);
    }

    if (e.target.classList.contains('rectangle')) {
        const color = window.getComputedStyle(e.target).backgroundColor;
        const hexColor = rgbToHex(color);
        copyToClipboard(hexColor);
    }
});
