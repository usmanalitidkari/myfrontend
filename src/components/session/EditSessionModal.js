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
} from "reactstrap";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import IntlMessages from "../../helpers/IntlMessages";
import { updateSessionItem } from "../../redux/actions";
const sessionSchema = Yup.object().shape({
  sched_name_eng: Yup.string().required(
    "Session name in english is required!"
  ),
  sched_name_arab: Yup.string().required(
    "Session name in arabic is required!"
  ),
  start_time: Yup.string().required(
    "Start Time is required!"
  ),
  end_time: Yup.string().required(
    "End Time is required!"
  ),
  early_minutes: Yup.string().required(
    "Early Minutes is required!"
  ),
  late_minutes: Yup.string().required(
    "Late Minutes is required!"
  ),
  check_in: Yup.string().required(
    "ChecK In is required!"
  ),
  check_out: Yup.string().required(
    "ChecK out is required!"
  ),
  overtime: Yup.string().required(
    "Over Time is required!"
  ),
  flex_time: Yup.string().required(
    "Flex Time is required!"
  ),
  hpd: Yup.string().required(
    "HPD is required!"
  ),
  day_off: Yup.string().required(
    "Day Off is required!"
  ),
  ignore_aw: Yup.string().required(
    "ignore_aw is required!"
  ),
  absent_factor: Yup.string().required(
    "Absent Factor is required!"
  ),
  in_begin: Yup.string().required(
    "In Begin is required!"
  ),
  in_end: Yup.string().required(
    "In End is required!"
  ),
  out_begin: Yup.string().required(
    "Out Begin is required!"
  ),
  out_end: Yup.string().required(
    "Out End is required!"
  ),
  extra_mins_overtime: Yup.string().required(
    "Extra Minutes Over Time required!"
  ),
  no_log_penality: Yup.string().required(
    "No Log Penality required!"
  ),
  no_late: Yup.string().required(
    "No Late is required!"
  ),
  no_absent: Yup.string().required(
    "No Absent is required!"
  ),
  no_ot: Yup.string().required(
    "No OT is required!"
  ),
  monthly_grace_period: Yup.string().required(
    "Monthly Grace Period is required!"
  ),
});
class EditSessionModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    values["id"] = this.props.endpoint.id;
    this.props.updateSessionItem(values);
  }

  render() {
    const { modalOpen, toggleModal } = this.props;

    return (
      <Modal
        isOpen={modalOpen}
        toggle={toggleModal}
        wrapClassName="modal-center"
        backdrop="static"
      >
        <ModalHeader toggle={toggleModal}>
          <IntlMessages id="session.update-title" />
        </ModalHeader>
        <Formik
          initialValues={{
            sched_name_eng: this.props.endpoint.sched_name_eng,
            sched_name_arab: this.props.endpoint.sched_name_arab,
            start_time: this.props.endpoint.start_time,
            end_time: this.props.endpoint.end_time,
            late_minutes: this.props.endpoint.late_minutes,
            early_minutes: this.props.endpoint.early_minutes,
            check_in: this.props.endpoint.check_in,
            check_out: this.props.endpoint.check_out,
            overtime: this.props.endpoint.overtime,
            flex_time: this.props.endpoint.flex_time,
            hpd: this.props.endpoint.hpd,
            day_off: this.props.endpoint.day_off,
            ignore_aw: this.props.endpoint.ignore_aw,
            absent_factor: this.props.endpoint.absent_factor,
            in_begin: this.props.endpoint.in_begin,
            in_end: this.props.endpoint.in_end,
            out_begin: this.props.endpoint.out_begin,
            out_end: this.props.endpoint.out_end,
            extra_mins_overtime: this.props.endpoint.extra_mins_overtime,
            no_log_penality: this.props.endpoint.no_log_penality,
            monthly_grace_period: this.props.endpoint.monthly_grace_period,
            no_late: this.props.endpoint.no_late,
            no_absent: this.props.endpoint.no_absent,
            no_ot: this.props.endpoint.no_ot,
          }}
          validationSchema={sessionSchema}
          onSubmit={this.handleSubmit}
        >
          {({ values, errors, touched }) => (
            <Form className="av-tooltip tooltip-label-right">
              <ModalBody>
                <FormGroup>
                  <Label>
                    <IntlMessages id="session.sched_name_eng" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.sched_name_eng}
                    name="sched_name_eng"
                  />
                  {errors.sched_name_eng && touched.sched_name_eng && (
                    <div className="invalid-feedback d-block">
                      {errors.sched_name_eng}
                    </div>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label>
                    <IntlMessages id="session.sched_name_arab" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.sched_name_arab}
                    name="sched_name_arab"
                  />
                  {errors.sched_name_arab && touched.sched_name_arab && (
                    <div className="invalid-feedback d-block">
                      {errors.sched_name_arab}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.start_time" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.start_time}
                    name="start_time"
                  />
                  {errors.start_time && touched.start_time && (
                    <div className="invalid-feedback d-block">
                      {errors.start_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.end_time" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.end_time}
                    name="end_time"
                  />
                  {errors.end_time && touched.end_time && (
                    <div className="invalid-feedback d-block">
                      {errors.end_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.late_minutes" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.late_minutes}
                    name="late_minutes"
                  />
                  {errors.late_minutes && touched.late_minutes && (
                    <div className="invalid-feedback d-block">
                      {errors.late_minutes}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.early_minutes" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.early_minutes}
                    name="early_minutes"
                  />
                  {errors.early_minutes && touched.early_minutes && (
                    <div className="invalid-feedback d-block">
                      {errors.early_minutes}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.check_in" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.check_in}
                    name="check_in"
                  />
                  {errors.check_in && touched.check_in && (
                    <div className="invalid-feedback d-block">
                      {errors.check_in}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.check_out" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.check_out}
                    name="check_out"
                  />
                  {errors.check_out && touched.check_out && (
                    <div className="invalid-feedback d-block">
                      {errors.check_out}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.overtime" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.overtime}
                    name="overtime"
                  />
                  {errors.overtime && touched.overtime && (
                    <div className="invalid-feedback d-block">
                      {errors.overtime}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.flex_time" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.flex_time}
                    name="flex_time"
                  />
                  {errors.flex_time && touched.flex_time && (
                    <div className="invalid-feedback d-block">
                      {errors.flex_time}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.hpd" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.hpd}
                    name="hpd"
                  />
                  {errors.hpd && touched.hpd && (
                    <div className="invalid-feedback d-block">
                      {errors.hpd}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.day_off" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.day_off}
                    name="day_off"
                  />
                  {errors.day_off && touched.day_off && (
                    <div className="invalid-feedback d-block">
                      {errors.day_off}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.ignore_aw" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.ignore_aw}
                    name="ignore_aw"
                  />
                  {errors.ignore_aw && touched.ignore_aw && (
                    <div className="invalid-feedback d-block">
                      {errors.ignore_aw}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.absent_factor" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.absent_factor}
                    name="absent_factor"
                  />
                  {errors.absent_factor && touched.absent_factor && (
                    <div className="invalid-feedback d-block">
                      {errors.absent_factor}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.in_begin" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.in_begin}
                    name="in_begin"
                  />
                  {errors.in_begin && touched.in_begin && (
                    <div className="invalid-feedback d-block">
                      {errors.in_begin}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.in_end" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.in_end}
                    name="in_end"
                  />
                  {errors.in_end && touched.in_end && (
                    <div className="invalid-feedback d-block">
                      {errors.in_end}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.out_begin" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.out_begin}
                    name="out_begin"
                  />
                  {errors.out_begin && touched.out_begin && (
                    <div className="invalid-feedback d-block">
                      {errors.out_begin}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.out_end" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.out_end}
                    name="out_end"
                  />
                  {errors.out_end && touched.out_end && (
                    <div className="invalid-feedback d-block">
                      {errors.out_end}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.extra_mins_overtime" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.extra_mins_overtime}
                    name="extra_mins_overtime"
                  />
                  {errors.extra_mins_overtime && touched.extra_mins_overtime && (
                    <div className="invalid-feedback d-block">
                      {errors.extra_mins_overtime}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_log_penality" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.no_log_penality}
                    name="no_log_penality"
                  />
                  {errors.no_log_penality && touched.no_log_penality && (
                    <div className="invalid-feedback d-block">
                      {errors.no_log_penality}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.monthly_grace_period" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.monthly_grace_period}
                    name="monthly_grace_period"
                  />
                  {errors.monthly_grace_period && touched.monthly_grace_period && (
                    <div className="invalid-feedback d-block">
                      {errors.monthly_grace_period}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_late" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.no_late}
                    name="no_late"
                  />
                  {errors.no_late && touched.no_late && (
                    <div className="invalid-feedback d-block">
                      {errors.no_late}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_absent" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.no_absent}
                    name="no_absent"
                  />
                  {errors.no_absent && touched.no_absent && (
                    <div className="invalid-feedback d-block">
                      {errors.no_absent}
                    </div>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label>
                    <IntlMessages id="session.no_ot" />
                  </Label>
                  <Field
                    className="form-control"
                    value={values.no_ot}
                    name="no_ot"
                  />
                  {errors.no_ot && touched.no_ot && (
                    <div className="invalid-feedback d-block">
                      {errors.no_ot}
                    </div>
                  )}
                </FormGroup>

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

const mapStateToProps = ({ sessionApp }) => {
  return {
   
    sessionApp,
  };
};
export default connect(mapStateToProps, {
  updateSessionItem,
})(EditSessionModal);
