'use strict';

angular.module('nwas').service('apps', function() {
  return [
    { name: "KhiCAS", description: {en: "Computer algebra system", fr: "Système de calcul formel"} },
    { name: "Periodic", description: {en: "Periodic table of elements", fr: "Tableau périodique des éléments"} },
    { name: "Nofrendo", description: {en: "NES emulator", fr: "Émulateur NES"} },
    { name: "Peanut-GB", description: {en: "GameBoy emulator", fr: "Émulateur GameBoy"} },
    { name: "HexEdit", description: {en: "Hexadecimal editor", fr: "Éditeur hexadécimal"} },
    { name: "BadApple", description: {en: "Bad Apple demo", fr: "Démo Bad Apple"} },
    { name: "UnitCircle", description: {en: "Unit circle", fr: "Cercle trigonométrique"} },
    { name: "CHIP-8", description: {en: "CHIP-8 interpreter", fr: "Interpréteur CHIP-8"} },
    { name: "Cnake", description: {en: "Snake game made in C", fr: "Jeu du serpent fait en C"} },
  ];
});
