import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const Forms = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Enter Your Details to Edit
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Gender</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>Prefer Not to Say</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Profile Picture</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  Click on the Choose File option to upload your profile picture.
                </FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Forms;
