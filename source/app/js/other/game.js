var game = new function () {
    this.score_user = 0;
    this.score_computer = 0;

    this.pick_computer_weapon = function (weapons) {
        return weapons['weapon00' + Math.floor((Math.random() * Object.keys(weapons).length) + 1)];
    };

    this.reset = function () {
        this.score_user = 0;
        this.score_computer = 0;
        document.getElementsByClassName('scoreboard__user__score')[0].innerHTML = this.score_user;
        document.getElementsByClassName('scoreboard__computer__score')[0].innerHTML = this.score_computer;
        document.getElementsByClassName('scoreboard__user__picked')[0].innerHTML = '';
        document.getElementsByClassName('scoreboard__computer__picked')[0].innerHTML = '';
        document.getElementsByClassName('status')[0].innerHTML = 'You just reset the game, nobody has any points now.';
    };

    this.fight = function (weapon, weapons) {
        var computer_weapon = this.pick_computer_weapon(weapons);
        document.getElementsByClassName('scoreboard__user__picked')[0].innerHTML = '<i class="fa ' + weapon.icon + '"></i>';
        document.getElementsByClassName('scoreboard__computer__picked')[0].innerHTML = '<i class="fa ' + computer_weapon.icon + '"></i>';

        if (weapon.id === computer_weapon.id) {
            console.log('draw');
            document.getElementsByClassName('scoreboard__user__score')[0].innerHTML = this.score_user;
            document.getElementsByClassName('status')[0].innerHTML = weapon.name + ' meets ' + computer_weapon.name + '. No points for anyone.';
        } else if (weapon.id === computer_weapon.defeated_by.id) {
            console.log('player wins');
            this.score_user += 1;
            document.getElementsByClassName('scoreboard__user__score')[0].innerHTML = this.score_user;
            document.getElementsByClassName('status')[0].innerHTML = weapon.name + ' beats ' + computer_weapon.name + '. One point for you.';
        } else {
            console.log('computer wins');
            this.score_computer += 1;
            document.getElementsByClassName('scoreboard__computer__score')[0].innerHTML = this.score_computer;
            document.getElementsByClassName('status')[0].innerHTML = weapon.name + ' does not beat ' + computer_weapon.name + '. One point for the computer.';
        }
    };
};