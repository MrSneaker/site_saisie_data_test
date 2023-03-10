
var is_open = false;

function test() {
    let html = document.querySelector("#paragraphe");
    html.innerHTML +=
        `<p>
            j'adore vivre
        </p>`;
    return { html };
}

function aff_menu() {
    let opened = is_open;
    let html = document.querySelector("#menu");
    if (opened != true) {
        html.innerHTML +=
            `<p>
            je retourne le menu
        </p>`;
        opened = true;
        is_open = opened;
    }
    else {
        html.innerHTML = `Menus`;
        opened = false;
        is_open = opened;
    }
    console.log(is_open);
    return html;
}