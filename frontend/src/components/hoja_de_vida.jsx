import hojaDeVidaPDF from "../assets/hoja_de_vida.pdf";

function HojaDeVida() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <embed
        src={hojaDeVidaPDF}
        type="application/pdf"
        width="100%"
        height="800px"
      />
    </div>
  );
}

export default HojaDeVida;
