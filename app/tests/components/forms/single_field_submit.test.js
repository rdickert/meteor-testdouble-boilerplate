import { expect } from 'chai';
import td from 'testdouble';

describe("<SingleFieldSubmit />", function() {

  before(function() {
  	//render the component with:
  	// - a submitHandler
  	// - default placeholder prop value
  });

  after(function() {
    td.reset();
  });

  xit("displays a default input placeholder", function() {
  	//expect the placeholder value to match the default value
  });
  xit("accepts a placeholder prop", function() {
  	//render the component and pass in a placeholder prop
  	//expect the placeholder prop to match the passed in prop
  });

  xit("passes the input value to a submitHandler when the return key is pressed", function() {

  	//create a parent (fixture) component that accepts the submit value
  	// render SingleFieldSubmit and pass in a callback to the parent's submit handler
  	// in the DOM, pass in a value into the input field
  	// spy on the parent's submit handler and expect it to return the value that was entered
  });

});
