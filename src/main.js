main();

async function main() {
    if (typeof wishlistData !== "undefined" && Array.isArray(wishlistData.products)) {
        addElement(wishlistData.products);
    }
}

async function loadJSON() {
    try {
        const response = await fetch("./wishlist.json");
        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error("Impossibile caricare wishlist.json:", error);
    }
}

function addElement(products) {
    const prodList = document.getElementById("prodList");
    
    for (let product of products) {        
        const newDiv = document.createElement("div");
        newDiv.classList.add("prodCard");

        const img = document.createElement("img");
        img.src = product.image;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("prodInfo");
        
        const title = document.createElement("h2");
        title.innerText = product.title;

        const button = document.createElement("button");
        button.innerHTML = "Vai alla pagina"
        button.addEventListener("click", () => {
            window.open(product.link);
        })

        infoDiv.append(title, button);
        newDiv.append(img, infoDiv);

        prodList.append(newDiv);
    }
}

