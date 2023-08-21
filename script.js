let scale = 10;
let scale_container = document.getElementsByClassName("scale-container");
for (let i = 0; i < scale_container.length; i++) {
    let scale_indicator = scale_container[i].querySelector(".scale-indicator");
    scale_indicator.innerHTML = "1cm == " + (37.7953/scale).toFixed(2) + "px";
    let scale_input = scale_container[i].querySelector(".scale-input");
    scale_input.addEventListener('input', (e) => {
        let old_scale = scale;
        scale = e.target.value;
        if(0< scale < 1){
            scale = 10
        }
        scale_indicator.innerHTML = "1cm == " + (37.7953/scale).toFixed(2) + "px";
        bohommes.forEach((bonhomme) => {

            bonhomme.style.setProperty('height', (bonhomme.clientHeight*old_scale)/scale + 'px');
        })

    })
}



let bohommes = document.querySelectorAll(".bonhomme");
function cmtopixel(cm) {
    return 37.7953 * cm;
}

bohommes.forEach((bonhomme) => {
    let form = bonhomme.querySelector(".size-changer");
    let input_size = form.querySelector(".size-input");
    let input_slide = bonhomme.querySelector('.size-range');
    let select = form.querySelector(".size-select");
    let size_text = bonhomme.querySelector('.size-text');
    select.addEventListener('change', (e) => {
        input_size.value = "";
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    input_size.addEventListener('input', (e) => {
        let size_text = bonhomme.querySelector('.size-text');

        let size = input_size.value;

        if (select.value === "m"){
            size_text.innerHTML = size + " m";

            size = size * 100;
            //if (size <= 0 || size > 2){
               // size = 1.78;
                //input_size.value = 1.78;
           // }


        }else{
            //if (size <= 0 || size > 200){
                //size = 178;
                //input_size.value = 178;
            //}
            size_text.innerHTML = (size/100).toFixed(2) + " m";
            console.log('change')
        }


        let height = cmtopixel(size)/scale;
        size_text.style.setProperty("font-size", height/12 + "px");

        bonhomme.style.setProperty('height', height + 'px');
        bonhomme.style.setProperty('width', height/3 + 'px');

    });
    input_slide.addEventListener('input', (e)=> {

        let size_text = bonhomme.querySelector('.size-text');

        let size = input_slide.value;
        if (size <= 0 || size > 200){
            size = 10;
            input_slide.value = 10;
            return;
        }

        size_text.innerHTML = size/100 + " m";


        let height = cmtopixel(size)/scale;
        size_text.style.setProperty("font-size", height/12 + "px");

        bonhomme.style.setProperty('height', height + 'px');
        bonhomme.style.setProperty('width', height/3 + 'px');

    });
})