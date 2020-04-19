<template>
	<html lang="en">
		<head>
			<meta charset="utf-8" />
			<title>Vue Components</title>
			<!-- <link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
				integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
				crossorigin="anonymous"
			/> -->
		</head>
		<body>
			<div id="app">
				<!-- User info -->
				<div class="container">
						<div class="row">
								<div class="col-xs-12">
										<app-user></app-user>
								</div>
						</div>
				</div>

				<!-- Server status -->
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

export default {
	components: {
		appHeader: Header,
		Servers,
		'app-server-details': ServerDetails,
		'app-footer': Footer,
		appUser: User
	},
};
</script>

<style></style>
