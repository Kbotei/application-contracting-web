
import { useState } from 'react'
import StateDropdown from '../../components/state-dropdown.jsx'

function ApplicantContactInfo() {
    const [selectedState, setSelectedState] = useState("")

    return (
        <>
        <form>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Applicant Contact Information</legend>

                <label class="floating-label py-2">
                    <input type="text" placeholder="First Name" className="input input-lg" />
                    <span>First Name</span>
                </label>

                <label class="floating-label py-2">
                    <input type="text" placeholder="Last Name" className="input input-lg" />
                    <span>Last Name</span>
                </label>

                <label className="floating-label py-2">
                    <input type="text" placeholder="Email" className="input input-lg" />
                    <span>Email</span>
                </label>

                <label className="floating-label py-2">
                    <input type="text" placeholder="Phone" className="input input-lg" />
                    <span>Phone</span>
                </label>

                <label className="floating-label py-2">
                    <input type="text" placeholder="Street Address" className="input input-lg" />
                    <span>Street Address</span>
                </label>

                <label className="floating-label py-2">
                    <input type="text" placeholder="City" className="input input-lg" />
                    <span>City</span>
                </label>

                <label className="label py-2">
                    <StateDropdown selectedState={selectedState} onChange={setSelectedState} />
                </label>

                <label className="floating-label py-2">
                    <input type="text" placeholder="Zip Code" className="input input-lg" />
                    <span>Zip Code</span>
                </label>
            </fieldset>
            </form>
        </>
    )
}

export default ApplicantContactInfo