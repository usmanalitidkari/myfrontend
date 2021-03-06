import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  FormGroup,
  CustomInput,
  Col,
  Row,
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import {
  FormikReactSelect,
  FormikCustomCheckbox,
} from "../../containers/form-validations/FormikFields";
import IntlMessages from "../../helpers/IntlMessages";
import { addSponsorItem } from "../../redux/actions";
const sponsorSchema = Yup.object().shape({
  sponsor_name_eng: Yup.string().required(
    "Sponsor name in english is required!"
  ),
  sponsor_name_arab: Yup.string().required(
    "Sponsor name in arabic is required!"
  ),
});
class AddNewSponsorModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addSponsorItem(values);
    this.props.toggleModal();
  }

  render() {
    const { modalOpen, toggleModal } = this.props;
    const { countryItems } = this.props.countryApp;
    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center "
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="sponsor.add-new-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            sponsor_name_eng: "",
            sponsor_name_arab: "",
            sponsor_name_eng: "",
            sponsor_name_arab: "",
            sponsor_address: "",
            sponsor_telphone_no: "",
            contact_person_eng: "",
            contact_person_arab: "",
            sponsor_no: "",
          }}
          validationSchema={sponsorSchema}
          onSubmit={this.handleSubmit}
        >
          {({
            setFieldValue,
            setFieldTouched,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.sponsor_no" />
                      </Label>
                      <Field className="form-control" name="sponsor_no" />
                      {errors.sponsor_no && touched.sponsor_no && (
                        <div className="invalid-feedback d-block">
                          {errors.sponsor_no}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.sponsor_name_eng" />
                      </Label>
                      <Field className="form-control" name="sponsor_name_eng" />
                      {errors.sponsor_name_eng && touched.sponsor_name_eng && (
                        <div className="invalid-feedback d-block">
                          {errors.sponsor_name_eng}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.sponsor_name_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="sponsor_name_arab"
                      />
                      {errors.sponsor_name_arab &&
                        touched.sponsor_name_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.sponsor_name_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.contact_person_eng" />
                      </Label>
                      <Field
                        className="form-control"
                        name="contact_person_eng"
                      />
                      {errors.contact_person_eng &&
                        touched.contact_person_eng && (
                          <div className="invalid-feedback d-block">
                            {errors.contact_person_eng}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.contact_person_arab" />
                      </Label>
                      <Field
                        className="form-control"
                        name="contact_person_arab"
                      />
                      {errors.contact_person_arab &&
                        touched.contact_person_arab && (
                          <div className="invalid-feedback d-block">
                            {errors.contact_person_arab}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.sponsor_address" />
                      </Label>
                      <Field className="form-control" name="sponsor_address" />
                      {errors.sponsor_address && touched.sponsor_address && (
                        <div className="invalid-feedback d-block">
                          {errors.sponsor_address}
                        </div>
                      )}
                    </FormGroup>
                  </Col>
                </Row>

                <Row form>
                  <Col md={12}>
                    <FormGroup>
                      <Label>
                        <IntlMessages id="sponsor.sponsor_telphone_no" />
                      </Label>
                      <Field
                        className="form-control"
                        name="sponsor_telphone_no"
                      />
                      {errors.sponsor_telphone_no &&
                        touched.sponsor_telphone_no && (
                          <div className="invalid-feedback d-block">
                            {errors.sponsor_telphone_no}
                          </div>
                        )}
                    </FormGroup>
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onClick={toggleModal}>
                  <IntlMessages id="general.cancel" />
                </Button>
                <Button color="primary" type="submit">
                  <IntlMessages id="general.save" />
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </Modal>
    );
  }
}
const mapStateToProps = ({ countryApp, cityApp, sponsorApp }) => {
  return {
    countryApp,
    cityApp,
    sponsorApp,
  };
};
export default connect(mapStateToProps, {
  addSponsorItem,
})(AddNewSponsorModal);
