/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import 'phaser';
import config from '../config/config';
import Button from '../object/Button';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  create() {
    this.add.image(400, 300, 'forest-bg');
    // Game
    this.gameButton = new Button(this, config.width / 2, config.height / 2 - 70, 'button1', 'button2', 'Play', 'WorldScene');
    // Options
    this.optionsButton = new Button(this, config.width / 2, config.height / 2 + 30, 'button1', 'button2', 'Options', 'Options');
    // Credits
    this.creditsButton = new Button(this, config.width / 2, config.height / 2 + 130, 'button1', 'button2', 'Credits', 'Credits');
    // Leaderboard
    this.leaderboardButton = new Button(this, config.width / 2, config.height / 2 + 230, 'button1', 'button2', 'Leaderboard', 'Leaderboard');

    this.music = this.sys.game.globals.music;
    if (this.music.musicOn === true && this.music.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.music.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width, config.height,
      ),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}
