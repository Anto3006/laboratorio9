class QuizAlgebraSimple{
    constructor(elementoQuiz){
        this.quiz = elementoQuiz;
        this.preguntas = [];
        this.respuestas = [];
        this.preguntasEscogidas = [];
        this.inicializarPreguntasRespuestas();
    }

    inicializarPreguntasRespuestas(){
        this.preguntas.push("2+5*10-6/2");
        this.respuestas.push("49")

        this.preguntas.push("2+5*(10-6/2)");
        this.respuestas.push("37");

        this.preguntas.push("5+10*6/3");
        this.respuestas.push("25");

        this.preguntas.push("30/2+3*5");
        this.respuestas.push("30");

        this.preguntas.push("30/(2+3)*2");
        this.respuestas.push("12");

        this.preguntas.push("15/3-6*2");
        this.respuestas.push("-7");

        this.preguntas.push("5-10+35*2");
        this.respuestas.push("65");

        this.preguntas.push("3+6*2-5*4");
        this.respuestas.push("-5");

        this.preguntas.push("5+26/2-3*5");
        this.respuestas.push("3");

        this.preguntas.push("10-5*3+6/2");
        this.respuestas.push("-2")

        this.preguntas.push("60/(3*2)+2");
        this.respuestas.push("12");

        this.preguntas.push("3*5-6+2");
        this.respuestas.push("11");

        this.preguntas.push("3*(2+3)/3");
        this.respuestas.push("5");

        this.preguntas.push("5+2*10/4");
        this.respuestas.push("10");

        this.preguntas.push("3-4*2+5");
        this.respuestas.push("0");

        this.preguntas.push("(12+3*2)/3");
        this.respuestas.push("6");

        this.preguntas.push("8*2+2-6");
        this.respuestas.push("12");
        
        this.preguntas.push("23+4*2-2");
        this.respuestas.push("29");

        this.preguntas.push("3*(4*2+3)-20");
        this.respuestas.push("13");
        
        this.preguntas.push("(5+3*2-5)/2");
        this.respuestas.push("3");
    }

    agregarPreguntas(){
        let campoNumeroPreguntas = this.quiz.getElementsByClassName("campo-numero-preguntas")[0];
        let numeroPreguntas = parseInt(campoNumeroPreguntas.value);
        let contenedorPreguntas = this.quiz.getElementsByClassName("contenedor-preguntas-responder")[0];
        contenedorPreguntas.innerHTML = "";
        if(isNaN(numeroPreguntas)){

        }
        else{
            let preguntasPosibles = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
            this.preguntasEscogidas = [];
            for(let numeroPregunta = 1; numeroPregunta <= numeroPreguntas; ++numeroPregunta){
                let indiceEscogido = Math.floor(Math.random() * preguntasPosibles.length)
                let preguntaEscogida = preguntasPosibles[indiceEscogido];
                this.preguntasEscogidas.push(preguntaEscogida);
                preguntasPosibles.splice(indiceEscogido,1);
                this.agregarPregunta(this.preguntas[preguntaEscogida],numeroPregunta);
            }
        }
    }

    agregarPregunta(enunciado,numeroPregunta){
        let contenedorPreguntas = this.quiz.getElementsByClassName("contenedor-preguntas-responder")[0];
        contenedorPreguntas.appendChild(this.crearPregunta(enunciado,numeroPregunta));
    }

    crearPregunta(enunciado,numeroPregunta){
        let contenedorPregunta = document.createElement("label");
        contenedorPregunta.classList.add("pregunta");

        let contenedorNumeroPregunta = document.createElement("div")
        contenedorNumeroPregunta.classList.add("contenedor-numero-pregunta");
        contenedorNumeroPregunta.innerHTML = numeroPregunta;
        contenedorPregunta.appendChild(contenedorNumeroPregunta);

        let contenedorEnunciadoPregunta = document.createElement("p");
        contenedorEnunciadoPregunta.innerHTML = enunciado;
        contenedorEnunciadoPregunta.classList.add("enunciado-pregunta")
        contenedorPregunta.appendChild(contenedorEnunciadoPregunta);

        let campoDeRespuesta = document.createElement("input");
        campoDeRespuesta.type = "text";
        campoDeRespuesta.classList.add("campo-respuesta-pregunta")
        contenedorPregunta.appendChild(campoDeRespuesta);

        return contenedorPregunta;
    }

    ponerRespuestas(){
        let contenedoresPreguntas = document.getElementsByClassName("pregunta")
        let indicePregunta = 0;
        for(let pregunta of contenedoresPreguntas){
            let contenedorRespuestaViejo = pregunta.getElementsByClassName("respuesta-pregunta")[0];
            if(contenedorRespuestaViejo != undefined)
                contenedorRespuestaViejo.remove();
            let contenedorRespuestaPregunta = document.createElement("p");
            contenedorRespuestaPregunta.classList.add("respuesta-pregunta");
            contenedorRespuestaPregunta.innerHTML = this.respuestas[this.preguntasEscogidas[indicePregunta]];
            pregunta.appendChild(contenedorRespuestaPregunta);
            ++indicePregunta;
        }
    }

    revisarRespuestas(){
        let contenedoresPreguntas = document.getElementsByClassName("pregunta")
        let indicePregunta = 0;
        for(let pregunta of contenedoresPreguntas){
            let campoRespuesta = pregunta.getElementsByClassName("campo-respuesta-pregunta")[0];
            let claseRespuesta = "respuesta-mala"
            if(campoRespuesta.value === this.respuestas[this.preguntasEscogidas[indicePregunta]]){
                claseRespuesta = "respuesta-buena"
            }
            pregunta.classList.remove(...["respuesta-mala","respuesta-buena"])
            pregunta.classList.add(claseRespuesta);
            ++indicePregunta;
        }
        this.ponerRespuestas();
    }
}

function mostrarModalVerRespuestas(){
    let modalVerRespuesta = document.getElementById("modal-confirmacion-ver-respuestas")
    modalVerRespuesta.style.display = "block";
}

function mostrarModalRevisarRespuestas(){
    let modalRevisarRespuesta = document.getElementById("modal-confirmacion-revisar-respuestas")
    modalRevisarRespuesta.style.display = "block";
}
