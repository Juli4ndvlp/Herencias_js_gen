class Empleado {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = Number(salary);
        this.active = true;
    }
    active() {
        return this.active
    }
    present() {
        return `Hello my name is ${this.name} and I work as ${this.position}.`;
    }
    anual_salary() {
        return this.salary * 12
    }
    desactive() {
        this.active = false
    }
    info() {
        const statee = this.active ? "Active" : "desactive"
        return `Name: ${this.name} | Position: ${this.position} | Monthly Salary: $${this.salary} | State: ${statee}`;
    }
}
let empleado1 = new Empleado("Julian", "Developer", 10000)
console.log(empleado1.present())
console.log(empleado1.anual_salary())
console.log(empleado1.info())


class Lider extends Empleado {
    constructor(name, salary, team) {
        super(name, salary);
        this.team = team;
    }
    presentTeam() {
        return `my team is conformed for : ${this.team.join(", ")}`;
    }
    addMember(name) {
        this.team.push(name);
        return `${name} has been added to the team`
    }
    info() {
        return `${super.info()} | Team: ${this.team.length}`;
    }
}

let boss = new Lider("Julian", 10000, ["Fabian", "yuly", "didier"])
let boss2 = new Lider("Fabian", 5000000, ["Ana", "Carlos", "Sofía"]);

console.log(boss.anual_salary());
console.log(boss2.anual_salary());

console.log(boss2.desactive());
console.log(boss2.info());

console.log(boss.presentTeam());
console.log(boss.addMember("Juan"));
console.log(boss.presentTeam());
console.log(boss.info())