/* =========================================================
   ELEMENTOS
========================================================= */

const terminalBody =
    document.querySelector("#terminal-body");

const backgroundMusic =
    document.querySelector("#background-music");

const musicControl =
    document.querySelector("#music-control");

const flowerScene =
    document.querySelector(".flower-scene");

const tulipScene =
    document.querySelector("#tulip-scene");

const particlesContainer =
    document.querySelector("#particles");

const garden =
    document.querySelector("#garden");

const finalBouquet =
    document.querySelector("#final-bouquet");

const letterContainer =
    document.querySelector("#letter-container");

const letterText =
    document.querySelector("#letter-text");

const letterSignature =
    document.querySelector("#letter-signature");



/* =========================================================
   UTILIDADES
========================================================= */

function esperar(ms) {

    return new Promise(
        resolve =>
            setTimeout(resolve, ms)
    );

}


async function escribirTexto(
    elemento,
    texto,
    velocidad = 40
) {

    for (
        let i = 0;
        i < texto.length;
        i++
    ) {

        elemento.textContent +=
            texto[i];

        await esperar(
            velocidad
        );

    }

}



/* =========================================================
   TERMINAL
========================================================= */

async function agregarLinea(
    texto,
    clase = ""
) {

    const linea =
        document.createElement("div");


    linea.className =
        `terminal-line ${clase}`;


    terminalBody.appendChild(
        linea
    );


    await escribirTexto(
        linea,
        texto
    );


    await esperar(650);


    return linea;

}



/* =========================================================
   PARTÍCULAS
========================================================= */

function crearParticulas() {

    particlesContainer.innerHTML =
        "";


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.setProperty(
            "--duration",
            `${3 + Math.random() * 4}s`
        );


        particle.style.setProperty(
            "--delay",
            `${Math.random() * 4}s`
        );


        const size =
            2 + Math.random() * 3;


        particle.style.width =
            `${size}px`;


        particle.style.height =
            `${size}px`;


        particlesContainer.appendChild(
            particle
        );

    }

}



/* =========================================================
   CREAR TULIPÁN
========================================================= */

function crearTulipan(
    container,
    opciones = {}
) {

    const tulip =
        document.createElement(
            "div"
        );


    tulip.className =
        "tulip";


    tulip.style.left =
        `${opciones.left ?? 50}%`;


    tulip.style.width =
        `${opciones.width ?? 120}px`;


    tulip.style.height =
        `${opciones.height ?? 300}px`;


    tulip.style.setProperty(
        "--rotate",
        `${opciones.rotate ?? 0}deg`
    );


    tulip.style.setProperty(
        "--brightness",
        opciones.brightness ?? 1
    );


    tulip.style.setProperty(
        "--delay",
        `${opciones.delay ?? 0}s`
    );


    tulip.innerHTML = `

        <svg
            viewBox="0 0 150 325"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >

            <path
                d="M75 315 C73 260 77 215 75 165"
                fill="none"
                stroke="#536f3f"
                stroke-width="5"
                stroke-linecap="round"
            />

            <path
                d="M72 255 C45 248 25 230 16 198 C43 202 64 218 74 242 Z"
                fill="#637d42"
            />

            <path
                d="M77 270 C105 261 125 240 134 208 C105 216 84 232 76 252 Z"
                fill="#58753e"
            />

            <path
                d="M68 280 C42 274 23 257 10 230 C38 234 58 247 70 267 Z"
                fill="#506b3c"
                opacity="0.65"
            />

            <path
                d="M80 290 C108 282 128 263 140 238 C112 243 91 257 79 276 Z"
                fill="#4c6739"
                opacity="0.60"
            />

            <path
                d="M42 150 C42 112 52 82 75 72 C98 82 108 112 108 150 C100 170 88 180 75 180 C62 180 50 170 42 150 Z"
                fill="#c99d27"
            />

            <path
                d="M75 175 C50 174 30 158 28 130 C27 104 38 82 53 72 C59 96 69 111 75 122 Z"
                fill="#e7bd3c"
            />

            <path
                d="M75 175 C100 174 120 158 122 130 C123 104 112 82 97 72 C91 96 81 111 75 122 Z"
                fill="#d9aa2d"
            />

            <path
                d="M75 178 C60 165 55 140 58 110 C61 88 67 70 75 62 C83 70 89 88 92 110 C95 140 90 165 75 178 Z"
                fill="#f0ca4b"
            />

        </svg>

    `;


    container.appendChild(
        tulip
    );


    return tulip;

}



/* =========================================================
   JARDÍN
========================================================= */

