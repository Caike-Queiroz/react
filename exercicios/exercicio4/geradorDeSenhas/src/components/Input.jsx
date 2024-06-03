export default function Input({passwordSize, handlePasswordSize}) {
    return (
        <input 
            type="number" 
            id="passwordSize" 
            min={1}
            max={25}
            value={passwordSize}
            onChange={handlePasswordSize} />
    )
}