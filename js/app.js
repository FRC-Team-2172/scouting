$(document).foundation();

Vue.component('num-input', {
    template: '#num-input-template',
    props: ['title', 'value'],
    methods: {
        addOne: function(){
            this.value = parseInt(this.value) + 1;
            this.$emit('input', this.value);
        },
        subtractOne: function(){
            if(parseInt(this.value) > 0){
                this.value = parseInt(this.value) - 1;
            }
            this.$emit('input', this.value);
        }
    },
});

var app = new Vue({
    el: '#app',
    data: {
      Match_Number: "00",
      Team_Number: "0000",
      Driverstation: "",
      Auto_Line_Crossed: "",
      Auto_Cubes_to_Switch: "0",
      Auto_Cubes_to_Scale: "0",
      Teleop_Cubes_to_Vault: "0",
      Teleop_Cubes_to_Near_Switch: "0",
      Teleop_Cubes_to_Far_Switch: "0",
      Teleop_Cubes_to_Scale: "0",
      Robot_Climbed: "",
      Force_Activated: false,
      Boost_Activated: false,
      Levitate_Activated: false,
      Alliance_Score: "000"
    },
    methods: {
        nextMatch: function(){
            var vm = this;
            axios.post('https://script.google.com/macros/s/AKfycbwUtqbRS1Z6puYSPXX8CwfHcggOC_tMU_hVVuykZG7CXcYRCYzc/exec', {
                Match_Number: vm.Match_Number,
                Team_Number: vm.Team_Number,
                Driverstation: vm.Driverstation,
                Auto_Line_Crossed: vm.Auto_Line_Crossed,
                Auto_Cubes_to_Switch: vm.Auto_Cubes_to_Switch,
                Auto_Cubes_to_Scale: vm.Auto_Cubes_to_Scale,
                Teleop_Cubes_to_Vault: vm.Teleop_Cubes_to_Vault,
                Teleop_Cubes_to_Near_Switch: vm.Teleop_Cubes_to_Near_Switch,
                Teleop_Cubes_to_Far_Switch: vm.Teleop_Cubes_to_Far_Switch,
                Teleop_Cubes_to_Scale: vm.Teleop_Cubes_to_Scale,
                Robot_Climbed: vm.Robot_Climbed,
                Force_Activated: vm.Force_Activated,
                Boost_Activated: vm.Boost_Activated,
                Levitate_Activated: vm.Levitate_Activated,
                Alliance_Score: vm.Alliance_Score
              })
              .then(function (response) {
                vm.Match_Number = "00";
                vm.Team_Number = "0000";
                vm.Driverstation = "";
                vm.Auto_Line_Crossed = "";
                vm.Auto_Cubes_to_Switch = "0";
                vm.Auto_Cubes_to_Scale = "0";
                vm.Teleop_Cubes_to_Vault = "0";
              })
              .catch(function (error) {
                console.log(error);
                alert("Oops! Something went wrong.")
              });
        },
        openInfo: function(){
            $('#infoModal').foundation('open');
        }
    },
    mounted: function(){
        $('#infoModal').foundation('open');
    }
});
