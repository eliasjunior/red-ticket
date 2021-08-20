export function getLabel({ name, yearOfBirth }) {
  const getYear = () => {
    return yearOfBirth !== "" ? " [" + yearOfBirth + "]" : "";
  };
  return name + getYear();
}

export function getBackground(gender) {
  return gender ? "space-b border border-danger" : "space-b";
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

export function displayResult(relatives, isDone){
    if (isDone) {
      if (relatives.length === 0) {
        return <div className="alert alert-warning">No Tree.</div>;
      }
      return getResult(relatives) ? (
        <div className="alert alert-danger">
          Voce nao tem direito da cidadania por via administrativa
        </div>
      ) : (
        <div className="alert alert-success">
          Parabens, Voce tem direito a cidadania
        </div>
      );
    } else {
      return "";
    }
  };

