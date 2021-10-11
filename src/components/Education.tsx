import React from "react";
import { Container } from "react-bootstrap";

const Education = () => {
  const eduArray = [
    {
      id: 1,
      uni: "Massachusetts Institute of Technology",
      date: "May 2006 - May 2008",
      grade: "Master of Science",
      major: "Mechanical Engineering - FE-Analysis",
      GPA: 3.23,
    },
    {
      id: 2,
      uni: "Korea Advanced Institute of Science and Technology",
      date: "August 2002 - May 2006",
      grade: "Bachelor of Science",
      major: "Mechanical Engineering",
      GPA: 3.46,
    },
  ];
  return (
    <section id="education">
      <Container>
        <h2 className="fw-bold text-cyan-400 mt-5 mb-4">Education</h2>
        {eduArray.map((edu) => {
          const { id, uni, date, grade, major, GPA } = edu;
          return (
            <article className="my-4" key={id}>
              <div className="edu_heading d-lg-flex justify-content-lg-between ">
                <h3 className="edu_heading_head fs-1">{uni}</h3>
                <p className="text-cyan-700 fs-5">{date}</p>
              </div>

              <p className="lead edu_company_desc">{grade}</p>
              <p className="lead edu_company_desc">{major}</p>
              <p className="lead edu_company_desc">GPA: {GPA}</p>
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export default Education;
