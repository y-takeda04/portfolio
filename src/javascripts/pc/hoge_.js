class Workhome {

  constructor() {
    if (Common.getName('Workhome')) {
      this.workhome();
    }
  }

  workhome() {
    return console.log('Workhome');
  }

}

new Workhome();