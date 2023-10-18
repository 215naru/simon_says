import "./styles.css";

const sleep = function (ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
};

const changeCardColor = (element, callback) => {
  // agregar la clase flash
  sleep(1000, function () {
    // eliminar la clase flash y seguir con el proceso
  });
};

const flashColor = () => {
  sleep(1000, function () {
    // crear la constante redCard con elemento de color rojo
    changeCardColor(redCard, function () {
      // crear la constante yellowCard con elemento de color rojo
      changeCardColor(yellowCard, function () {
        // crear la constante greenCard con elemento de color rojo
        changeCardColor(greenCard, function () {
          // crear la constante blueCard con elemento de color rojo
          changeCardColor(blueCard, function () {
            // crear la constante redCard con elemento de color rojo
            changeCardColor(redCard, function () {
              console.log("¡¡ finish !!");
            });
          });
        });
      });
    });
  });
};

//agregar el evento click a nuestro boton llamando a la función flashColor
