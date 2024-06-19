let imagesSection = document.querySelector("#images-section");
//Sticky Nav

let header = document.querySelector("header");
let Section1_initialCoords = document.querySelector("#furniture-type-section").getBoundingClientRect();

window.addEventListener("scroll", function(e) {
    if(window.scrollY > Section1_initialCoords.top)
        header.classList.add("sticky"); 
    else
        header.classList.remove("sticky");
});

let footer = document.querySelector("footer");
let imagesSection_initialCoords = document.querySelector("#images-section").getBoundingClientRect();

window.addEventListener("scroll", function(e) {
    if(window.scrollY > imagesSection_initialCoords.height)
        footer.classList.add("fixed");
    else
        footer.classList.remove("fixed");

});

let choicesContainer = document.querySelector("#choices-container");

let living_room_names = ["armchairs", "carbinets", "chairs", "coffee tables", "console tables", "side tables", "sofa sectionals", "sofas", "TVs"];
let living_room_images = ["arm chair.png", "Carbinets.jpg", "Chairs.jpg", "Coffee Tables.png",
     "Console Tables.png", "side tables.jpg", "Sofa Sectionals.png", "Sofa.jpg", "TV.jpg"];
     
let dining_room_names = ["buffets and sideboards", "chest of drawers", "dining chairs", "dining tables"];
let dining_room_images = ["Buffets and Sideboards.jpg", "chest of drawers.png", "dining chairs.jpg", "dining tables.jpg"];
     
let bed_room_names = ["bedroom chairs", "beds", "benches", "beside tables", "chaises lounges", "dressing tables", "storage walls", "wardrobes"];
let bed_room_images = ["bedroom chairs.png", "Beds.png", "benches.png", "beside tables.png",
     "chaises lounges.png", "dressing tables.png", "storage walls.png", "wardrobes.png"];
     
let home_office_names = ["book cases", "desks", "poufs"];
let home_office_images = ["book cases.png", "desks.png", "poufs.png"];

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
                img.classList.add("lazy-img");
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

let optionsContainer = document.querySelectorAll(".options_container");

// function generateOptionsContainerComponents()
// {
// optionsContainer.forEach(container => {
    // let rating = document.createElement("div");
    // rating.classList.add("rating");
    // container.appendChild(rating);
// });
// }
// generateOptionsContainerComponents();

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

const houseFurBtn = document.querySelector("#house-fur-btn");
const houseSupFurBtn = document.querySelector("#house-sup-fur-btn");
const furnitureTypeBtns = document.querySelectorAll("#furniture-type button");

// furnitureTypeBtns.forEach(btn => {
//     btn.addEventListener("click", function(e) {
//         if(btn.classList.contains("clicked"))
//             btn.classList.remove("clicked");
//         else 
//         btn.classList.add("clicked");
//     });
// });

houseFurBtn.addEventListener("click", function(e) {
    houseSupFurBtn.classList.remove("clicked"); 
    houseFurBtn.classList.add("clicked");
});

houseSupFurBtn.addEventListener("click", function(e) {
    houseFurBtn.classList.remove("clicked"); 
    houseSupFurBtn.classList.add("clicked");
});

// Bed Room icons   Dining Room icons   Home Office icons

//Lazy Loading 
let fur_imgs = document.querySelectorAll("#images-section img");

let ImgLoading = function(entries, observer)
{
    let [entry] = entries;
    console.log(entry);

    if(!entry.isIntersecting) return;

    entry.target.addEventListener("load", function() {
        entry.target.classList.remove("lazy-img");
    });

    observer.unobserve(entry.target);
}

let ImgObserver = new IntersectionObserver(ImgLoading, {
    root: null,
    threshold: 0
});

fur_imgs.forEach(img => ImgObserver.observe(img));