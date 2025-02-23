const users = [
    { id: 1, name: 'Alice', age: 25, city: 'New York', skills: ['JavaScript', 'React'] },
    { id: 2, name: 'Bob', age: 30, city: 'San Francisco', skills: ['Python', 'Django'] },
    { id: 3, name: 'Charlie', age: 35, city: 'New York', skills: ['Java', 'Spring'] },
    { id: 4, name: 'David', age: 28, city: 'Los Angeles', skills: ['JavaScript', 'Node.js'] },
    { id: 5, name: 'Eve', age: 22, city: 'Chicago', skills: ['C++', 'Algorithms'] },
  ];

  


  function countUsersByCity() {
    return users.reduce((acc, user) => {
      acc[user.city] = (acc[user.city] || 0) + 1;
      return acc;
    }, {});
  }
  
  const usersByCity = countUsersByCity();
  console.log(usersByCity);




 