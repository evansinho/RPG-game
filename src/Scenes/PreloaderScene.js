/* eslint-disable no-undef */

import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 300, 'forest-bg');

    // add logo image
    this.add.image(400, 150, 'logo').scale = 1.4;

    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 10)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    // update file progress text
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    // remove progress bar when complete
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    // this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // ui assets
    this.load.image('forest-bg', './src/assets/forest-bg.png');
    this.load.image('wasteland-logo', './src/assets/rpg-logo.png');
    this.load.image('button1', './src/assets/ui/btn-brown2.png');
    this.load.image('button2', './src/assets/ui/btn-brown1.png');
    this.load.image('box', './src/assets/ui/unchecked.png');
    this.load.image('checkedBox', './src/assets/ui/checked.png');
    this.load.audio('bgMusic', ['./src/assets/WarTheme.mp3']);

    // map assets
    this.load.image('map', './src/assets/map/rpg-map1.png');
    this.load.image('tree', './src/assets/map/tree.png');

    // player assets
    this.load.spritesheet('player', './src/assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('warrior1', './src/assets/warrior2.png');
    this.load.image('warrior2', './src/assets/warrior1.png');

    // enemy assets
    this.load.image('bat1', './src/assets/bat1.png');
    this.load.image('bat2', './src/assets/bat2.png');
    this.load.image('spider1', './src/assets/spider1.png');
    this.load.image('spider2', './src/assets/spider2.png');
    this.load.image('skeleton1', './src/assets/skeleton1.png');
    this.load.image('skeleton2', './src/assets/skeleton2.png');
    this.load.image('pirate1', './src/assets/pirate1.png');
    this.load.image('pirate2', './src/assets/pirate2.png');
    this.load.image('ninja1', './src/assets/ninja1.png');
    this.load.image('ninja2', './src/assets/ninja2.png');
    this.load.image('monster1', './src/assets/monster1.png');
    this.load.image('monster2', './src/assets/monster2.png');
  }

  ready() {
    this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
}
