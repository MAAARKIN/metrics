<template>
	<div class="container">
		<h4 class="text-center">{{ msg }}</h4>
		<hr/>

		<!-- <label for="example">Descrição</label> -->
		<div class="form-group input-group">
			<input v-model="trackerName" @keyup.enter="addTracker" type="text" class="form-control" placeholder="Descrição de sua tarefa">
			<span class="input-group-btn">
				<button class="btn btn-primary" type="button" @click.prevent="addTracker">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</button>
			</span>
		</div>
		
		<div>
			<div v-for="tracker in trackers">
				<tracker :object="tracker" :name="tracker.name"/>
			</div>
		</div>

		<div class="form-group">
			<hr/>
			<button @click="clearAll" type="button" class="btn btn-danger btn-block">Limpar Tarefas</button>
		</div>

		<div>
			teste
			{{ timer }}
		</div>
	</div>
</template>

<script>
	import Tracker from './components/Tracker.vue'
	import TrackerStore from './stores/trackers.js'

	export default {
		components: {
			Tracker
		},

		name: 'app',

		data () {
			return {
				msg: 'Metrics',
				trackerName: '',
				trackers: TrackerStore.data,
				timer: ''
			}
		},

		created: function() {
			TrackerStore.initialize();
			

			this.timer = '';
		},

		methods: {
			addTracker: function(e) {
				console.log("adicionando Tracker");
				console.log(this.trackerName);

				let name = this.trackerName.trim();
				if(!name) return;

				TrackerStore.create(name);
				this.trackerName = '';
			},

			clearAll: function(e) {
				TrackerStore.clearAll();
				this.trackers = TrackerStore.data;
			}
		}
	}
</script>

<style>
	html {
		font-family: "Roboto", sans-serif;
		width: 400px; 
		height: auto;
	}

</style>
