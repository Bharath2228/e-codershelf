export async function getProductList(searchTerm){

    const response = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getProduct(id){ 

    const response = await fetch(`http://localhost:8000/444/products/${id}`);
    if(!response.ok){
        throw new{ message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json();

    return data;

}

export async function getFeaturedList(){
    const response = await fetch("http://localhost:8000/444/featured_products"); 
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()

    return data;
}
