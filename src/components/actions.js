import i18n from "i18next";

export function getLabel({ name, yearOfBirth }) {
  const getYear = () => {
    return yearOfBirth !== "" ? " [" + yearOfBirth + "]" : "";
  };
  return name + getYear();
}

export function getClassList(gender) {
  return "space-b border " + (gender ? "border-danger" : "border-light");
}

export function getResult(relatives) {
  let index = 0;
  //TODO move to a LinkedList
  while (index < relatives.length && !relatives[index].gender) {
    index++;
  }
  index++;

  const res =
    index < relatives.length &&
    parseInt(relatives[index].yearOfBirth, 10) < 1948;

  return res;
}

export function changeLanguage(lg) {
  i18n.changeLanguage(lg);
}
