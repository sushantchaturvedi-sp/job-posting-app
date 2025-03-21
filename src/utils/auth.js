// export function login(email) {
//     const role = email === "admin@example.com" ? "admin" : "user";
//     localStorage.setItem("user", JSON.stringify({ email, role }));
// }

// export function logout() {
//     localStorage.removeItem("user");
//     window.location.reload();
// }

// export function getUser() {
//     return JSON.parse(localStorage.getItem("user"));
// }


// Login function: Stores user info in localStorage
export function login(email) {
    let role;
    
    // Assign "admin" role if email matches, otherwise assign "user"
    if (email === "admin@example.com") {
        role = "admin";
    } else {
        role = "user";
    }

    // Save user details in localStorage
    localStorage.setItem("user", JSON.stringify({ email: email, role: role }));
}

// Logout function: Removes user from localStorage and refreshes the page
export function logout() {
    localStorage.removeItem("user");
    window.location.reload(); // Refresh to apply changes
}

// Get user details from localStorage
export function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}
