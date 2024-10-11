import ClipLoader from "react-spinners/ClipLoader"; // Usando react-spinners

const Loading = () => {
  return (
    <div className="overlay-loading">
      <div style={styles.loaderContainer}>
        <ClipLoader color="#3498db" size={50} />
      </div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    position: "fixed", // Fijado en la página
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex", // Flexbox para centrar
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semitransparente
    zIndex: 9999, // Asegura que esté por encima de otros elementos
  },
};

export default Loading;
