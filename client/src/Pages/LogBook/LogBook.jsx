import React from 'react';
import Navbar from '../Shared/Navbar';



const LogBook = () => {


    const handleLogBook = e => {
        e.preventDefault();


        const form = new FormData(e.currentTarget);
        const DoctorID = form.get('DoctorID');
        const PatientName = form.get('PatientName');
        const PatientRecordNumber = form.get('recordNumber');
        const Date = form.get('Date');
        const DiagnosisAndTreatment = form.get('DiagnosisAndTreatment');
        const ProceduresAndExaminations = form.get('ProceduresAndExaminations');
        const FollowUpPlans = form.get('FollowUpPlans');
        const MedicalHistoryUpdates = form.get('MedicalHistoryUpdates');
        const PersonalReflections = form.get('PersonalReflections');


        const newSubmission = { DoctorID, PatientName, PatientRecordNumber, Date, DiagnosisAndTreatment, ProceduresAndExaminations, FollowUpPlans, MedicalHistoryUpdates, PersonalReflections }
        console.log(newSubmission);
    }
    return (
        <div>

            <Navbar></Navbar>


            <div className="hero min-h-screen  w-full bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log Submission</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleLogBook} className="card-body">
                            <div className="form-control flex-col lg:flex-row gap-2 justify-center">
                                <label className="label">
                                    <span className="label-text">Doctor's ID:</span>
                                </label>
                                <input type="text" placeholder="Doctor ID" name='DoctorID' className="input input-bordered" required />


                                <label className="label">
                                    <span className="label-text">Patient Name:</span>
                                </label>
                                <input type="text" placeholder="Patient name" name='PatientName' className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Patient Record Number:</span>
                                </label>
                                <input type="text" placeholder="record number" name='recordNumber' className="input input-bordered" required />

                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='Date' className="input input-bordered" required />



                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Diagnosis and Treatment:</span>
                                </label>
                                <textarea type="text" placeholder="Description" name='DiagnosisAndTreatment' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Procedures and Examinations:</span>
                                </label>
                                <textarea type="text" placeholder="Description" name='ProceduresAndExaminations' className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Follow-up Plans:</span>
                                </label>
                                <textarea type="text" placeholder="Description" name='FollowUpPlans' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Medical History Updates:</span>
                                </label>
                                <textarea type="text" placeholder="Description" name='MedicalHistoryUpdates' className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Personal Reflections:</span>
                                </label>
                                <textarea type="text" placeholder="Description" name='PersonalReflections' className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LogBook;