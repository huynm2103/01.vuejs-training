<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>http</h1>
				<div class="form-group">
					<label></label>
					<input class="form-control" type="text" v-model="user.username" />
				</div>
				<div class="form-group">
					<label></label>
					<input class="form-control" type="text" v-model="user.email" />
				</div>
				<button class="btn btn-primary" @click.prevent="submitInfo">
					Submit
				</button>
				<hr />
        <div class="form-group">
					<label></label>
					<input class="form-control" type="text" v-model="node" />
				</div>
				<button class="btn btn-primary" @click="fetchData">
					Fetch User Info
				</button>
				<br /><br />
				<ul class="list-group">
					<li class="list-group-item" v-for="(u, index) in users" :key="index">
						{{ u.username }} - {{ u.email }}
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Animations</h1>
				<button class="btn btn-primary" @click="show = !show">
					Show Alert
				</button>
				<br /><br />
				<transition name="fade">
					<div class="alert alert-info" v-if="show">Alert some info!</div>
				</transition>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<p>{{ text | toUpper | toLower }}</p>
				<input v-model="filterText" />
				<ul>
					<li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
				</ul>
				<app-list></app-list>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Build-in Directives</h1>
				<p v-text="'v-text'"></p>
				<p v-html="'v-html'"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Custom Directives</h1>
				<p v-highlight:background.delayed="'green'">Color this!</p>
				<p v-highlight="'green'">Color this!</p>
				<p v-local-highlight:background.delayed="'red'">Local Color this!</p>
			</div>
		</div>
	</div>
</template>

<script>
import List from './components/List.vue';
import { FruitMixin } from './components/fruitMixin';

export default {
	data() {
		return {
			text: 'Hello there!',
			show: false,
			user: {
				username: '',
				email: '',
			},
      users: [],
      resource: {},
      node: 'data'
		};
	},
	components: {
		appList: List,
	},
	mixins: [FruitMixin],
	filters: {
		toUpper(value) {
			return value.toUpperCase();
		},
	},
	directives: {
		'local-highlight': {
			// eslint-disable-next-line no-unused-vars
			bind(el, binding, vnode) {
				let delay = 0;
				if (binding.modifiers['delayed']) {
					delay = 3000;
				}

				setTimeout(() => {
					if (binding.arg == 'background') {
						el.style.backgroundColor = binding.value;
					} else {
						el.style.color = binding.value;
					}
				}, delay);
			},
		},
	},
	methods: {
		submitInfo() {
			// this.$http.post('', this.user).then(
			// 	(response) => {
			// 		console.log(response);
			// 	},
			// 	(error) => {
			// 		console.log(error);
			// 	}
      // );

      // this.resource.save({}, this.users)
      this.resource.saveAlt(this.user);
		},
		fetchData() {
			// this.$http
      // 	.get('')
      this.resource.getData({node: this.node})
				.then(
					(response) => {
						return response.json();
					},
					(error) => {
						console.log(error);
					}
				)
				.then((data) => {
					let dataArr = [];
					for (let key in data) {
						dataArr.push(data[key]);
					}

					this.users = dataArr;
				});
		},
  },
  created () {
    const customResource = {
      saveAlt: {
        method: "POST",
        url: "alt.json"
      },
      getData: {
        method: "GET"
      }
    }
    this.resource = this.$resource('{node}.json', {}, customResource)
  }
};
</script>

<style>
/* .fade-enter {

  }

  .fade-enter-active {

  }

  .fade-leave {

  }

  .fade-leave-active {

  } */
</style>
