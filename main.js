// let d = document.querySelector("div");
// let t = document.querySelector("main")

// div.insertAdjacentHtml("beforeend", t);

// [...p.parentElement.children].forEach(function(el) {
//     // if(el !== p) el.style.transform = "scale(3)";
//     if(el !== p) el.style.color = "red";
// });

// import * as armchair_imgs from './images/Living Room icons/Armchairs';

//Sticky Nav

let initialCoords = document.querySelector("#furniture-type-section").getBoundingClientRect();
let header = document.querySelector("header");

window.addEventListener("scroll", function(e) {
    if(window.scrollY > initialCoords.top)
        header.classList.add("sticky"); 
    else
        header.classList.remove("sticky");
});

let choicesContainer = document.querySelector("#choices-container");

let living_room_names = ["armchairs", "carbinets", "chairs", "coffee tables", "console tables", "side tables", "sofa sectionals", "sofa", "TVs"];
let living_room_images = ["arm chair.png", "Carbinets.jpg", "Chairs.jpg", "Coffee Tables.png",
     "Console Tables.png", "side tables.jpg", "Sofa Sectionals.png", "Sofa.jpg", "TV.jpg"];
     
let dining_room_names = ["buffets and sideboards", "chest of drawers", "dining chairs", "dining tables"];
let dining_room_images = ["Buffets and Sideboards.jpg", "chest of drawers.png", "dining chairs.jpg", "dining tables.jpg"];
     
let bed_room_names = ["bedroom chairs", "beds", "benches", "beside tables", "chaises lounges", "dressing tables", "storage walls", "wardrobes"];
let bed_room_images = ["bedroom chairs.png", "Beds.png", "benches.png", "beside tables.png",
     "chaises lounges.png", "dressing tables.png", "storage walls.png", "wardrobes.png"];
     
let home_office_names = ["book cases", "desks", "poufs"];
let home_office_images = ["book cases.png", "desks.png", "poufs.png"];

let imagesSection = document.querySelector("#images-section");
let imagesSectionImg = document.querySelectorAll("#images-section img");
let imgModel = document.querySelectorAll("#images-section .model");

function generate_li(furniture_type, fur_names_arr, imgs_folder ,fur_img_arr) {

    let ul = document.createElement("ul");
    choicesContainer.appendChild(ul);
    let em = document.createElement("em");
            em.textContent = furniture_type;
            ul.appendChild(em);

    fur_names_arr.forEach((el, i) => {
        let li = document.createElement("li");
        // li.textContent = el;
        ul.appendChild(li);

        let img = document.createElement("img");
        img.src = `./images/${imgs_folder}/${fur_img_arr[i]}`;
        li.appendChild(img);
        i++;

        let a = document.createElement("a");
        a.innerHTML = el;
        li.appendChild(a);

        li.addEventListener("click", function(e) {
            imagesSection.classList.remove("hidden")
            imagesSectionImg.forEach((img, i) => {
                console.log(el)
                img.src = `./images/${imgs_folder}/${el}/${i+1}.jpg`;
                // img.classList.add("")
            });

            imgModel.forEach(modelName => {
                if(modelName.previousElementSibling.src != "")    
                    modelName.innerHTML = generateRandomMode(el, i);

            });

        });
    });

    // li.addEventListener("click", function(e) {
        // this.style.background
    // });
}

generate_li("Living Room:", living_room_names, "Living Room icons/" , living_room_images);
generate_li("Dining Room:", dining_room_names, "Dining Room icons/" , dining_room_images);
generate_li("Bed Room:", bed_room_names, "Bed Room icons/" , bed_room_images);
generate_li("Home Office:", home_office_names, "Home Office icons/" , home_office_images);

function generateRandomMode(folderName, img_index)
{
    let x = "abcdefghijklmnopqrstuvwxyz";
    let y = "zxcvuiolkqweasdlnmtshgfhdp";
    let result = "#";

    for(let j = 0; j < folderName.length; j++)
    {   for (let i = 0; i < x.length; i++) {
            if(folderName[j] == x[i])
                // letter = y[i];
            result += y[i];
        }
    }

    //why the number section doesn't working
    let x1 = "1234567890";
    let y1 = "6543219807";

    for(let i = 0; i < img_index.length; i++)
    {
        for(let j = 0; j < x1.length; j++)
            {
                console.log(img_index[i])
                if(img_index[i] == x1[j])
                    result += y1[j];
            }
    }

    console.log(result);
    return result;
}



// Bed Room icons   Dining Room icons   Home Office icons