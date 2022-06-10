const doctors = [
    { id: 1, name: "Dr. Steve", specialty: "Cancer" },
    { id: 2, name: "Dr. Susan", specialty: "Asthma" },
    { id: 3, name: "Dr. John", specialty: "Arthritis" },
    { id: 4, name: "Dr. Ellen", specialty: "Eye" }
];

const patients = [
    { id: 1, name: "John Doe", illness: "Asthma" },
    { id: 2, name: "Mike Jones", illness: "Cancer" },
    { id: 3, name: "Steven Stevenson", illness: "Arthritis" },
    { id: 4, name: "Mary Louise Streep", illness: "Cancer" },
    { id: 5, name: "Tony Soprano", illness: "Asthma" }
]


/*
    Define your functions here
*/
const createAppointment = (doctor, patient) => ({ doctor, patient })
const logAppointments = (appts) => console.log(appts)

/*
    Write your logic for identifying the match between
    doctors and patients here
*/
const appointmentMatcher = () => {
    const appointments = []

    doctors.forEach(doctor => {
        // Determine if current doctor has any patients this week
        const foundPatients = patients.filter(patient => patient.illness === doctor.specialty)

        // For the current doctor, add the appointments, or time-off message to appointments array
        appointments.push(
            foundPatients.length
                ? foundPatients.map(patient => createAppointment(doctor.name, patient.name))
                : `${doctor.name} has no appointments this week`
        )
    })

    return appointments
}

const appointments = appointmentMatcher()
logAppointments(appointments)









