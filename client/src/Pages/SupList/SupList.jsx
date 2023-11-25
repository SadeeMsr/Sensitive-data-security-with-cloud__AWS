import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar';

const SupList = () => {

    const [trainerInformations, setTrainerInformations] = useState([]);


    useEffect(()=>{
        fetch('TrainerInfo.json')
        .then(res=>res.json())
        .then(data => setTrainerInformations(data));
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