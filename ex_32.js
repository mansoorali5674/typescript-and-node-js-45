"use strict";
let current_users = ["Admin", "Ali", "Hamza", "Fatima"];
let new_users = ["Admin", "Fatima", "Aliza", "Noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_userss of new_users) {
    if (current_users_lower.includes(new_userss.toLowerCase())) {
        console.log(`Sorry ${new_userss}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_userss}, is still in avaliable list`);
    }
}
