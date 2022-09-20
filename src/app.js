import { LightningElement } from "lwc";

export default class App extends LightningElement {

inputs = {
  firstName: '',
  lastName: '',
  empresa: '',
  rAnual: '',
  website: '',
  email: ''
};

result;

/*Operador Spread -> Espalhamento
Expandir valores de um array ou objt dentro de outro
 */


handleInputChange(event){
  let nameInput = event.target.name;
  let value = event.detail.value;
  //montando o obj com valores
  this.inputs = {
      ...this.inputs, [nameInput]:value
  };
}

handleOnClick(){
  this.result = `Nome: ${this.inputs.firstName} ${this.inputs.lastName}, Empresa: ${this.inputs.empresa}, Email: ${this.inputs.email}, Website: ${this.inputs.website}, Receita Anual: ${this.inputs.rAnual}`
}
}
