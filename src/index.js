import Person from './model/person';

class index {
  constructor() {
    let employee = new Person( 'Hamed', 'Farag' );
  }

  get printEmployeeName(){
    const fullName = this.employee.fullName();
    console.log(fullName);
  }
}