function crearJardin() {

    garden.innerHTML =
        "";


    const flores = [

        {
            left: 24,
            width: 90,
            height: 230,
            rotate: -7,
            brightness: 0.65,
            delay: 0
        },

        {
            left: 32,
            width: 110,
            height: 270,
            rotate: -4,
            brightness: 0.75,
            delay: 0.2
        },

        {
            left: 40,
            width: 130,
            height: 315,
            rotate: -3,
            brightness: 0.85,
            delay: 0.4
        },

        {
            left: 50,
            width: 155,
            height: 370,
            rotate: 0,
            brightness: 1,
            delay: 0.6
        },

        {
            left: 60,
            width: 130,
            height: 315,
            rotate: 3,
            brightness: 0.85,
            delay: 0.4
        },

        {
            left: 68,
            width: 110,
            height: 270,
            rotate: 4,
            brightness: 0.75,
            delay: 0.2
        },

        {
            left: 76,
            width: 90,
            height: 230,
            rotate: 7,
            brightness: 0.65,
            delay: 0
        }

    ];


    flores.forEach(
        (opciones, index) => {

            const tulip =
                crearTulipan(
                    garden,
                    opciones
                );


            setTimeout(
                () => {

                    tulip.classList.add(
                        "visible"
                    );


                    setTimeout(
                        () => {

                            tulip.classList.add(
                                "sway"
                            );

                        },
                        2200
                    );

                },
                500 + index * 230
            );

        }
    );

}



/* =========================================================
   TULIPÁN FINAL
========================================================= */

function crearTulipanFinal(
    container,
    clase,
    opciones
) {

    const flower =
        document.createElement(
            "div"
        );


    flower.classList.add(
        "final-tulip"
    );


    flower.classList.add(
        clase
    );


    flower.style.setProperty(
        "--left",
        `${opciones.left}%`
    );


    flower.style.setProperty(
        "--bottom",
        `${opciones.bottom}px`
    );


    flower.style.setProperty(
        "--width",
        `${opciones.width}px`
    );


    flower.style.setProperty(
        "--height",
        `${opciones.height}px`
    );


    flower.style.setProperty(
        "--rotate",
        `${opciones.rotate}deg`
    );


    flower.innerHTML = `

        <svg
            class="final-tulip-svg"
            viewBox="0 0 150 325"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >

            <path
                d="M75 315 C73 270 75 225 75 190"
                fill="none"
                stroke="#536f3f"
                stroke-width="5"
                stroke-linecap="round"
            />

            <path
                d="M72 255 C45 248 25 230 16 198 C43 202 64 218 74 242 Z"
                fill="#637d42"
            />

            <path
                d="M77 270 C105 261 125 240 134 208 C105 216 84 232 76 252 Z"
                fill="#58753e"
            />

            <path
                d="M68 280 C42 274 23 257 10 230 C38 234 58 247 70 267 Z"
                fill="#506b3c"
                opacity="0.65"
            />

            <path
                d="M80 290 C108 282 128 263 140 238 C112 243 91 257 79 276 Z"
                fill="#4c6739"
                opacity="0.60"
            />

            <path
                d="M42 150 C42 112 52 82 75 72 C98 82 108 112 108 150 C100 170 88 180 75 180 C62 180 50 170 42 150 Z"
                fill="#c99d27"
            />

            <path
                d="M75 175 C50 174 30 158 28 130 C27 104 38 82 53 72 C59 96 69 111 75 122 Z"
                fill="#e7bd3c"
            />

            <path
                d="M75 175 C100 174 120 158 122 130 C123 104 112 82 97 72 C91 96 81 111 75 122 Z"
                fill="#d9aa2d"
            />

            <path
                d="M75 178 C60 165 55 140 58 110 C61 88 67 70 75 62 C83 70 89 88 92 110 C95 140 90 165 75 178 Z"
                fill="#f0ca4b"
            />

        </svg>

    `;


    container.appendChild(
        flower
    );


    return flower;

}



/* =========================================================
   CARTA
========================================================= */

async function mostrarCarta() {

    letterContainer.classList.add(
        "visible"
    );


    /*
        Esperamos a que la carta
        termine de brotar.
    */

    await esperar(2300);


    const frases = [

        "No pude comprarte flores...",

        "pero no quería dejar pasar este día.",

        "Así que hice algo un poquito diferente.",

        "Tomé unas cuantas líneas de código,",

        "un poco de tiempo,",

        "y muchas ganas de hacerte sonreír.",

        "Espero que estas flores digitales",

        "te recuerden que alguien pensó en ti",

        "de una manera muy especial. 🤎"

    ];


    letterText.innerHTML =
        "";


    for (
        const frase of frases
    ) {

        const linea =
            document.createElement(
                "div"
            );


        linea.textContent =
            frase;


        linea.style.opacity =
            "0";


        linea.style.transform =
            "translateY(8px)";


        linea.style.transition =
            "opacity .7s ease, transform .7s ease";


        letterText.appendChild(
            linea
        );


        await esperar(180);


        linea.style.opacity =
            "1";


        linea.style.transform =
            "translateY(0)";


        await esperar(650);

    }


    await esperar(500);


    letterSignature.classList.add(
        "visible"
    );

}



