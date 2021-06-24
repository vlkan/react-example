import { useField } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react'
import { Label } from 'semantic-ui-react';

export default function VTextInput({...props}) {
    //console.log(props)
    const [field,meta] = useField(props)
    //console.log(meta)
    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props}/>
            {meta.touched && !!meta.error ?(
                <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </FormField>
    )
}
