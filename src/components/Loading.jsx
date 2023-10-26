const Loading = ({ children, stateLoading, setStateLoading }) => {



    return (
        <>
            {stateLoading &&
                <div className="loading">
                    <span className="loader"></span>
                    {children}
                </div>
            }
        </>
    )
}

export default Loading;