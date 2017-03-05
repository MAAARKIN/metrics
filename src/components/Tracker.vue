<template>
	<div class="row">
		<div class="col-xs-3">{{ name }}</div>
		<div class="col-xs-3"> {{ object.paused }} </div>
		<div class="col-xs-6 text-right"> 
			<div class="btn-group btn-group-sm right" role="group" aria-label="Opções">
				<button type="button" class="btn btn-default">Play</button>
				<button type="button" class="btn btn-default">Remove</button>
			</div>
		</div>

		teste - {{ timer }}
	</div>
</template>

<script>
	export default {

		name: 'Tracker',
		props: {
			name: String,
			object: Object
		},

		data() {
			return {
				timer: ''
			}
		},

		methods: {
			updateTimer: function() {
				let ms = this.object.previouslyElapsed;

				if(this.object.paused === false){
					ms += Date.now() - this.object.lastStartDate;
				}

				let hours = Math.floor(ms / 3600000);
				let minutes = Math.floor((ms - (hours * 3600000)) / 60000);
				let seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);

				hours = hours < 10 ? '0'+ hours : hours;
				minutes = minutes < 10 ? '0'+ minutes : minutes;
				seconds = seconds < 10 ? '0'+ seconds : seconds;

				this.timer = hours+':'+minutes+':'+seconds;
			}
		},

		created: function() {
			this.updateTimer();
		},
	};
</script>

<style lang="css" scoped>

</style>