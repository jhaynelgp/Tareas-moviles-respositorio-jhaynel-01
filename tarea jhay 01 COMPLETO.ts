// Definimos la interfaz User como pide el profesor
interface User {
  name: string;
  email: string;
  username: string;
  city: string;
}

// Petición HTTP GET al endpoint usando fetch
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((data: any[]) => {

    // Pista: revisamos con console.log(data[0]) la estructura
    console.log(data[0]);

    // Usamos map para transformar el arreglo y le asignamos el tipo User[]
    const usuariosTransformados: User[] = data.map((usuario): User => {
      return {
        name: usuario.name,
        email: usuario.email,
        username: usuario.username,
        city: usuario.address.city
      };
    });

    // Mostramos en consola el nuevo arreglo transformado
    console.log(usuariosTransformados);
  });