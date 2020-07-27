/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */

import 'phaser';
import config from '../config/config';
import Button from '../object/Button';
import { getScore, resetScore } from '../score/score';
import { getUser } from '../user/user';
import { postScore } from '../score/scoreApi';

export default class VictoryScene extends Phaser.Scene {
  constructor() {
    super('Victory');
  }

  create() {
    this.add.image(400, 300, 'forest-bg');

    this.title = this.add.text(0, 0, 'Victory', { fontSize: '40px', fontStyle: 'bold', fill: '#fff' });
    this.messageText = this.add.text(
      0,
      0,
      'You have managed to safely guide the warriors through the forest!',
      {
        fontSize: '25px',
        fill: '#fff',
        align: 'center',
        wordWrap: { width: 550, useAdvancedWrap: true },
      },
    );
    this.score = this.add.text(0, 0, `Score: ${getScore()}`, { fontSize: '30px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.title,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.messageText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.score,
      this.zone,
    );

    this.title.displayOriginY = 50;
    this.messageText.displayOriginY = -15;
    this.score.displayOriginY = -80;

    const user = getUser();
    const finalScore = getScore();

    postScore(user, finalScore);

    this.menuButton = new Button(this, 400, 530, 'button1', 'button2', 'Menu', 'Title');
    resetScore();
  }
}
