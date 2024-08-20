/* Object */
/*const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function(){
        //stuff
    }
}

myObject.property;
myObject['obnoxious property'];*/

/* Objeto Construtor */
/*function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name)
    };
}

const player1 = new Player('steve','X');
const player2 = new Player('also steve', 'O');
player1.sayName();
player2.sayName();*/

/* Aplicando Construtor e Prototype */
/*function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read + ".";
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295','not read yet');
console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit));

Book.prototype.saga = function() {
    console.log("LOTR");
};

theHobbit.saga();*/

/* Método recomendado para herdar através de prototype */
function Person(name){
    this.name = name;
}

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}!`);
};

function Player(name,marker){
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype);

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype);

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();