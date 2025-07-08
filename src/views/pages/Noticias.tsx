import '../css/noticias.css';

const Noticias = () => {
  return (
    <div className="noticias-container">
      <h1>Noticias</h1>
      <p>En esta sección encontrarás las últimas noticias sobre Genshin Impact y Honkai Star Rail, dos de los juegos más populares desarrollados por miHoYo (ahora conocido como Hoyoverse). Mantente al tanto de las actualizaciones más recientes, eventos especiales y novedades dentro de estos títulos.</p>
      <ul>
        <li>
          <strong>Genshin Impact - Actualización 5.7: "A Space and Time for You"</strong>
          <p>La actualización 5.7 de Genshin Impact, lanzada el 18 de junio, trae consigo importantes novedades. Entre los aspectos más destacados se encuentran los nuevos personajes: <strong>Skirk</strong>, un personaje de 5★ de tipo Cryo que hará las delicias de los jugadores con su habilidad para controlar el hielo, y <strong>Dahlia</strong>, un personaje de 4★ de tipo Hydro. La actualización también introduce nuevos eventos que permiten obtener recompensas exclusivas, como armas y artefactos. Además, se han realizado ajustes en los banners de invocación, lo que dará a los jugadores más oportunidades de obtener personajes raros y poderosos. La historia también avanza, sumergiendo a los jugadores en nuevos desafíos dentro del mundo de Teyvat. No te pierdas el evento "We Meet Again", que está activo hasta el 27 de junio y ofrece muchas sorpresas para los fanáticos del juego.</p>
        </li>
        <li>
          <strong>Honkai Star Rail - Actualización 3.4: "For the Sun is Set to Die"</strong>
          <p>El esperado contenido de la versión 3.4 de Honkai Star Rail se lanzará el 2 de julio, y los jugadores pueden esperar nuevas características, personajes y eventos. Uno de los grandes atractivos de esta actualización es la incorporación de <strong>Phainon</strong>, un personaje de 5★ de tipo Destrucción Física, quien es capaz de desatar poderosos ataques en combate. Además, Honkai Star Rail tendrá su primera colaboración con la famosa franquicia <em>Fate/stay night</em>, donde los personajes Saber y Archer estarán disponibles como personajes jugables. Esta colaboración promete ser un evento épico para los fanáticos de ambos universos. También se introducirán mejoras en la jugabilidad, con ajustes en varios personajes como Kafka y Jingliu, que recibirán actualizaciones en sus habilidades. No olvides estar atento a los códigos promocionales disponibles durante el evento de lanzamiento, los cuales te permitirán obtener Stellar Jade y otros recursos.</p>
        </li>
        <li>
          <strong>Eventos Actuales en Genshin Impact y Honkai Star Rail:</strong>
          <p><strong>Genshin Impact:</strong> El evento "We Meet Again" estará disponible hasta el 27 de junio. Este evento ofrece la oportunidad de obtener artefactos, materiales de ascensión y mucho más. Participa en desafíos especiales que te permitirán avanzar en la historia y desbloquear nuevas recompensas. Además, los jugadores pueden aprovechar el aumento de tasa de aparición de ciertos personajes en los banners de invocación.</p>
          <p><strong>Honkai Star Rail:</strong> Durante el mes de junio, hay códigos activos que puedes canjear para obtener Stellar Jade y otras recompensas útiles. Asegúrate de no perderte estos códigos promocionales, ya que ofrecen una excelente oportunidad para mejorar tus personajes y avanzar más rápido en el juego.</p>
        </li>
      </ul>
      <div className="noticias-fuentes">
        <h3>Fuentes:</h3>
        <ul>
          <li><a href="https://www.pockettactics.com/genshin-impact/update">pockettactics.com</a></li>
          <li><a href="https://blog.playstation.com/2025/06/20/honkai-star-rail-version-3-4-arrives-july-2/">blog.playstation.com</a></li>
          <li><a href="https://www.polygon.com/honkai-star-rail-guides/608023/3-4-livestream-codes-redeem-stellar-jade">polygon.com</a></li>
          <li><a href="https://www.pcgamesn.com/honkai-star-rail/codes">pcgamesn.com</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Noticias;