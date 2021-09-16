export const createPerson = (firstName, lastName, birthDate) => {
  return {
    id: Math.floor(Math.random() * 100000),
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


