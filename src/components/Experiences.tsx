import React from "react";
import { Badge, Container } from "react-bootstrap";

const Experiences = () => {
  const expArray = [
    {
      id: 1,
      title: "Senior Web Developer",
      date: "December 2015 - Present",
      company: "netflix",
      color: "danger",
      desc: "Thundercats cray crucifix, williamsburg migas gastropub hexagon jean shorts kombucha sustainable coloring book jean shorts kombucha sustainable coloring book.",
    },
    {
      id: 2,
      title: "Web Developer",
      date: "July 2013 - December 2015",
      company: "samsung",
      color: "info",
      desc: "Air plant cliche tilde jean shorts franzen gentrify chillwave. Hella dreamcatcher +1 jianbing kickstarter beard. You probably haven't heard of them offal deep v green juice You probably haven't heard of them offal deep v green juice.",
    },
    {
      id: 3,
      title: "Junior Web Developer",
      date: "August 2008 - July 2013",
      company: "apple",
      color: "secondary",
      desc: "Cronut chambray mustache brooklyn shaman gastropub freegan letterpress, dreamcatcher plaid drinking vinegar dreamcatcher plaid drinking vinegar.",
    },
  ];
  return (
    <section id="experiences">
      <Container>
        <h2 className="fw-bold text-cyan-400 mt-5 mb-4">Experiences</h2>
        {expArray.map((exp) => {
          const { id, title, date, company, color, desc } = exp;
          return (
            <article className="my-4" key={id}>
              <div className="exp_heading d-lg-flex justify-content-lg-between ">
                <h3 className="exp_heading_head fs-1">{title}</h3>
                <p className="text-cyan-700 fs-5">{date}</p>
              </div>
              <div
                className={`exp_company bg-${color} bg-gradient d-inline-block py-1 px-2 rounded text-uppercase fw-bold text-white`}
              >
                <span className="exp_company_name">{company}</span>
              </div>
              <p className="lead mt-2 mb-4 exp_company_desc">{desc}</p>
            </article>
          );
        })}
      </Container>
    </section>
  );
};

export default Experiences;
