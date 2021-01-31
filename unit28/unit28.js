class Goods {
constructor(name, amount, image, count) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
}
draw() {
    document.querySelector(this.out).innerHTML=`<p class="${this.ccsClass}">${this.image}</p>`;
}
}

let goods = new Goods('Lays', '25$' )
console.log(goods)