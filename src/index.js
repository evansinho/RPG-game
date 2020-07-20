/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import 'phaser';
import config from './config/config';
import Music from './object/music';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import VictoryScene from './Scenes/VictoryScene';
import LeaderboardScene from './Scenes/LeaderboardScene';
import { setUser } from './user/user';
import './user/dom';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const music = new Music();
    this.globals = { music, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Victory', VictoryScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.start('Boot');
  }
}

const startGame = (user) => {
  setUser(user);
  window.game = new Game();
};

export default startGame;
