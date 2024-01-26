import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-multilevel-dropdown';


function CustomForm() {
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Studnet Id</InputGroup.Text>
        <Form.Control
          placeholder="Student-id"
          aria-label="student-id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Student Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
     
      </InputGroup>
      
      <InputGroup className="mb-3">
        <InputGroup.Text>Occupation</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
      
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Current Address</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>


      <InputGroup className="mb-3 my-4">
        <Form.Control
          placeholder="Student Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Phone Number</InputGroup.Text>
        <Form.Control
          
          aria-label="student-id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">School Id</InputGroup.Text>
        <Form.Control
         
          aria-label="student-id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Program
        <Dropdown tittle="program">
        <Dropdown.Item className='text-black'>Item 1
        </Dropdown.Item>
        </Dropdown>

        
        </InputGroup.Text>
        <Form.Control
        
          aria-label="student-id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Department</InputGroup.Text>
        <Form.Control
         
          aria-label="student-id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      
    </>
  );
}

export default CustomForm;