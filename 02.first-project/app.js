new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: [],
	},
	methods: {
		startGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.turns = [];
		},
		attack: function () {
			let playerDmg = this.calculateDamge(3, 10);
			this.monsterHealth -= playerDmg;
			this.turns.unshift({
				isPLayer: true,
				text: 'PLayer hits monster for ' + playerDmg,
			});

			let monsterDmg = this.calculateDamge(3, 10);
			this.playerHealth -= monsterDmg;
			this.turns.unshift({
				isPLayer: false,
				text: 'Monster hits player for ' + monsterDmg,
			});
			if (this.checkResult()) this.gameIsRunning = false;
		},
		specialAttack: function () {
			let playerDmg = this.calculateDamge(10, 20);
			this.monsterHealth -= playerDmg;
			this.turns.unshift({
				isPLayer: true,
				text: 'PLayer hits monster for ' + playerDmg,
			});

			let monsterDmg = this.calculateDamge(10, 20);
			this.playerHealth -= monsterDmg;
			this.turns.unshift({
				isPLayer: false,
				text: 'Monster hits player for ' + monsterDmg,
			});
			if (this.checkResult()) this.gameIsRunning = false;
		},
		heal: function () {
			if (this.playerHealth <= 90) {
        this.playerHealth += 10;
        this.turns.unshift({
          isPLayer: true,
          text: 'Player got heal for 10'
        });
			} else {
				this.playerHealth = 100;
			}
		},
		stopGame: function () {
			this.gameIsRunning = false;
		},
		calculateDamge: function (min, max) {
			return Math.max(Math.floor(Math.random() * max) + 1, min);
		},
		checkResult: function () {
			if (this.monsterHealth <= 0 && this.monsterHealth < this.playerHealth) {
				alert('You won!');
				return true;
			}

			if (this.playerHealth <= 0 && this.playerHealth < this.monsterHealth) {
				alert('You lost!');
				return true;
			}

			return false;
		},
	},
});