/* =========================================================
   RAMO FINAL
========================================================= */

function mostrarMensajeFinal() {

    finalBouquet.innerHTML =
        "";


    const bouquetBase =
        document.createElement(
            "div"
        );


    bouquetBase.className =
        "bouquet-base";


    bouquetBase.innerHTML = `

        <div
            class="bouquet-leaf leaf-left"
        ></div>

        <div
            class="bouquet-leaf leaf-center-left"
        ></div>

        <div
            class="bouquet-leaf leaf-center-right"
        ></div>

        <div
            class="bouquet-leaf leaf-right"
        ></div>

    `;


    finalBouquet.appendChild(
        bouquetBase
    );


    const tulipanes = [

        {
            clase: "tulip-back-left",
            left: 13,
            bottom: -15,
            width: 110,
            height: 320,
            rotate: -18
        },

        {
            clase: "tulip-middle-left",
            left: 24,
            bottom: -20,
            width: 135,
            height: 390,
            rotate: -13
        },

        {
            clase: "tulip-left",
            left: 34,
            bottom: -25,
            width: 155,
            height: 460,
            rotate: -9
        },

        {
            clase: "tulip-center-left",
            left: 42,
            bottom: -30,
            width: 175,
            height: 520,
            rotate: -5
        },

        {
            clase: "tulip-main-left",
            left: 47,
            bottom: -35,
            width: 190,
            height: 570,
            rotate: -2
        },

        {
            clase: "tulip-main",
            left: 50,
            bottom: -40,
            width: 215,
            height: 620,
            rotate: 0
        },

        {
            clase: "tulip-main-right",
            left: 53,
            bottom: -35,
            width: 190,
            height: 570,
            rotate: 2
        },

        {
            clase: "tulip-center-right",
            left: 58,
            bottom: -30,
            width: 175,
            height: 520,
            rotate: 5
        },

        {
            clase: "tulip-right",
            left: 66,
            bottom: -25,
            width: 155,
            height: 460,
            rotate: 9
        },

        {
            clase: "tulip-middle-right",
            left: 76,
            bottom: -20,
            width: 135,
            height: 390,
            rotate: 13
        },

        {
            clase: "tulip-back-right",
            left: 87,
            bottom: -15,
            width: 110,
            height: 320,
            rotate: 18
        }

    ];


    tulipanes.forEach(
        (opciones, index) => {

            const tulipan =
                crearTulipanFinal(
                    finalBouquet,
                    opciones.clase,
                    opciones
                );


            setTimeout(
                () => {

                    tulipan.classList.add(
                        "visible"
                    );

                },
                300 + index * 160
            );

        }
    );


    /*
        Esperamos antes de mostrar
        la carta.
    */

    setTimeout(
        () => {

            mostrarCarta();

        },
        5200
    );

}



/* =========================================================
   CONTINUAR
========================================================= */

async function continuarDedicatoria() {

    const button =
        document.querySelector(
            ".continue-button"
        );


    if (button) {

        button.remove();

    }


    const message =
        document.querySelector(
            "#love-message"
        );


    message.innerHTML =
        "";


    const frases = [

        "Porque algunas flores no se compran. 🤎",

        "Se crean con un poquito de tiempo,",

        "un poquito de código...",

        "y muchas ganas de hacerte sonreír. 🌷"

    ];


    for (
        const frase of frases
    ) {

        const linea =
            document.createElement(
                "div"
            );


        linea.textContent =
            frase;


        linea.style.opacity =
            "0";


        linea.style.transform =
            "translateY(12px)";


        linea.style.transition =
            "opacity .9s ease, transform .9s ease";


        message.appendChild(
            linea
        );


        await esperar(120);


        linea.style.opacity =
            "1";


        linea.style.transform =
            "translateY(0)";


        await esperar(1100);

    }


    await esperar(800);


    message.innerHTML = `

        <div>
            Mis ojitos bonitos 🤎
        </div>

    `;


    await esperar(2400);


    flowerScene.classList.remove(
        "visible"
    );


    await esperar(1200);


    tulipScene.classList.add(
        "visible"
    );


    await esperar(500);


    mostrarMensajeFinal();

}



