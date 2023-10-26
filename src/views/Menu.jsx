import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/Firebase";
import Card from 'react-bootstrap/Card';
import Loading from "../components/Loading";

const Menu = () => {

    const [stateLoading, setStateLoading] = useState(false);

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const getMenu = async () => {
            setStateLoading(true);
            try {
                const collectionRef = collection(db, "carta");
                const response = await getDocs(collectionRef);

                const docs = response.docs.map((doc) => {
                    const data = doc.data() // la informacion de cada documento que guarda firestore
                    data.id = doc.id;
                    return data
                })

                setMenu(docs);
                console.log(docs);

            } catch (error) {
                console.log(error)
            }finally{
                setStateLoading(false);
                console.log("finally");
            }
        }
        getMenu();
    }, [])


    return (
        <>
            <Loading stateLoading={stateLoading} setStateLoading={setStateLoading}></Loading>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            CARTA DEL RESTAURANTE
                        </div>
                    </div>





                    {menu.map((plato) => (
                        <div key={plato.id} className="col-md-3">
                            <Card style={{ width: "100", }}>
                                <Card.Img style={{ width: "100%" }} variant="top" src={plato.img} alt={plato.title} />
                                <Card.Body>
                                    <Card.Title>{plato.title.toUpperCase()}</Card.Title>
                                    <Card.Text style={{ height: "20px" }}>{plato.detail}</Card.Text>
                                    <Card.Text >Precio: ${plato.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}




                </div>
            </div>
        </>
    )
}

export default Menu;