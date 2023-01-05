const colorValue = document.getElementById("head");
const colorScheme = document.getElementById("lang");
const colorSchemeBtn = document.getElementById("color-btn");



colorSchemeBtn.addEventListener("click", function(event) {
    let currentColor = colorValue.value.replace("#","")
    currentColorScheme = colorScheme.value
    console.log(currentColorScheme)
    console.log(currentColor)
    event.preventDefault()
    

    fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${currentColorScheme}`)
    .then((response) => response.json())
    .then((data) => {

        for(i = 0; i < data.colors.length; i++) {
            const hexColor = data.colors[i].hex.value
            console.log(hexColor)
        }
       
        // console.log(data.colors[0].hex.value)
        // console.log(data.colors[1].hex.value)
        // console.log(data.colors[2].hex.value)
        // console.log(data.colors[3].hex.value)
        // console.log(data.colors[4].hex.value)
       
        
       


    
        
        
    })
    
    
})

