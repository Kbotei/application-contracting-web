function StateDropDown({selectedValue, onChange}) {
    const states = [
        { value: "AK", text: "Alaska" },
        { value: "AL", text: "Alabama" },
        { value: "NY", text: "New York" },
        { value: "TN", text: "Tennessee" },
    ]

    return (
        <>
        <select value={selectedValue} onChange={e => onChange(e.target.value)} className="select select-lg">
            <option value="">State</option>

            {states.map(state => (
                <option value={state.value}>{state.text}</option>
            ))}
        </select>
        </>
    )

}

export default StateDropDown