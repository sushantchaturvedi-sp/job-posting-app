export function login(email) {
    let role;
    
    if (email === "admin@example.com") {
        role = "admin";
    } else {
        role = "user";
    }

    localStorage.setItem("user", JSON.stringify({ email: email, role: role }));
}

export function logout() {
    localStorage.removeItem("user");
    window.location.reload();
}

export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}
