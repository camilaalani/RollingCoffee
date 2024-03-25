import { Container, Row } from "react-bootstrap";
import CardProducto from "../producto/CardProducto";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Inicio = () => {
  const [productos, setProductosInicio] = useState([]);
  useEffect(() => {
    leerProductosInicio();
  }, []);

  const leerProductosInicio = async () => {
    try {
      const productosAPIinicio = await leerProductosAPI();
      setProductosInicio(productosAPIinicio);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/13591748/pexels-photo-13591748.jpeg"
        alt="fondo café"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestros Productos</h1>
        <hr />
        <Row>
        {
          productos.map((producto)=>  <CardProducto key={producto.id} producto={producto}></CardProducto>)
         }
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
