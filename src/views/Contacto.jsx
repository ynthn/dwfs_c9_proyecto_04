import { useState } from "react";
import Loading from "../components/Loading";
import ModalMessage from "../components/ModalMessage";




const Contacto = () => {

    /**
   * VALORES INICIALES
   */
    const [stateLoading, setStateLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [nameModal, setNameModal] = useState("");

    const valorInicial = {
        name: "",
        email: "",
        subjetc: "",
        message: ""
    }

    const [usuario, setUsuario] = useState(valorInicial);


    /**
    * DATOS DE INPUT 
    */
    const capturarInputs = (e) => {
        e.preventDefault()

        const { name, value } = e.target;

        setUsuario({
            ...usuario,
            [name]: value
        });
    }


    /**
     * ENVIAR DATOS
     */
    async function formContacto(event) {
        setStateLoading(true);
        event.preventDefault();
        try {
            console.log(usuario);
            setNameModal(usuario.name);
        } catch (error) {
            console.log(error)
        } finally {
            console.log("finally")
            setStateLoading(false);
            setShow(true);
        }
        setUsuario({ ...valorInicial })
    }

    return (
        <>
            <Loading stateLoading={stateLoading} setStateLoading={setStateLoading}></Loading>
            <ModalMessage setShow={setShow} show={show}>
                Gracias <b>{nameModal}</b> por escribirnos, pronto te contactaremos!
            </ModalMessage>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            CONTACTO
                        </div>
                    </div>

                    <div className="col-md-12"><hr /></div>

                    <div className="col-md-6">
                        <div className="contacto-title-1">Completa el formulario de contacto y pronto te contactaremos</div>
                        <br />
                        <div className="contacto-title">Datos de contacto</div>
                        <ul className="contacto-li">
                            <li>+56 9 8916 2225</li>
                            <li>yonathan.munoz.bravo@gmail.com</li>
                        </ul>

                        <div className="contacto-title">Horario de atención</div>
                        <div className="contacto-text">Lunes a viernes: 11:00 hrs - 16:00 hrs</div>
                        <br />
                        <div className="contacto-title">Ubicación</div>
                        <div className="contacto-text">Chile. Región del Maule</div>

                    </div>


                    <div className="col-md-6">
                        <form onSubmit={formContacto}>

                            <div className="col-md-12">
                                <label>Nombre</label>
                                <input type="text" name="name" value={usuario.name} onChange={capturarInputs} className="form-control" required />
                            </div>

                            <div className="col-md-12">
                                <label>E-mail</label>
                                <input type="email" name="email" value={usuario.email} onChange={capturarInputs} className="form-control" required />
                            </div>


                            <div className="col-md-12">
                                <label>Asunto</label>
                                <input type="text" name="subjetc" value={usuario.subjetc} onChange={capturarInputs} className="form-control" required />
                            </div>


                            <div className="col-md-12">
                                <label>Mensaje</label>
                                <textarea name="message" className="form-control" value={usuario.message} onChange={capturarInputs} required></textarea>
                            </div>


                            <div className="col-md-12">
                                <br />
                                <button type="submit" className="form-control btn btn-primary btn-send">ENVIAR MENSAJE</button>
                            </div>

                        </form>
                    </div>




                </div>
            </div>
        </>
    )
}

export default Contacto;