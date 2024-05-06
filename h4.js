let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];


// Основное задание
function admin1(arr) {
    let newUsers1 = arr.map((item) => {
        return {...item, admin: 'false'};
    });
    return newUsers1;
}

console.log(admin1(users));


// Дополнительное задание
function admin2(arr) {
    let newUser2 = arr.map((item) => {
        if (item.name === 'Маша') {
            return {...item, admin: 'true'};
        } else {
            return {...item, admin: 'false'};
        };
        
    });
    return newUser2;
};    

console.log(admin2(users));