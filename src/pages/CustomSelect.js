import React from 'react'
import { Formik, Field } from 'formik';
import Select from 'react-select';

const CustomSelect = () => {
    return (
    <Formik
        initialValues={{ industry: '' }}
        
    >
        {({ values, handleChange, handleBlur }) => (
            <form>
                {/* Other form fields */}
                <Field
                    as={Select}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.industry}
                    id="industry"
                    name="industry"
                    options={[
                        { value: 'HealthCare', label: 'Health Care' },
                        { value: 'Retail', label: 'Retail' },
                        { value: 'Entertainment', label: 'Entertainment' },
                        { value: 'Education', label: 'Education' },
                        { value: 'Food', label: 'Food' },
                        { value: 'IT & Tech', label: 'IT & Tech' },
                    ]}
                />
                {/* Other form fields */}
            </form>
        )}
    </Formik>
);
                };

export default CustomSelect