/* eslint-disable no-undef */
import 'phaser';
import config from './config/config';
import Music from './object/music';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();
