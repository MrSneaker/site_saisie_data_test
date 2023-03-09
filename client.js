function test() {
    let html = document.getElementById("paragraphe");
    html.innerHTML +=
        `<p>
            j'adore vivre
        </p>`;
    return { html };
}