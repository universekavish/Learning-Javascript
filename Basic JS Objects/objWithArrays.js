var employees = [
	{
		name: "Mike",
		age: 32,
		skills: ["JavaScript", "CSS", "HTML", "JQuery"]
	},
	{
		name: "Hichem",
		age: 40,
		skills: ["JavaScript"]
	},
	{
		name: "Mary",
		age: 21,
		skills: ["Python"]
	},
	{
		name: "Jack",
		age: 35,
		skills: ["AI"]
	}
]

var res = employees.filter(function(e){
	if(e.skills.indexOf("JavaScript") === -1){
		return false;
	}else {
		return true;
	}
})

console.log(res);