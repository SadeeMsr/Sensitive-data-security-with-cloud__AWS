import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';


const SupList = () => {

    const [trainerInformations, setTrainerInformations] = useState([]);
    const [approvedSubmissions, setApprovedSubmissions] = useState([]);


    useEffect(() => {
        fetch('TrainerInfo.json')
            .then(res => res.json())
            .then(data => setTrainerInformations(data));
    }, [])
    
    useEffect(() => {
        fetch('ApprovedSub.json')
            .then(res => res.json())
            .then(data => setApprovedSubmissions(data));
    }, [])

    const CityGeneralHospital = approvedSubmissions.filter(item => item.category === 'City General Hospital');
    const CommunityMedicalCenter = approvedSubmissions.filter(item => item.category === 'Community Medical Center');
    const RegionalHealthCenter = approvedSubmissions.filter(item => item.category === 'Regional Health Center');
    const MetropolitanHospital = approvedSubmissions.filter(item => item.category === 'Metropolitan Hospital');
    const SuburbanHealthClinic = approvedSubmissions.filter(item => item.category === 'City General Hospital');

    return (
        <div>

            <Navbar></Navbar>

            <div>
                <h1 className='text-center text-3xl'>Hospital Specific Info</h1>
                <h1>number of Approved submission: {approvedSubmissions.length}</h1>
               
            </div>

            <h1 className="text-4xl text-center mb-4">System Population OverView</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-xs table-pin-rows table-pin-cols">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Trainer Name</th>
                                <th>Number Of Trainees</th>
                                <th>Hospital Name</th>
                                <th>Hospital Location</th>
                                <th>Total Number of Patients</th>

                            </tr>
                        </thead>
                        <tbody>
                            {trainerInformations.map((trainerInformation, index) => (
                                <tr key={trainerInformation.id}>
                                    <th>{index + 1}</th>
                                    <td>{trainerInformation.trainerName}</td>
                                    <td>{trainerInformation.numberOfTrainees}</td>
                                    <td>{trainerInformation.hospitalName}</td>
                                    <td>{trainerInformation.hospitalLocation}</td>
                                    <td>{trainerInformation.numberOfTotalPatients}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SupList;