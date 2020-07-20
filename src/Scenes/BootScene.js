/* eslint-disable no-undef */
import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', './src/assets/rpg-logo.png');
    this.load.image('forest-bg', './src/assets/forest-bg.jpg');
  }

  create() {
    this.scene.start('Preloader');
  }
}
