import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../Comnponents/Base";

function Login() {
  return (
    <div>
      {<Base />}
      <Container>
        <container maxWidth="sm">
          <h1>Login With Your Credentiasl</h1>
        </container>

        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="exampleEmail@gmail.com"
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="Password"
                  placeholder="Abc@123"
                  type="password"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>Sign in</Button>
        </Form>
      </Container>
    </div>
  );
}
export default Login;
