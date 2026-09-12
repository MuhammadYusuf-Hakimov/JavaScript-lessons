class Xm {
    constructor(ism, yosh, familiya) {
        this.ism = ism;
        this.yosh = yosh;
        this.familiya = familiya;
    }

    malumot() {
        console.log(`Ism: ${this.ism}`);
        console.log(`Yosh: ${this.yosh}`);
        console.log(`Familiya: ${this.familiya}`);
    }
}

class Ota extends Xm {
    constructor(ism, yosh, familiya) {
        super(ism, yosh, familiya);
    }
}

class Men extends Xm {
    constructor(ism, yosh, familiya) {
        super(ism, yosh, familiya);
    }
}

let ota = new Ota("Abdulatif", 42, "Xakimov");

let men = new Men("Muhammadyusuf", 14, "Xakimov");

console.log("Otamning ma'lumotlari:");
ota.malumot();

console.log("Mening ma'lumotlarim:");
men.malumot();