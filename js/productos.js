const productos = [
    {id:1, nombre:"FIFA 23  ",descripcion:"Fifa 23 esta galardonado como juego del año del ambito deportivo .", precio:12000, img:"fifa23.jpg", categoria:"futbol"},
    {id:2, nombre:"Dying light", descripcion:"Dying Light es un juego de aventura en medio de una infestacion de zombies, deberas hacer parkour para escapar de ellos y liberar la ciudad.", precio:4000, img:"dyinglight.jpg", categoria:"zombies"},
    {id:3, nombre:"Formula 1 2022",descripcion:"F1 2022 continúa con las mejoras que viene implementando EA Sports en los últimos años y, en esta ocasión, permite ponerse al volante en la nueva era de la F1® con los impresionantes coches nuevos de este deporte y un nuevo modelo de manejo que recrea la intensa competición.", precio:3500, img:"f122.jpg", categoria:"autos"},
    {id:4, nombre:"God Of War Ragnarok",descripcion:"Aproximadamente tres años después de los eventos de God of War (2018), el Fimbulvetr está llegando a su fin y se profetiza que este dará paso al temido Ragnarök. Atreus, ahora adolescente, aún busca respuestas sobre su identidad como Loki, así como una forma de evitar que suceda el Ragnarök.", precio:10000, img:"god_of_War.jpeg", categoria:"aventura"},
    {id:5, nombre:"Pay Day 2",descripcion:"PAYDAY 2 es un juego de acción cooperativo para cuatro jugadores que, una vez más, permite a los jugadores ponerse en la piel del equipo original de PAYDAY - Dallas, Hoxton, Wolf y Chains - mientras descienden por Washington DC en una épica ola de crímenes.", precio:4000, img:"payday2.jpg", categoria:"disparos"},
    {id:6, nombre:"Sea of thieves", descripcion:"Sea of Thieves ofrece la experiencia de piratasdefinitiva, desde la navegación y elcombate hasta la exploración y el saqueo: todo para disfrutar de la vida pirata y convertirte en leyenda. No hay funciones establecidas, tienes total libertad para enfrentarte al mundo y a los demás jugadores como desees.", precio:2000, img:"seaofthieves.jpg", categoria:"piratas"},
    {id:7, nombre:"Marvel’s Spider-Man Remastered",  descripcion:"En Marvel’s Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción. Ponte en la piel de un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel.", precio:13000, img:"spiderman.jpg", categoria:"accion"},
    {id:8, nombre:"ONE PIECE ODYSSEY", descripcion:"¡Un nuevo RPG que tiene lugar en el mundo del famoso anime ONE PIECE! ¡Juega como miembro de la tripulación del Sombrero de Paja y vive una gran aventura en el mundo de ONE PIECE!", precio:5000, img:"one-piece-odyssey.jpg", categoria:"aventura"},
    {id:9, nombre:"Tom Clancy’s The Division® 2", descripcion:"LA HISTORIA NOS RECORDARÁ En Tom Clancy's The Division® 2, el destino del mundo libre está en juego. Dirige un equipo de agentes de élite en los restos de Washington DC tras una pandemia, restablece el orden e impide su colapso.", precio:9000, img:"thedivision2.jpg", categoria:"disparos"},
    {id:10, nombre:"Red dead Redemption 2",  descripcion:"Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por toda América en el albor de una nueva era", precio:2500, img:"red_dead_redemption2.jpg", categoria:"aventura"},
    {id:11, nombre:"Mafia: Edición Definitiva",  descripcion:"Un percance con la mafia introduce al taxista Tommy Angelo en el crimen organizado. A pesar de su reticencia inicial, las ventajas de unirse a la familia Salieri son demasiadas como para ignorarlas.", precio:10000, img:"mafia.jpg", categoria:"aventura"},
    {id:12, nombre:"The Witcher® 3: Wild Hunt", descripcion:"Eres Geralt de Rivia, cazador de monstruos. En un continente devastado por la guerra e infestado de criaturas, tu misión es encontrar a Ciri, la niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.", precio:1500, img:"the_witcher3.jpg", categoria:"aventura"}
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);
