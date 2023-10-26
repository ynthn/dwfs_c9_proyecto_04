import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import Button from 'react-bootstrap/Button';
import Loading from "../components/Loading";


const Reservar = () => {



    /**
     * VALORES INICIALES
     */

    const [stateLoading, setStateLoading] = useState(false);

    const valorInicial = {
        fecha: "",
        hora: "",
        cantidad: "",
        email: ""
    }

    const [cliente, setCliente] = useState(valorInicial);

    /**
     * DATOS DE INPUT 
     */
    const capturarInputs = (e) => {
        e.preventDefault()

        const { name, value } = e.target;

        setCliente({
            ...cliente,
            [name]: value
        });
    }

    /**
     * ENVIAR DATOS
     */
    async function formReservar(event) {
        setStateLoading(true);
        event.preventDefault();
        try {
            const collectionRef = collection(db, "reservas");
            await addDoc(collectionRef, {
                ...cliente
            });

        } catch (error) {
            console.log(error)
        } finally {
            getReservas();
        }
        setCliente({ ...valorInicial })
    }



    /**
     * DELETE RESERVA
     */
    async function deleteReserva(id) {
        setStateLoading(true);
        try {
            const taskDocRef = doc(db, 'reservas', id)
            await deleteDoc(taskDocRef);
            getReservas();
        } catch (error) {
            console.log(error)
        }
    }


    /**
     * LISTAR RESERVAS
     */
    const [reservas, setReservas] = useState([]);
    const getReservas = async () => {
        setStateLoading(true);
        try {
            const collectionRef = collection(db, "reservas");
            const response = await getDocs(collectionRef);

            const docs = response.docs.map((doc) => {
                const data = doc.data();
                data.id = doc.id;
                return data;
            })

            setReservas(docs);
            setStateLoading(false);
            console.log("try");
        } catch (error) {
            console.log(error);
            setStateLoading(false);
            console.log("catch");
        } finally {
            setStateLoading(false);
            console.log("finally");
        }
    }

    useEffect(() => {
        getReservas();
    }, [])



    return (
        <>
            <Loading stateLoading={stateLoading} setStateLoading={setStateLoading}></Loading>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            RESERVAR
                        </div>
                    </div>

                    <div className="col-md-12"><hr /></div>

                    <form onSubmit={formReservar}>
                        <div className="row">
                            <div className="col-md-3">
                                <label>Fecha</label>
                                <input type="date" name="fecha" value={cliente.fecha} onChange={capturarInputs} className="form-control" required />
                            </div>
                            <div className="col-md-2">
                                <label>Hora</label>
                                <select className="form-control" value={cliente.hora} onChange={capturarInputs} name="hora" required>
                                    <option value="">---</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label>Cantidad de personas</label>
                                <select className="form-control" value={cliente.cantidad} onChange={capturarInputs} name="cantidad" required>
                                    <option value="">---</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>

                            <div className="col-md-12"></div>

                            <div className="col-md-4">
                                <label>E-mail</label>
                                <input type="email" name="email" value={cliente.email} onChange={capturarInputs} className="form-control" required />
                            </div>

                            <div className="col-md-3">
                                <button type="submit" className="form-control btn btn-primary btn-reservar">RESERVAR</button>
                            </div>
                        </div>
                    </form>
                    <div className="col-md-12"><hr /></div>


                    <div className="col-md-12 table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Personas</th>
                                    <th>Email</th>
                                    <th className="text-center">Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {reservas.map(reserva => (
                                    <tr key={reserva.id}>
                                        <td>{reserva.fecha}</td>
                                        <td>{reserva.hora}</td>
                                        <td>{reserva.cantidad}</td>
                                        <td>{reserva.email}</td>
                                        <td className="text-center">
                                            <Button variant="danger" onClick={() => deleteReserva(reserva.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>


                </div>
            </div>
        </>
    )


}

export default Reservar;