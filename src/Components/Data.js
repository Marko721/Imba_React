const Data = {
  users: [
    {
      id: "1",
      Role: "admin",
      Name: "Marko",
      Lastname: "Popovic",
      Password: "3r4fk4g5904t",
      Email: "pop@gmail.com",
      Phone: "+1243303958",
      Jobs_applied: [13, 123, 442, 43, 223],
    },
  ],

  jobs: [
    {
      id: "1",
      Facility: "Johns Hopkins Bayview Medical Center",
      Description: "Emergency Room RN Nights",
      Long_Description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aliquid rem itaque, maiores pariatur ad possimus sit vero error incidunt doloremque consectetur, perspiciatis omnis cum corporis voluptatem, natus enim eveniet?",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Proffesion: "Nurse",
      Specialty: "Oncology",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
      License: "MA License",
      Certification: "BLS Certification",
      Experience: "2 Years of RN Experience",
      Specialty_Experience: "1 Year of Oncology Specialty",
    },
  ],

  userJobs: [
    {
      id: 1,
      User_id: 32,
      Job_id: 143,
      Date: "Decembar 3, 2021 - 14:23",
    },
  ],
};

export default Data;
