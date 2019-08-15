import React,{useState, useRef} from 'react';
import {Container, Row, Col, Popover, Overlay, Tooltip} from 'react-bootstrap';
import { Formik, Field } from "formik";
import { conversion } from './support/conversion';





const ConversionForm = () => {

    const [gradeResult, setGradeResult] = useState('');
    const [showError, setShowError] = useState(false);
    const target = useRef(null);

    const handleOnSubmit = (values) => {
        let result = conversion(values.inputValue, values.studentResponse, values.inputMeasure, values.targetMeasure);
        setGradeResult(result)
        console.log(result)
    }

    const initialValues = {
        inputMeasure: "celsius",
        targetMeasure: "celsius",
        inputValue: "",
        studentResponse: "",
        studentMark: ""
    };

    const validate = values => {
        let errors = {
            targetMeasure: '',
            inputMeasure: ''
        };

        if ((values.inputMeasure === 'celsius' || values.inputMeasure === 'fahrenheit' || values.inputMeasure === 'kelvin' || values.inputMeasure === 'rankine') && (values.targetMeasure === 'cups' || values.targetMeasure === 'cubicfeet' || values.targetMeasure === 'cubicinches' || values.targetMeasure === 'gallons' || values.targetMeasure === 'liters' || values.targetMeasure === 'tablespoons')) {
            errors.inputMeasure = "Cannot convert between temperatue and volume";
            console.log("an error occurred");
            if (showError === false) { setShowError(!showError); }
            return errors;
        }

        if ((values.inputMeasure === 'cups' || values.inputMeasure === 'cubicfeet' || values.inputMeasure === 'cubicinches' || values.inputMeasure === 'gallons' || values.inputMeasure === 'liters' || values.inputMeasure === 'tablespoons') && (values.targetMeasure === 'celsius' || values.targetMeasure === 'fahrenheit' || values.targetMeasure === 'kelvin' || values.targetMeasure === 'rankine')) {
            errors.inputMeasure = "Cannot convert between temperatue and volume";
            console.log("an error occurred");
            if (showError === false) { setShowError(!showError); }
            return errors;
        }


        if ((values.inputMeasure === 'celsius' || values.inputMeasure === 'fahrenheit' || values.inputMeasure === 'kelvin' || values.inputMeasure === 'rankine') && (values.targetMeasure === 'celsius' || values.targetMeasure === 'fahrenheit' || values.targetMeasure === 'kelvin' || values.targetMeasure === 'rankine' )) {
            if (showError === true) { setShowError(!showError)}
            //return errors;
        }

        if ((values.inputMeasure === 'cups' || values.inputMeasure === 'cubicfeet' || values.inputMeasure === 'cubicinches' || values.inputMeasure === 'gallons' || values.inputMeasure === 'liters' || values.inputMeasure === 'tablespoons') && (values.targetMeasure === 'cups' || values.targetMeasure === 'cubicfeet' || values.targetMeasure === 'cubicinches' || values.targetMeasure === 'gallons' || values.targetMeasure === 'liters' || values.targetMeasure === 'tablespoons')) {
            if (showError === true) { setShowError(!showError) }
            //return errors;
        }
    };


    return (
        <>
        <Container>
            <Row className="justify-content-md-center" >
                <Col className="text-success mb-1 mt-3 pt-2" lg="6" ><h1>Checking Student Conversion</h1></Col>
            </Row>
            <Formik 
                initialValues={initialValues}
                validate={validate}
                setFieldValue
                onSubmit={handleOnSubmit}
                    render={({ handleSubmit, errors, setFieldValue, resetForm }) => (
                    <form onSubmit={handleSubmit} >
                        <Row className="justify-content-md-center show-grid shadow-sm p-2 mb-3 bg-white border rounded" ref={target} >
                            <Col  className="" >
                                <label htmlFor="inputValue">
                                    <div>Value to Convert</div>
                                    <Field type="text" name="inputValue" />
                                </label>
                            </Col>
                            <Col  className="">
                                <label htmlFor="inputMeasure">
                                    <div>Input Measure</div>
                                    <Field name="inputMeasure" component="select">
                                        <option value="celsius">Celsius</option>
                                        <option value="fahrenheit">Fahrenheit</option>
                                        <option value="kelvin">Kelvin</option>
                                        <option value="rankine">Rankine</option>
                                        <option value="cups">Cups</option>
                                        <option value="cubicfeet">Cubic Feet</option>
                                        <option value="cubicinches">Cubic Inches</option>
                                        <option value="gallons">Gallons</option>
                                        <option value="liters">Liters</option>
                                        <option value="tablespoons">Tablespoons</option>
                                    </Field>
                                </label>
                            </Col>
                            <Col  className="">
                                <label htmlFor="targetMeasure">
                                    <div>Target Measure</div>
                                    <Field name="targetMeasure" component="select">
                                        <option value="celsius">Celsius</option>
                                        <option value="fahrenheit">Fahrenheit</option>
                                        <option value="kelvin">Kelvin</option>
                                        <option value="rankine">Rankine</option>
                                        <option value="cups">Cups</option>
                                        <option value="cubicfeet">Cubic Feet</option>
                                        <option value="cubicinches">Cubic Inches</option>
                                        <option value="gallons">Gallons</option>
                                        <option value="liters">Liters</option>
                                        <option value="tablespoons">Tablespoons</option>
                                    </Field>
                                </label>
                            </Col>
                            <Col  className="">
                                <label htmlFor="studentResponse">
                                    <div>Student Response</div>
                                    <Field type="text" name="studentResponse" />
                                </label>
                            </Col>
                            <Col>
                                <label htmlFor="studentMark">
                                    <div>Student Mark</div>
                                        <Field type="text" name="studentMark" value={gradeResult} />
                                        {/* <span id="studentMark" name="studentMark" >{gradeResult}</span>  */}
                                </label>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <button type="submit">Calculate</button>
                            </Col>
                            <Col sm={1} >
                                    <button type="reset" onClick={() => {resetForm();  setGradeResult('')}} >Clear</button>
                            </Col>
                        </Row>
                    </form>
                )}>
            </Formik>
        </Container>
            <Overlay target={target.current} show={showError} placement="bottom-start">
            {props => (
                <Tooltip id="overlay-example" {...props}>
                    Cannot convert between temperature property and volume property
        </Tooltip>
            )}
        </Overlay>
        </>
    )
}

export default ConversionForm;