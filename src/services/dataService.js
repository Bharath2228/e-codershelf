export async function getUser() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    if (!token || !ebid) {
        throw new Error("Authentication token or user ID is missing.");
    }

    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/api/600/users/${ebid}`, requestOptions);
    if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();

    return data;
}

export async function getUserOrders() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    if (!token || !ebid) {
        throw new Error("Authentication token or user ID is missing.");
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/api/660/orders?user.id=${ebid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        throw new Error(`Failed to fetch orders: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
}

export async function createOrder(cartList, total, user) {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const ebid = JSON.parse(sessionStorage.getItem("ebid"));

    if (!token || !ebid) {
        throw new Error("Authentication token or user ID is missing.");
    }

    const order = {
        cartList: cartList,
        amount_pais: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
        },
    };

    const response = await fetch(`${process.env.REACT_APP_HOST}/api/660/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(order),
    });
    if (!response.ok) {
        throw new Error(`Failed to create order: ${response.statusText} (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
}
