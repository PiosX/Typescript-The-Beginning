// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
// 	name: string;
// 	age: 30;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Peter",
// 	age: 30,
// 	hobbies: ["Sports", "Cooking"],
// 	role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
	ADMIN = "ADMIN",
	READ_ONLY = 100,
	AUTHOR = "AUTHOR",
}

const person = {
	name: "Peter",
	age: 30,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "admin"];

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
	console.log("is admin");
}
