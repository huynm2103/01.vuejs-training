new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
	},
	methods: {
		startGame: function () {
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack: function () {
			this.monsterHealth -= this.calculateDamge(3, 10);
			this.playerHealth -= this.calculateDamge(3, 10);
			if (this.checkResult()) this.gameIsRunning = false;
		},
		specialAttack: function () {},
		heal: function () {},
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