/* =========================================================
   INICIAR FLORES
========================================================= */

async function iniciarFlores() {

    const terminal =
        document.querySelector(
            ".terminal"
        );


    /*
        Primero hacemos desaparecer
        suavemente la terminal.
    */

    terminal.classList.add(
        "hidden"
    );


    /*
        Dejamos que la salida
        tenga tiempo de sentirse.
    */

    await esperar(800);


    flowerScene.classList.add(
        "visible"
    );


    backgroundMusic.volume =
        0.35;


    backgroundMusic
        .play()
        .catch(
            error => {

                console.log(
                    "La reproducción automática fue bloqueada:",
                    error
                );

            }
        );


    musicControl.classList.add(
        "visible"
    );


    musicControl.classList.add(
        "playing"
    );


    crearParticulas();

    crearJardin();


    const status =
        document.querySelector(
            "#generation-status"
        );


    const message =
        document.querySelector(
            "#love-message"
        );


    const estados = [

        "Inicializando...",

        "Preparando...",

        "Generando...",

        "✓ Listo"

    ];


    for (
        const estado of estados
    ) {

        status.textContent =
            estado;

        await esperar(800);

    }


    await esperar(700);


    message.innerHTML = `

        <div>
            Mis ojitos bonitos 🤎
        </div>

    `;


    await esperar(1300);


    message.innerHTML = `

        <div>
            No pude comprarte flores...
        </div>

    `;


    await esperar(1300);


    message.innerHTML = `

        <div>
            así que decidí programarte unas. 🌷
        </div>


        <button
            class="continue-button start-button visible"
            type="button"
        >
            continuar ✦
        </button>

    `;


    const button =
        document.querySelector(
            ".continue-button"
        );


    button.addEventListener(
        "click",
        continuarDedicatoria
    );

}



/* =========================================================
   TERMINAL INICIAL
========================================================= */

async function iniciarTerminal() {

    /*
        Pequeña pausa inicial.
        Permite que la pantalla aparezca
        completamente oscura antes
        de revelar la terminal.
    */

    await esperar(700);


    await agregarLinea(
        "$ iniciar_dedicatoria",
        "terminal-command"
    );


    await esperar(400);


    await agregarLinea(
        "Inicializando experiencia..."
    );


    await agregarLinea(
        "Cargando sentimientos... 47%"
    );


    await agregarLinea(
        "Compilando flores... 82%"
    );


    await agregarLinea(
        "Verificando destinataria... 100%"
    );


    await esperar(300);


    await agregarLinea(
        "✓ Sistema listo.",
        "terminal-success"
    );


    await esperar(700);


    await agregarLinea(
        "> Hola, Mis ojitos bonitos 🤎",
        "terminal-highlight"
    );


    await esperar(500);


    await agregarLinea(
        "Tengo algo preparado para ti..."
    );


    await esperar(800);


    await agregarLinea(
        "Analizando presupuesto..."
    );


    await agregarLinea(
        "Presupuesto disponible: S/ 0.00"
    );


    await agregarLinea(
        "⚠ ERROR: Fondos insuficientes.",
        "terminal-error"
    );


    await esperar(700);


    await agregarLinea(
        "Buscando solución alternativa..."
    );


    await agregarLinea(
        "✓ Solución encontrada.",
        "terminal-success"
    );


    await esperar(500);


    await agregarLinea(
        "> Crear flores digitales 🌻",
        "terminal-highlight"
    );


    await esperar(800);


    /*
        Botón final de la terminal.
    */

    const button =
        document.createElement(
            "button"
        );


    button.className =
        "start-button";


    button.textContent =
        "EJECUTAR 🌻";


    terminalBody.appendChild(
        button
    );


    requestAnimationFrame(
        () => {

            button.classList.add(
                "visible"
            );

        }
    );


    button.addEventListener(
        "click",
        iniciarFlores
    );

}



/* =========================================================
   CONTROL MÚSICA
========================================================= */

musicControl.addEventListener(
    "click",
    () => {


        if (
            backgroundMusic.paused
        ) {

            backgroundMusic
                .play()
                .catch(
                    () => {}
                );


            musicControl.textContent =
                "♫";


            musicControl.classList.add(
                "playing"
            );

        }


        else {

            backgroundMusic.pause();


            musicControl.textContent =
                "▶";


            musicControl.classList.remove(
                "playing"
            );

        }

    }
);



/* =========================================================
   INICIO
========================================================= */

window.addEventListener(
    "load",
    iniciarTerminal
);