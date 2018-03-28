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
      Match_Number: "0",
      Team_Number: "0",
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
      Alliance_Score: "0"
    },
    methods: {
        nextMatch: function(){
            var vm = this;
            $('#loadingModal').foundation('open');
            var bodyFormData = new FormData();
            bodyFormData.set('Match_Number', vm.Match_Number);
            bodyFormData.set('Team_Number', vm.Team_Number);
            bodyFormData.set('Driverstation', vm.Driverstation);
            bodyFormData.set('Auto_Line_Crossed', vm.Auto_Line_Crossed);
            bodyFormData.set('Auto_Cubes_to_Switch', vm.Auto_Cubes_to_Switch);
            bodyFormData.set('Auto_Cubes_to_Scale', vm.Auto_Cubes_to_Scale);
            bodyFormData.set('Teleop_Cubes_to_Vault', vm.Teleop_Cubes_to_Vault);
            bodyFormData.set('Teleop_Cubes_to_Near_Switch', vm.Teleop_Cubes_to_Near_Switch);
            bodyFormData.set('Teleop_Cubes_to_Far_Switch', vm.Teleop_Cubes_to_Far_Switch);
            bodyFormData.set('Teleop_Cubes_to_Scale', vm.Teleop_Cubes_to_Scale);
            bodyFormData.set('Robot_Climbed', vm.Robot_Climbed);
            bodyFormData.set('Force_Activated', vm.Force_Activated);
            bodyFormData.set('Boost_Activated', vm.Boost_Activated);
            bodyFormData.set('Levitate_Activated', vm.Levitate_Activated);
            bodyFormData.set('Alliance_Score', vm.Alliance_Score);
            
            axios({
                method: 'post',
                url: 'https://thingproxy.freeboard.io/fetch/https://script.google.com/macros/s/AKfycbwUtqbRS1Z6puYSPXX8CwfHcggOC_tMU_hVVuykZG7CXcYRCYzc/exec',
                data: bodyFormData
              }).then(function(r){
                console.log(r);
                app.resetData();
                $('#loadingModal').foundation('close');
              }).catch(function (error) {
                console.log(error);
                alert("Error! Something went wrong.");
                alert(error.message);
              });;
        },
        openInfo: function(){
            $('#infoModal').foundation('open');
        },
        resetData: function(){
            this.Match_Number = parseInt(this.Match_Number) + 1;
            this.Team_Number = "0";
            this.Driverstation = "";
            this.Auto_Line_Crossed = "";
            this.Auto_Cubes_to_Switch = "0";
            this.Auto_Cubes_to_Scale = "0";
            this.Teleop_Cubes_to_Vault = "0";
            this.Teleop_Cubes_to_Near_Switch = "0";
            this.Teleop_Cubes_to_Far_Switch = "0";
            this.Teleop_Cubes_to_Scale = "0";
            this.Robot_Climbed = "";
            this.Force_Activated = false;
            this.Boost_Activated = false;
            this.Levitate_Activated = false;
            this.Alliance_Score = "0";
        },
        breakEverything: function(){
            var Loopcount = 0;
            while(1===1) {
                Loopcount++;
            }
        }
    },
    mounted: function(){
        $('#infoModal').foundation('open');
    }
});


