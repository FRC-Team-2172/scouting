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
            bodyFormData.append('Match_Number', vm.Match_Number);
            bodyFormData.append('Team_Number', vm.Team_Number);
            bodyFormData.append('Driverstation', vm.Driverstation);
            bodyFormData.append('Auto_Line_Crossed', vm.Auto_Line_Crossed);
            bodyFormData.append('Auto_Cubes_to_Switch', vm.Auto_Cubes_to_Switch);
            bodyFormData.append('Auto_Cubes_to_Scale', vm.Auto_Cubes_to_Scale);
            bodyFormData.append('Teleop_Cubes_to_Vault', vm.Teleop_Cubes_to_Vault);
            bodyFormData.append('Teleop_Cubes_to_Near_Switch', vm.Teleop_Cubes_to_Near_Switch);
            bodyFormData.append('Teleop_Cubes_to_Far_Switch', vm.Teleop_Cubes_to_Far_Switch);
            bodyFormData.append('Teleop_Cubes_to_Scale', vm.Teleop_Cubes_to_Scale);
            bodyFormData.append('Robot_Climbed', vm.Robot_Climbed);
            bodyFormData.append('Force_Activated', vm.Force_Activated);
            bodyFormData.append('Boost_Activated', vm.Boost_Activated);
            bodyFormData.append('Levitate_Activated', vm.Levitate_Activated);
            bodyFormData.append('Alliance_Score', vm.Alliance_Score);

            axios({
                method: 'post',
                url: 'https://thingproxy.freeboard.io/fetch/https://script.google.com/macros/s/AKfycbwUtqbRS1Z6puYSPXX8CwfHcggOC_tMU_hVVuykZG7CXcYRCYzc/exec' + '?nocache=' + new Date().getTime(),
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
        }
    },
    mounted: function(){
        $('#infoModal').foundation('open');
    }
});


