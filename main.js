/*
    1.The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.
    
    2.The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.
    
    3.The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.

    4.The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.
*/

const createChassis = () => {
  const newChassisObject = {};
  console.log("I have created a chassis");
  return newChassisObject;
};

const addweels = (object) => {
  object.wheels = 4;
  console.log("I have added 4 wheels");
  return object;
};

const addEngine = (object) => {
  newChassisObject.engine = "4.8L";
  console.log("I have added the Engine");
  return newChassisObject;
};

const addSteeringWheel = (object) => {
  newChassisObject.steeringWheel = "Tilting";
  console.log("I have added the Steering Wheel");
  return newChassisObject;
};

const addDriveTrain = (object) => {
  newChassisObject.driveTrain = "Two wheel drive";
  console.log("I have added the Drive Train");
  return newChassisObject;
};

const newChassisObject = createChassis();
const chassisWithWheels = addweels(newChassisObject);
const chassisWithEngine = addEngine(chassisWithWheels);
const chassisWithSterringWheel = addSteeringWheel(chassisWithEngine);
const chassisWithDriveTrain = addDriveTrain(chassisWithSterringWheel);
console.log(`Here is my car which has ${chassisWithDriveTrain}`);
