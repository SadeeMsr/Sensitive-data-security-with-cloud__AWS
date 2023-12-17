import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';

const TranieeSub = () => {

    const [tranieeSubmissions, setTranieeSubmissions] = useState([]);

    let isApproved = false;

   


    useEffect(() => {
        fetch('TranieeSub.json')
            .then(res => res.json())
            .then(data => setTranieeSubmissions(data));
    }, [])

    return (
        <div>

            <Navbar></Navbar>

            <div>
                <div className="overflow-x-auto">
                  
                        <table className="table table-xs table-pin-rows table-pin-cols">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Doctor ID</th>
                                    <th>Patient Name</th>
                                    <th>Patient ID</th>
                                    <th>Treatment</th>
                                    <th>History</th>
                                    <th>Doctor's Reflection</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tranieeSubmissions.map((submission, index) => (
                                    <tr key={submission.id}>
                                        <th>{index + 1}</th>
                                        <td>{submission.doctorID}</td>
                                        <td>{submission.patientName}</td>
                                        <td>{submission.patientID}</td>
                                        <td>{submission.diagnosisAndTreatment}</td>
                                        <td>{submission.medicalHistoryUpdates}</td>
                                        <td>{submission.personalReflections}</td>
                                        <td>{submission.timeOfSubmission}</td>
                                        <td>
                                            {

                                                isApproved? <>

                                                <button>Approved</button>
                                                </>
                                                :
                                                <>
                                                <button className='border rounded p-1 bg-blue-600 text-white'>Pending</button>
                                                </>

                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                  
                </div>

            </div>

        </div>
    );
};

export default TranieeSub;