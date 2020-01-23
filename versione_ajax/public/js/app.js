/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  // 1- recupero il codice html del template
  var template_html = $('#disco-template').html(); // 2- do in pasto a handlebars il codice html
  // N.B.: la funzione "Handlebars.compile" restituisce una *funzione* da utilizzare per andare a usare il template

  var template_function = Handlebars.compile(template_html);
  $.ajax({
    "url": "http://localhost:8888/Boolean_2/4_gennaio_23_php_ajax_dischi/versione_ajax/dischi.php",
    "method": "get",
    "success": function success(data) {
      // recupero l array che contiene tutti i dischi
      var dischi = JSON.parse(data); // ciclo tutti i dischi

      for (var i = 0; i < dischi.length; i++) {
        // recupero il disco corrente
        var disco = dischi[i]; // per ogni disco recupero le varie info

        var img_copertina = disco.image;
        var album = disco.title;
        var artista_album = disco.artist;
        var anno_uscita = disco.year;
        var genre_album = disco.genre; // creo le variabili di handlebars

        var variabili = {
          copertina: img_copertina,
          titolo: album,
          artista: anno_uscita,
          anno: artista_album,
          genere: genre_album
        }; // creo il template

        var html = template_function(variabili); // lo appendo al contenitore dei dischi

        $("#dischi").append(html);
      }
    },
    "error": function error() {}
  }); // bonus!!

  $("#scelta-genere").change(function () {
    // recupero il genere selezionato dall utente
    var genere_selezionato = $(this).val();

    if (genere_selezionato == "") {
      $(".cd").fadeIn();
    } else {
      $(".cd").each(function () {
        var genere_disco = $(this).attr("data-genere"); // console.log(genere_disco);

        if (genere_disco.toLowerCase() == genere_selezionato.toLowerCase()) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
    } // per ogni disco verifico se il suo genere è uguale a quello selezionato, in quel caso lo mostro altrimenti lo nascondo

  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\MAMP\htdocs\Boolean_2\4_gennaio_23_php_ajax_dischi\versione_ajax\src\js\app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! C:\MAMP\htdocs\Boolean_2\4_gennaio_23_php_ajax_dischi\versione_ajax\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });