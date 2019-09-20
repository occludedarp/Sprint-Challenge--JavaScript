// 1. Copy and paste your prototype in here and refactor into class syntax.



class CuboidBaker{
    constructor(attributes){
      this.length = attributes.length,
      this.width = attributes.width,
      this.height = attributes.height
    }
      volume(){
        return this.length * this.width * this.height
      }
      surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
      }
  };
  
  
  let kuboid = new CuboidBaker({
    length: 4,
    width: 5,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(kuboid.volume()); // 100
console.log(kuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidBaker{
  constructor(attributes){
    super(attributes);
  }

};

let Cubey = new CubeMaker({
  length: 3,
  width: 6,
  height: 9
})

console.log(Cubey.surfaceArea());
console.log(Cubey.volume());