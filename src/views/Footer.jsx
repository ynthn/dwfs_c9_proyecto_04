

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="footer-title">Datos de contacto</div>
                            <ul className="footer-li">
                                <li>+56 9 8916 2225</li>
                                <li>yonathan.munoz.bravo@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-title">Redes Sociales</div>

                            <ul className="footer-rrss">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-4">
                            <div className="footer-title">Horario de atención</div>
                            <div className="footer-text">Lunes a viernes: 11:00 hrs - 16:00 hrs</div>
                            <div className="footer-title">Ubicación</div>
                            <div className="footer-text">Chile. Región del Maule</div>
                        </div>
                        <div className="col-md-12">
                            <div className="copyright">
                                2023 - PROYECTO 4: Aplicación "Restaurante" - Yonathan Muñoz Bravo
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;