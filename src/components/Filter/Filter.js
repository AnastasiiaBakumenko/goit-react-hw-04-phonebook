import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

export function Filter ({ getFilterRequest}) {


    const onChange = e =>{
        getFilterRequest(e.currentTarget.value)
    }
    
    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                
                onChange={onChange}
            />
        </Label>
    );
};

Filter.propTypes = {
    value: PropTypes.string, 
    onChange: PropTypes.func,
};