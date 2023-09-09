export const getWeightedAverage = (item1, item2) => {
  return Number(item1) + Number(item2);
};

export const getPositionGrade = (weightedAverage) => {
  switch (true) {
    case weightedAverage >= 75 && weightedAverage <= 100:
      return "A1";
    case weightedAverage >= 70 && weightedAverage <= 74:
      return "B2";
    case weightedAverage >= 65 && weightedAverage <= 69:
      return "B3";
    case weightedAverage >= 60 && weightedAverage <= 64:
      return "C4";
    case weightedAverage >= 55 && weightedAverage <= 59:
      return "C5";
    case weightedAverage >= 50 && weightedAverage <= 54:
      return "C6";
    case weightedAverage >= 45 && weightedAverage <= 49:
      return "D7";
    case weightedAverage >= 40 && weightedAverage <= 44:
      return "E8";
    case weightedAverage >= 0 && weightedAverage <= 39:
      return "F9";
    default:
      return "";
  }
};
export function getComment(weightedAverage) {
  switch (true) {
    case weightedAverage >= 75 && weightedAverage <= 100:
      return "Excellent";
    case weightedAverage >= 70 && weightedAverage <= 74:
      return "V/Good";
    case weightedAverage >= 65 && weightedAverage <= 69:
      return "Good";
    case weightedAverage >= 60 && weightedAverage <= 64:
      return "Credit";
    case weightedAverage >= 55 && weightedAverage <= 59:
      return "Credit";
    case weightedAverage >= 50 && weightedAverage <= 54:
      return "Credit";
    case weightedAverage >= 45 && weightedAverage <= 49:
      return "Pass";
    case weightedAverage >= 40 && weightedAverage <= 44:
      return "Pass";
    case weightedAverage >= 0 && weightedAverage <= 39:
      return "Fail";
    default:
      return "";
  }
}
