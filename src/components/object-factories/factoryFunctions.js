export const createPersonNew = (firstName, lastName, birthDate) => {
  return {
    id: null,
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    getAge() {
      const today = new Date();
      const date = new Date(this.birthDate);

      let age = today.getFullYear() - date.getFullYear();
      const months = today.getMonth() - date.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
        age--;
      }
      return age;
    },
  };
};

export const createPerson = (id, firstName, lastName, birthDate) =>{
  return {
    id,
    firstName,
    lastName,
    birthDate,
    getAge() {
      const today = new Date();
      const date = new Date(birthDate);

      let age = today.getFullYear() - date.getFullYear();
      const months = today.getMonth() - date.getMonth();
      if (months < 0 || (months === 0 && today.getDate() < date.getDate())) {
        age--;
      }
      return age;
    },
  };  
}


