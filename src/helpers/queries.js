const URI_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

console.log(URI_PRODUCTOS);

// GET
export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

// GET de 1 producto
export const obetenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`);
    //const productoBuscado = await respuesta.json();
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// POST
export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URI_PRODUCTOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoNuevo),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// DELETE
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "DELETE",
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT
export const editarProductoAPI = async (id, producto) => {
  try {
    const respuesta = await fetch(`${URI_PRODUCTOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//cuando tenga el backend realizar una peticion POST para el login
const admin = {
  email: "admin@rollingcode.com",
  password: "123Aa123",
};

export const login = (usuario) => {
  if (usuario.email === admin.email && usuario.password === admin.password) {
    sessionStorage.setItem("inicioRollingCoffe", JSON.stringify(usuario.email));
    return true;
  } else {
    return false;
  }
};
