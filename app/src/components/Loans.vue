<template>
  <div class="search">
    <v-row class="pa-6" align="center" justify="center">
      <v-col cols="12" class="pa-12">
        <v-text-field
        v-model="searchInput"
        :label="`Search Loans by ${filterType}`"
        debounce="500"
        @change="filterLoans"
        @keypress="'enter', filterLoans"
        >
        </v-text-field>
      </v-col>
      <v-col cols="10">
        <v-radio-group class="justify-center" row v-model="filterType" mandatory>
          <v-radio
          v-for="option in radioOptions"
          :key="option.label"
          :label="option.label"
          :value="option.value"
          color="primary"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12" class="text-center">
        <h3> Results {{ loans.length }}</h3>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-col class="text-start" v-for="loan in loans" :key="loan.id" cols="4">
        <v-card>
          <v-img
          src="../../assets/svg/account.svg"
          ></v-img>
          <v-card-title>{{loan.firstName}} {{ loan.lastName }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="font-weight-bold" cols="6">
                Loan Number:
              </v-col>
              <v-col class="font-weight-bold" cols="6">
                {{ loan.loanNumber }}
              </v-col>
               <v-col cols="6">
                Email:
              </v-col>
              <v-col cols="6">
                {{ loan.email }}
              </v-col>
               <v-col cols="6">
                Address:
              </v-col>
              <v-col cols="6">
                {{ loan.address }}
              </v-col>
               <v-col cols="6">
                City:
              </v-col>
              <v-col cols="6">
                {{ loan.city }}
              </v-col>
               <v-col cols="6">
                State:
              </v-col>
              <v-col cols="6">
                {{ loan.state }}
              </v-col>
               <v-col cols="6">
                Zip:
              </v-col>
              <v-col cols="6">
                {{ loan.zip }}
              </v-col>

            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Loan from '../../models/Loan';
import axios from '../boot/axios'

interface iRadio {
  label: string,
  value: string
}


@Component({})
class HelloWorld extends Vue {

  radioOptions: iRadio[] = [
    {
      label: "Id",
      value: "id"
    },
    {
      label: 'First Name',
      value: 'first_name'
    },
    {
      label: 'Last Name',
      value: 'last_name'
    },
    {
      label: 'Email',
      value: 'email'
    },
    {
      label: 'Address',
      value: 'address'
    },
    {
      label: 'City',
      value: 'city'
    },
    {
      label: 'State',
      value: 'state'
    },
    {
      label: 'Zip',
      value: 'zip'
    },
    {
      label: 'Loan Number',
      value: 'loan_number'
    }
  ]
  filterType: string = '';
  searchInput: string = '';
  loans: Loan[] = []
  

  async filterLoans() {
    //empty string
    if (!this.searchInput) {
      // hit the /loans route to retrieve all
      const { data }  = await axios.get('/loans')
      this.loans = data.map((loan: any) => new Loan(loan))
    }

    if (this.filterType === 'loan_number') {
       const { data }  = await axios.get(`/loans/${this.searchInput}`)
       if (data.length) {
         this.loans = data.map((loan: any) => new Loan(loan))
       }
       
    } else {
      let reqBody: any = {}
        reqBody[this.filterType] = this.searchInput
        console.log(reqBody)
        const { data }  = await axios.get(`/attributes`, {params: reqBody} )
        if (data.length) {
         this.loans = data.map((loan: any) => new Loan(loan))
       }
        
    }

    
  }

  async mounted() {
    const { data }  = await axios.get(`${window.location.protocol}//${window.location.hostname}:3000/loans`)
    if (data.length) {
    this.loans = data.map((loan: any) => new Loan(loan))     
    }

  }

}
export default HelloWorld
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
