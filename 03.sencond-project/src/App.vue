<template>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Vue Components</title>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
				crossorigin="anonymous"
			/>
		</head>
		<body>
			<div id="app">
				<!-- Quote -->
				<button @click="selectedComponent = 'appQuote'">Quote</button>
				<button @click="selectedComponent = 'appAuthor'">Author</button>
				<button @click="selectedComponent = 'appNew'">New</button>
				<p>{{ selectedComponent }}</p>
				<keep-alive>
					<component :is="selectedComponent">
						<h1 slot="title">{{ quote }}</h1>
						<p>a wonderful quoteS</p>
					</component>
				</keep-alive>

				<!-- <app-quote>
					<h1 slot="title">{{ quote }}</h1>
					<p>a wonderful quoteS</p>
				</app-quote> -->

				<!-- User info -->
				<hr>
				<div class="container">
						<div class="row">
								<div class="col-xs-12">
										<app-user></app-user>
								</div>
						</div>
				</div>

				<!-- Server status -->
				<hr>
        <div class="container">
          <app-header></app-header>
          <hr />
          <div class="row">
            <servers></servers>
            <app-server-details></app-server-details>
          </div>
          <hr />
          <app-footer></app-footer>
        </div>
      </div>
		</body>
	</html>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
import User from './components/User/User.vue'
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
	data: function () {
		return ({
			quote: 'Quote of day',
			selectedComponent: 'appQuote'
		})
	},
	components: {
		appHeader: Header,
		Servers,
		'app-server-details': ServerDetails,
		'app-footer': Footer,
		appUser: User,
		appQuote: Quote,
		appAuthor: Author,
		appNew: New
	},
};
</script>

<style></style>
