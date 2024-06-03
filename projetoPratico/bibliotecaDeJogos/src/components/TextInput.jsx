import PropTypes from "prop-types";

TextInput.propTypes = {
    label: PropTypes.string,
    atributesValue: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({ label, atributesValue, value, setValue }) {
    return (
        <div>
            <label htmlFor={atributesValue}>{label}</label>
            <input 
                type="text"
                name={atributesValue} 
                id={atributesValue} 
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}