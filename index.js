// Inheritance and Extends

class Villain {

  constructor(name, description, bodyCount){
    this.name = name
    this.description = description
    this.bodyCount = bodyCount
    this.batman = "robin"
  }

  murder = (name) => {
    this.bodyCount ++
    console.log(`${this.name} has murdered ${name}. Their body count is now ${this.bodyCount}`)
  }

}

class Creature extends Villain {

  constructor({name, description, bodyCount, lair, image_url:imageUrl}){
    super(name, description, bodyCount)
    // super: Run the constructor of the parent class
      // this.name = name
      // this.description = description
      // this.bodyCount = bodyCount
    this.lair = lair
    this.imageUrl = imageUrl
  }

  dragBackToLair = (person) => {
    console.log(`${this.name} has dragged ${person} back to ${this.lair}`)
  }

}

const invisibleMan = new Creature({name: "Invisible Man", description: "Claude Rains harassing randos", bodyCount: 25, lair: "Academia", image_url: "https://i.etsystatic.com/9102095/r/il/825fe3/1899035981/il_570xN.1899035981_rc1f.jpg"})


// Prototypes

function CreepyDoll(name, description){
  this.name = name
  this.description = description
  this.sayName = () => console.log(`My name is ${this.name}`)
}

const chucky = new CreepyDoll("Chucky", "Angry redhead pinnochio")

// Changing an existing prototype:
// Adds the ability to read off any array like you're the count from sesame street.

Array.prototype.countLikeTheCountFromSesameStreet = function(){
  this.forEach(item => {
      console.log(item)
      console.log("ah-ha-ha")
  })
}

// [1, 2, 3].countLikeTheCountFromSesameStreet()
