function loadProducts() {
    fetch('products.xml')
        .then(response => response.text())
        .then(xmlString => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, "application/xml");
            const products = xmlDoc.getElementsByTagName('product');
            let productHTML = '';
            for (let product of products) {
                const name = product.getElementsByTagName('name')[0].textContent;
                const projectId = product.getElementsByTagName('project-id')[0]?.textContent || 'N/A';
                const price = product.getElementsByTagName('price')[0].textContent;
                const description = product.getElementsByTagName('description')[0].textContent;
                productHTML += `<div class="product">
                                    <h2>${name}</h2>
                                    <p>Price: $${price}</p>
                                    <p>${description}</p>
                                </div>`;
            }
            document.getElementById('productList').innerHTML = productHTML;
        })
        .catch(error => console.error('Error loading products:', error));
}

// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);
