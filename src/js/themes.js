const body = document.querySelector("body")
const select = document.querySelector("select")
const contador = 0;

select.addEventListener('change', () =>{
    ThemeConfig(select.selectedIndex)

})

function ThemeConfig(num) {
    if(num === 0){
        body.classList.add(`theme`)
        body.classList.remove("theme1")
        body.classList.remove("theme2")
    }else if(num === 1){
        body.classList.remove(`theme`)
        body.classList.add("theme1")
        body.classList.remove("theme2")
    }else{
        body.classList.remove(`theme`)
        body.classList.remove("theme1")
        body.classList.add("theme2")
    }
    
}