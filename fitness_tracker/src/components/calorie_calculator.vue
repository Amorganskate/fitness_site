<template>
        <v-card elevation="7" height="800" width="800">
            <v-card-title class="text-center headline">Calorie Calculator</v-card-title>
            <v-row>
                <v-col class="ml-3">
                    <v-text-field v-model="age" label="Enter Your Age"></v-text-field>
                </v-col>
                <v-col class="mr-3" >
                    <v-select v-model="selected_gender" label="Select Your Gender" :items="gender"></v-select>
                </v-col>
            </v-row>
            <v-row>
                <v-subheader class="ml-3">Height / Weight</v-subheader>
            </v-row>
            <v-row>
                
                <v-col class="ml-3">
                    <v-text-field v-model.number="feet" label="Feet"></v-text-field>
                </v-col>
                <v-col class="mr-3">
                    <v-text-field v-model.number="inches" label="Inches"></v-text-field>
                </v-col>
                <v-col class="mr-3">
                    <v-text-field v-model="weight" label="Weight"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="ml-3" v-show="height_centimeters">
                    Height in Centimeters: {{height_centimeters}}
                </v-col>
                <v-col v-show="kgs != 0">
                    Weight in Kilograms: {{kgs}}
                </v-col>
            </v-row>

            <v-row>
                <v-col class="ml-3 mr-3" >
                    <v-select v-model="selected_activity_level" :items="activity_level" item-text="text" item-value="value" label="Select an Activity Range"></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-show="BMR != 0">
                    <div class="headline text-center">Basal Metabolic Rate</div>
                    <div class="title text-center">
                        {{BMR}}
                    </div>
                </v-col>
                <v-col v-show="TDEE != 0" >
                    <div class="headline text-center">TDEE</div>
                        <div class="title text-center">
                            {{TDEE}}
                        </div>
                </v-col>
            </v-row>

            <div class="text-center">
                <v-btn label="Calculate Macros" color="primary" @click="create_macros()">Calculate Macros</v-btn>
            </div>
           
        </v-card>
</template>

<script>
export default {
    props: ['send_calories'],
    data(){
        return {
            age: '',
            gender: ['Male', 'Female'],
            selected_gender: '',
            feet: 0,
            inches: 0,
            weight: '',
            activity_level: [
                { text: 'Sedentary (limited exercise)', value: 1.2},
                { text: 'Lightly active (light exercise less than three days per week)', value: 1.375},
                { text: 'Moderately active (moderate exercise most days of the week)', value: 1.55},
                { text: 'Very active (hard exercise every day)', value: 1.725 },
                { text: 'Extra active (strenuous exercise two or more times per day)', value: 1.9 },
            ],
            selected_activity_level: null,
        }
    },
    computed: {
        kgs: function(){
            return (this.weight / 2.2).toFixed(2);
        },
        height_centimeters: function(){
            if(this.feet){
                var total_inches = (this.feet * 12) + this.inches ;
                console.log('here')
                // Height in Centimeters
                return (total_inches * 2.54);
            }
            return '';
        },
        BMR: function(){
            if(this.selected_gender === 'Male' && this.kgs && this.height_centimeters && this.age && this.weight){
                // Determine calories
                return (66 + (13.7 * this.kgs) + (5 * this.height_centimeters) - (6.8 * this.age)).toFixed(0);
            } else if(this.selected_gender === 'Female' && this.kgs && this.height_centimeters && this.age && this.weight) {
                return (655 + (9.6 * this.kgs) + (1.8 * this.height_centimeters) - (4.7 * this.age)).toFixed(0);
            }
            return 0;
        },
        TDEE: function(){
            if(this.BMR){
                
                return (this.BMR * this.selected_activity_level).toFixed(0);
            }
            return 0;
        },
        
        
    },
    methods:{
        create_macros(){
            this.send_calories(this.TDEE);
        }
    }
}
</script>

<style>

</style>