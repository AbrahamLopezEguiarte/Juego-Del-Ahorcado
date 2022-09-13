(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 
  let letterShowed = document.getElementById('correct-letters');
  let letterWrong = document.getElementById('wrong-letters');
  let randomWords = require('random-spanish-words');
  let wordGenerated = randomWords().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let hiddenWord = wordGenerated.replace(/./g, "_ ");
  let errorsCounter = 0;
  alert(wordGenerated)
  letterShowed.innerHTML = hiddenWord;

  function checkErrors(letterWritten){
    let imageShown;
    if(letterWrong.innerHTML.search(letterWritten.toUpperCase()) < 0){
      letterWrong.innerHTML += letterWritten.toUpperCase() + ' ';
      errorsCounter++
      imageShown = "../images/hangman-"+(errorsCounter-1)+".png";
      document.getElementById("hangman-image").src = imageShown;
    }
    if(errorsCounter == 6){
      imageShown = "../images/loseImage.png";
      document.getElementById("hangman-image").src = imageShown;
      document.getElementById('letter-to-insert').readOnly = true;
      /*alert("You lose");
      window.location.reload()*/
    }
  }

  function checkAccerts(){
    let imageShown;
    if(hiddenWord.indexOf('_') < 0){
      imageShown = "../images/winImage.png";
      document.getElementById("hangman-image").src = imageShown;
      document.getElementById('letter-to-insert').readOnly = true;
      //alert("You win")
      //window.location.reload();
    }
  }

  function checkLetter(letterWritten){
    if(!(wordGenerated.includes(letterWritten))){
      return checkErrors(letterWritten);
    }
    for (const i in wordGenerated) {
      if(letterWritten == wordGenerated[i]){
        hiddenWord = hiddenWord.replaceAt(i*2, letterWritten);
        letterShowed.innerHTML = hiddenWord.toUpperCase();
      }
    }
    checkAccerts();
  }
  
  document.getElementById('attempt').addEventListener('click', () =>{
    let letterWritten = document.getElementById("letter-to-insert").value.toLowerCase();
    checkLetter(letterWritten);
    document.getElementById("letter-to-insert").value = '';
    document.getElementById("letter-to-insert").focus();
  })

  },{"random-spanish-words":2}],2:[function(require,module,exports){
  var wordList = ['a', 'abajo', 'abandonar', 'abrir', 'absoluta', 'absoluto', 'abuelo', 'acabar', 'acaso', 'acciones',
  'acción', 'aceptar', 'acercar', 'acordar', 'actitud', 'actividad', 'acto', 'actual', 'actuar',
  'acudir', 'acuerdo', 'adelante', 'además', 'adquirir', 'advertir', 'afectar', 'afirmar', 'agua', 'ahora',
  'ahí', 'aire', 'al', 'alcanzar', 'alejar', 'alemana', 'alemán', 'algo', 'alguien', 'alguna',
  'alguno', 'algún', 'allá', 'allí', 'alma', 'alta', 'alto', 'altura', 'amar', 'ambas',
  'ambos', 'americana', 'americano', 'amiga', 'amigo', 'amor', 'amplia', 'amplio', 'andar', 'animal',
  'ante', 'anterior', 'antigua', 'antiguo', 'anunciar', 'análisis', 'aparecer', 'apenas', 'aplicar', 'apoyar',
  'aprender', 'aprovechar', 'aquel', 'aquella', 'aquello', 'aquí', 'arma', 'arriba', 'arte', 'asegurar',
  'aspecto', 'asunto', 'así', 'atenciones', 'atención', 'atreverse', 'atrás', 'aumentar', 'aun', 'aunque',
  'autor', 'autora', 'autoridad', 'auténtica', 'auténtico', 'avanzar', 'ayer', 'ayuda', 'ayudar', 'azul',
  'aún', 'baja', 'bajar', 'barrio', 'base', 'bastante', 'bastar', 'beber',
  'bien', 'blanca', 'blanco', 'boca', 'brazo', 'buen', 'buscar', 'caballo', 'caber', 'cabeza',
  'cabo', 'cada', 'cadena', 'caer', 'calle', 'cama', 'cambiar', 'cambio', 'caminar', 'camino',
  'campo', 'cantar', 'cantidad', 'capaces', 'capacidad', 'capaz', 'capital', 'cara', 'caracteres',
  'carne', 'carrera', 'carta', 'carácter', 'casa', 'casar', 'casi', 'caso', 'catalán', 'causa',
  'celebrar', 'central', 'centro', 'cerebro', 'cerrar', 'chica', 'chico', 'cielo', 'ciencia', 'ciento',
  'científica', 'científico', 'cierta', 'cierto', 'cinco', 'cine', 'circunstancia', 'ciudad', 'ciudadana', 'ciudadano',
  'civil', 'clara', 'claro', 'clase', 'coche', 'coger', 'colocar', 'color', 'comentar', 'comenzar',
  'comer', 'como', 'completo', 'comprar', 'comprender', 'comprobar', 'comunes',
  'comunicaciones', 'comunicación', 'común', 'con', 'concepto', 'conciencia', 'concreto', 'condición', 'condisiones', 'conducir',
  'conjunto', 'conocer', 'conocimiento', 'consecuencia', 'conseguir', 'conservar', 'considerar', 'consistir', 'constante', 'constituir',
  'construir', 'contacto', 'contar', 'contemplar', 'contener', 'contestar', 'continuar', 'contra', 'contrario', 'control',
  'controlar', 'convencer', 'conversación', 'convertir', 'corazón', 'correr', 'corresponder', 'corriente', 'cortar', 'cosa',
  'costumbre', 'crear', 'crecer', 'creer', 'crisis', 'cruzar', 'cuadro', 'cual', 'cualquier', 'cuando',
  'cuanto', 'cuarta', 'cuarto', 'cuatro', 'cubrir', 'cuenta', 'cuerpo', 'cuestiones', 'cuestión', 'cultura',
  'cultural', 'cumplir', 'cuya', 'cuyo', 'cuál', 'cuánto', 'célula', 'cómo', 'dar', 'dato',
  'de', 'deber', 'decidir', 'decir', 'decisión', 'declarar', 'dedicar', 'dedo', 'defender', 'defensa',
  'definir', 'definitivo', 'dejar', 'del', 'demasiado', 'democracia', 'demostrar', 'demás', 'depender', 'derecha',
  'derecho', 'desaparecer', 'desarrollar', 'desarrollo', 'desconocer', 'descubrir', 'desde', 'desear', 'deseo', 'despertar',
  'después', 'destino', 'detener', 'determinar', 'diaria', 'diario', 'diez', 'diferencia', 'diferente', 'dificultad',
  'difícil', 'dinero', 'dios', 'diosa', 'dirección', 'directo', 'director', 'directora', 'dirigir', 'disponer',
  'distancia', 'distinto', 'diverso', 'doble', 'doctor', 'doctora', 'dolor', 'don', 'donde', 'dormir',
  'dos', 'duda', 'durante', 'duro', 'día', 'dónde', 'e', 'echar', 'económico', 'edad',
  'efecto', 'ejemplo', 'ejército', 'el', 'elección', 'elegir', 'elemento', 'elevar', 'ella', 'empezar',
  'empresa', 'en', 'encender', 'encima', 'encontrar', 'encuentro', 'energía', 'enfermedad', 'enfermo', 'enorme',
  'entender', 'enterar', 'entonces', 'entrada', 'entrar', 'entre', 'entregar', 'enviar', 'equipo',
  'error', 'esa', 'escapar', 'escribir', 'escritor', 'escritora', 'escuchar', 'ese', 'esfuerzo', 'eso',
  'espacio', 'espalda', 'especial', 'especie', 'esperanza', 'esperar', 'espíritu',
  'esta', 'establecer', 'estado', 'estar', 'este', 'esto', 'estrella', 'estructura', 'estudiar', 'estudio',
  'etapa', 'europa', 'europea', 'europeo', 'evidente', 'evitar', 'exacta', 'exacto', 'exigir', 'existencia',
  'existir', 'experiencia', 'explicar', 'expresión', 'extender', 'exterior', 'extranjera', 'extranjero', 'extremo',
  'falta', 'faltar', 'familia', 'familiar', 'famoso', 'fenómeno', 'fiesta', 'figura', 'fijar', 'fin',
  'final', 'flor', 'fondo', 'forma', 'formar', 'francesa', 'francia', 'francés', 'frase', 'frecuencia',
  'frente', 'fría', 'frío', 'fuego', 'fuente', 'fuerte', 'fuerza', 'funcionar', 'función', 'fundamental',
  'futuro', 'fácil', 'físico', 'fútbol', 'ganar', 'general', 'gente', 'gesto', 'gobierno', 'golpe',
  'gracia', 'gran', 'grande', 'grave', 'gritar', 'grupo', 'guardar', 'guerra', 'gustar', 'gusto',
  'haber', 'habitación', 'habitual', 'hablar', 'hacer', 'hacia', 'hallar', 'hasta', 'hecha', 'hecho',
  'hermana', 'hermano', 'hermosa', 'hermoso', 'hija', 'hijo', 'historia', 'histórico', 'hombre', 'hombro',
  'hora', 'hoy', 'humana', 'humano', 'idea', 'iglesia', 'igual', 'imagen', 'imaginar', 'impedir',
  'imponer', 'importancia', 'importante', 'importar', 'imposible', 'imágenes', 'incluir', 'incluso', 'indicar', 'individuo',
  'informaciones', 'información', 'informar', 'inglesa', 'inglés', 'iniciar', 'inmediata', 'inmediato', 'insistir', 'instante',
  'intentar', 'interesar', 'intereses', 'interior', 'internacional', 'interés', 'introducir', 'ir', 'izquierda', 'jamás',
  'jefa', 'jefe', 'joven', 'juego', 'jugador', 'jugar', 'juicio', 'junto', 'justo', 'labio',
  'lado', 'lanzar', 'largo', 'lector', 'lectora', 'leer', 'lengua', 'lenguaje', 'lento', 'levantar',
  'ley', 'libertad', 'libre', 'libro', 'limitar', 'literatura', 'llamar', 'llegar', 'llenar', 'lleno',
  'llevar', 'llorar', 'lo', 'loca', 'loco', 'lograr', 'lucha', 'luego', 'lugar', 'luz',
  'línea', 'madre', 'mal', 'mala', 'malo', 'mandar', 'manera', 'manifestar', 'mano', 'mantener',
  'mar', 'marcar', 'marcha', 'marchar', 'marido', 'mas', 'masa', 'matar', 'materia', 'material',
  'mayor', 'mayoría', 'media', 'mediante', 'medida', 'medio', 'mejor', 'memoria', 'menor',
  'menos', 'menudo', 'mercado', 'merecer', 'mes', 'mesa', 'meter', 'metro', 'mi', 'miedo',
  'miembro', 'mientras', 'mil', 'militar', 'millón', 'ministra', 'ministro', 'minuto', 'mirada', 'mirar',
  'mis', 'mismo', 'mitad', 'modelo', 'moderna', 'moderno', 'modo', 'momento', 'moral', 'morir',
  'mostrar', 'motivo', 'mover', 'movimiento', 'muchacha', 'muchacho', 'mucho', 'muerte', 'mujer', 'mujeres',
  'mundial', 'mundo', 'muy', 'máquina', 'más', 'máximo', 'médica', 'médico', 'método', 'mí',
  'mía', 'mínima', 'mínimo', 'mío', 'música', 'nacer', 'nacional', 'nada', 'nadie', 'natural',
  'naturaleza', 'necesaria', 'necesario', 'necesidad', 'necesitar', 'negar', 'negocio', 'negra', 'negro', 'ni',
  'ninguna', 'ninguno', 'ningún', 'nivel', 'no', 'noche', 'nombre', 'normal',
  'norteamericana', 'norteamericano', 'notar', 'noticia', 'novela', 'nuestra', 'nuestro', 'nueva', 'nuevo', 'nunca',
  'número', 'o', 'objetivo', 'objeto', 'obligar', 'obra', 'observar', 'obtener', 'ocasiones', 'ocasión',
  'ocho', 'ocupar', 'ocurrir', 'oficial', 'ofrecer', 'ojo', 'olvidar', 'operación', 'opinión', 'origen',
  'oro', 'orígenes', 'oscura', 'oscuro', 'otra', 'otro', 'oír', 'paciente', 'padre', 'pagar',
  'palabra', 'papel', 'par', 'para', 'parar', 'parecer', 'pared', 'pareja', 'parte', 'participar',
  'particular', 'partido', 'partir', 'pasa', 'pasado', 'pasar', 'paso', 'paz', 'país', 'países',
  'pecho', 'pedir', 'peligro', 'pelo', 'película', 'pena', 'pensamiento', 'pensar', 'peor',
  'perder', 'perfecto', 'periodista', 'periódica', 'periódico', 'permanecer', 'permitir', 'pero', 'perra',
  'perro', 'persona', 'personaje', 'personal', 'pertenecer', 'pesar', 'peso', 'pie', 'piedra', 'piel',
  'pierna', 'piso', 'placer', 'plan', 'plantear', 'plaza', 'pleno', 'poblaciones', 'población', 'pobre',
  'poca', 'poco', 'poder', 'policía', 'política', 'político', 'poner', 'por', 'porque', 'poseer',
  'posibilidad', 'posible', 'posiciones', 'posición', 'precio', 'precisa', 'preciso', 'preferir', 'pregunta', 'preguntar',
  'prensa', 'preocupar', 'preparar', 'presencia', 'presentar', 'presente', 'presidente', 'pretender', 'primer', 'primera',
  'primero', 'principal', 'principio', 'privar', 'probable', 'problema', 'proceso', 'producir', 'producto', 'profesional',
  'profesor', 'profesora', 'profunda', 'profundo', 'programa', 'pronta', 'pronto', 'propia', 'propio', 'proponer',
  'provocar', 'proyecto', 'prueba', 'práctico', 'próxima', 'próximo', 'publicar', 'pueblo', 'puerta', 'pues',
  'puesto', 'punto', 'pura', 'puro', 'página', 'pública', 'público', 'que', 'quedar', 'querer',
  'quien', 'quitar', 'quizá', 'quién', 'qué', 'radio', 'rato', 'razones', 'razón', 'real',
  'realidad', 'realizar', 'recibir', 'reciente', 'recoger', 'reconocer', 'recordar', 'recorrer', 'recuerdo', 'recuperar',
  'reducir', 'referir', 'regresar', 'relaciones', 'relación', 'religiosa', 'religioso', 'repetir', 'representar', 'resolver',
  'responder', 'responsable', 'respuesta', 'resto', 'resultado', 'resultar', 'reuniones', 'reunir', 'reunión', 'revista',
  'rey', 'reír', 'rica', 'rico', 'riesgo', 'rodear', 'roja', 'rojo', 'romper', 'ropa',
  'rostro', 'rápida', 'rápido', 'régimen', 'río', 'saber', 'sacar', 'sala', 'salida', 'salir',
  'sangre', 'secreta', 'secreto', 'sector', 'seguir', 'segundo', 'segura', 'seguridad', 'seguro', 'según',
  'seis', 'semana', 'semejante', 'sensaciones', 'sensación', 'sentar', 'sentida', 'sentido', 'sentimiento', 'sentir',
  'separar', 'ser', 'seria', 'serie', 'serio', 'servicio', 'servir', 'sexo', 'sexual',
  'si', 'sido', 'siempre', 'siete', 'siglo', 'significar', 'siguiente', 'silencio',
  'simple', 'sin', 'sino', 'sistema', 'sitio', 'situaciones', 'situación', 'situar', 'sobre', 'social',
  'socialista', 'sociedad', 'sol', 'sola', 'solo', 'soluciones', 'solución', 'sombra', 'someter', 'sonar',
  'sonreír', 'sonrisa', 'sorprender', 'sostener', 'su', 'subir', 'suceder', 'suelo', 'suerte',
  'suficiente', 'sufrir', 'superar', 'superior', 'suponer', 'surgir', 'suya', 'suyo', 'sí', 'sólo',
  'tal', 'también', 'tampoco', 'tan', 'tanta', 'tanto', 'tarde', 'tarea', 'televisiones', 'televisión',
  'tema', 'temer', 'tender', 'tener', 'teoría', 'tercer', 'terminar', 'texto', 'tiempo', 'tierra',
  'tipa', 'tipo', 'tirar', 'tocar', 'toda', 'todavía', 'todo', 'tomar', 'tono', 'total',
  'trabajar', 'trabajo', 'traer', 'tras', 'tratar', 'tres', 'tu', 'técnica', 'técnico', 'término',
  'tía', 'tío', 'título', 'un', 'una', 'unidad', 'unir', 'uno', 'usar', 'uso',
  'usted', 'utilizar', 'vacía', 'vacío', 'valer', 'valor', 'varias', 'varios', 'veces', 'vecina',
  'vecino', 'veinte', 'velocidad', 'vender', 'venir', 'ventana', 'ver', 'verano', 'verdad', 'verdadera',
  'verdadero', 'verde', 'vestir', 'vez', 'viaje', 'vida', 'vieja', 'viejo', 'viento', 'violencia',
  'vista', 'viva', 'vivir', 'vivo', 'voces', 'voluntad', 'volver', 'voz', 'vuelta', 'y',
  'ya', 'yo', 'zona', 'árbol', 'él', 'época', 'ésta', 'éste', 'éxito', 'última',
  'último', 'única', 'único']
  
  function words(options) {
    function word() {
      return wordList[randInt(wordList.length)];
    }
  
    function randInt(lessThan) {
      return Math.floor(Math.random() * lessThan);
    }
  
    // No arguments = generate one word
    if (typeof(options) === 'undefined') {
      return word();
    }
  
    // Just a number = return that many words
    if (typeof(options) === 'number') {
      options = { exactly: options };
    }
  
    // options supported: exactly, min, max, join
  
    if (options.exactly) {
      options.min = options.exactly;
      options.max = options.exactly;
    }
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    for (var i = 0; (i < total); i++) {
      results.push(word());
    }
    if (options.join) {
      results = results.join(options.join);
    }
    return results;
  }
  
  module.exports = words;
  
  },{}]},{},[1]);