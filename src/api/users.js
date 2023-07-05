export const getUsers = async () => {
    const data = await fetch('http://localhost:3004/users');
    return await data.json();
  }