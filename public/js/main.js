let button = document.querySelectorAll('input')
// ajout de liste
let inputSpace = document.querySelector("input")
let buttonAdd = button[1]

// ---------------------ajout dotolist------------------------------------
function ajoutTodo() {
    let div3 = document.getElementById("div3")
    let box1 = document.createElement("div")
    box1.classList.add("listeBox")
    // box1.style.cssText = 'width:80%;color:brown;background:white;border: 2px solid brown'
    div3.append(box1)
    let h3 = document.createElement("h3")
    let h3text = inputSpace.value
    h3.append(h3text)
    let boxButton = document.createElement("div")
    boxButton.classList.add("buttonBox")
    let buttonFini = document.createElement("input")
    buttonFini.type = "button"
    buttonFini.value = "FINI"
    let buttonModifier = document.createElement("input")
    buttonModifier.type = "button"
    buttonModifier.value = "MODIFIER"
    let buttonSupprimer = document.createElement("input")
    buttonSupprimer.type = "button"
    buttonSupprimer.value = "SUPPRIMER"
    boxButton.append(buttonFini, buttonModifier, buttonSupprimer)
    box1.append(h3, boxButton)
    inputSpace.value = ""


    buttonFini.addEventListener("click", function () {
        box1.className="fini"
        box1.style.cssText = 'width:80%;color:white;background:rgba(165, 42, 42, 0.456);border: 2px solid white'
    })
    buttonFini.addEventListener("dblclick", function () {
        box1.className="listeBox"
        box1.style.cssText = 'width:80%;color:brown;background:rgba(255, 255, 255, 0.311);border: 2px solid rgba(165, 42, 42, 0.456)'
    })
    buttonModifier.addEventListener("click", function () {
        let nlisteInput = document.createElement('input')
        let okey = document.createElement('input')
        okey.type = "button"
        okey.value = "ok"
        buttonModifier.replaceWith(nlisteInput, okey)
        okey.addEventListener("click", function () {
            h3.innerHTML = nlisteInput.value
            // nlisteInput.value = ''
            nlisteInput.remove()
            okey.replaceWith(buttonModifier)
        })

    })
    buttonSupprimer.addEventListener("click", function () {
        let supp1 = document.createElement("input")
        supp1.type = "button"
        supp1.value = "je veux supprimer"
        let supp2 = document.createElement("input")
        supp2.type = "button"
        supp2.value = "je ne veux pas supprimer"
        buttonSupprimer.replaceWith(supp1, supp2)
        supp1.addEventListener("click", function () {
            box1.remove()
        })
        supp2.addEventListener("click", function () {
                
                supp1.replaceWith(buttonSupprimer)
                supp2.replaceWith(buttonSupprimer)
            
        })
    })
//---------------------- filter listes-------------------------------
    // boutton tous,en cours, fini
let h1= document.querySelector("h1")
let Button=document.querySelector("#buttonstrier")

let buttonTous=button[2]
let buttonEncours=button[3]
let buttonFini1=button[4]
h1.addEventListener("click", function() {
    Button.style.display="flex"
})

buttonTous.addEventListener("click", function () {
        box1.style.display="flex"
})
buttonEncours.addEventListener("click", function () {
    if(box1.className=="fini"){
        box1.style.display="none";
        // console.log(div3);
    }else{
        box1.style.display="flex";
    }
})
buttonFini1.addEventListener("click", function () {
    if(box1.className!="fini"){
        box1.style.display="none";
    }else{
        box1.style.display="flex";
    }
})
}

inputSpace.addEventListener("keydown",(element) =>{
    if (element.key ==='Enter'){
        ajoutTodo()

    }
})
buttonAdd.addEventListener("click",ajoutTodo)











