import { Button } from "react-bootstrap";
import error404 from "../../assets/error404.png"

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error404} alt="error 404"></img>
            <div>
                <Button variant='primary' className="m-4">Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;