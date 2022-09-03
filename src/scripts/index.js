class Menu{
    static controlarMenu(){
        const btnAbrir = document.getElementById("abrir");
        const btnFechar = document.getElementById("fechar");
        const menu = document.querySelector(".container__menu__input");
        
        btnAbrir.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            btnAbrir.classList.toggle("hidden");
            btnFechar.classList.toggle("hidden");
        })

        btnFechar.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            btnAbrir.classList.toggle("hidden");
            btnFechar.classList.toggle("hidden");
        })
    }
}

Menu.controlarMenu();