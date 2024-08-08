export async function getProductList(searchTerm) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/products?name_like=${searchTerm ? searchTerm : ""}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
}

export async function getProduct(id) {
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/products/${id}`);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
}

export async function getFeaturedList() {
    const response = await fetch(`${process.env.REACT_APP_HOST}/api/featured_products`);
    if (!response.ok) {
        throw new Error(`Error: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
}
