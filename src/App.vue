<template>
  <div class="container">
    <h4>{{ msg }}</h4>
    <hr/>

    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="col s12">
          <div class="input-field col s7">
              <input id="descricao" type="text" class="validate">
              <label for="descricao">Descricao</label>
            </div>

            <div class="input-field col s3"> 
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
            <!-- <a class="waves-effect waves-light btn">button</a> -->
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Metrics'
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

  @media only screen and (min-width: 993px)!
  .container {
    width: 85%;
  }
  @media only screen and (min-width: 993px)
  .container {
    width: 70%;
  }
  @media only screen and (min-width: 601px)
  .container {
    width: 85%;
  }
</style>
