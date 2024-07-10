// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks(num) {
    return Math.abs(num - hqBlock);
}

const distanceFromHqInFeet = function (num, hqBlock = 42) {
    const blocks = distanceFromHqInBlocks(num, hqBlock);
    const eachFeetPerBlock = 264;
    return blocks * eachFeetPerBlock;
  };
  const distanceTravelledInFeet = function (num, hqBlock) {
    const eachFeetPerBlock = 264;
    const blocks = Math.abs(num - hqBlock);
    return blocks * eachFeetPerBlock;
  };
  const calculatesFarePrice = function (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return "cannot travel that far";
    }
  };

