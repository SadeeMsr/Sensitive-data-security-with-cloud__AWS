import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';

const YourSubmission = () => {

    const [submissions, setSubmissions] = useState([]);


    useEffect(() => {
        fetch('YourSubmission.json')
            .then(res => res.json())
            .then(data => setSubmissions(data));
    }, [])
    return (
        <div>

            <Navbar></Navbar>

            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Patient Name</th>
                            <th>Patient ID</th>
                            <th>Treatment</th>
                            <th>History</th>
                            <th>My Reflection</th>
                            <th>Date</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission, index) => (
                            <tr key={submission.id}>
                                <th>{index + 1}</th>
                                <td>{submission.patientName}</td>
                                <td>{submission.patientID}</td>
                                <td>{submission.diagnosisAndTreatment}</td>
                                <td>{submission.medicalHistoryUpdates}</td>
                                <td>{submission.personalReflections}</td>
                                <td>{submission.timeOfSubmission}</td>
                                
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

           

        </div>
    );
};

export default YourSubmission;