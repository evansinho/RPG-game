/* eslint-disable no-undef */

import 'phaser';
import Button from '../object/Button';

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super('Options');
  }

  create() {
    this.music = this.sys.game.globals.music;

    this.add.image(400, 300, 'forest-bg');

    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });

    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on('pointerdown', () => {
      this.music.musicOn = !this.music.musicOn;
      this.updateAudio();
    });

    this.soundButton.on('pointerdown', () => {
      this.music.soundOn = !this.music.soundOn;
      this.updateAudio();
    });

    this.menuButton = new Button(this, 400, 500, 'button1', 'button2', 'Menu', 'Title');

    this.updateAudio();
  }

  updateAudio() {
    if (this.music.musicOn === false) {
      this.musicButton.setTexture('box');
      this.sys.game.globals.bgMusic.stop();
      this.music.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture('checkedBox');
      if (this.music.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.music.bgMusicPlaying = true;
      }
    }

    if (this.music.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}
