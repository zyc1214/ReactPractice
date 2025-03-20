function formtName() {
  return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'DAI',
    lastName: 'CAO'
};

function Greeting() {
  return (
    <div>
      <h1>Hello, {formtName()}!</h1>
    </div>
  );
}

export default Greeting;
