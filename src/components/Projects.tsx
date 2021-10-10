import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ProjectModal from "./ProjectModal";

interface IProjects {
  allFile: {
    nodes: [{ id: string; childImageSharp: any }];
  };
}

const Projects = () => {
  const {
    allFile: { nodes },
  }: IProjects = useStaticQuery(query);

  const projectArray = [
    {
      id: 1,
      title: "Stripe-like App",
      desc: "Cold-pressed enamel pin skateboard jean shorts austin air plant lumbersexual af. Four loko austin copper mug cronut. Banh mi skateboard XOXO disrupt meggings. Blue bottle affogato selfies freegan before they sold out. Chia truffaut plaid, umami jean shorts subway tile la croix fingerstache mustache lomo.",
    },
    {
      id: 2,
      title: "Shopify-like App",
      desc: "I'm baby lo-fi blog woke 90's. VHS bicycle rights pabst knausgaard migas mustache aesthetic butcher banh mi hot chicken farm-to-table 90's bushwick wolf narwhal. Swag mustache vinyl intelligentsia wayfarers, butcher humblebrag pour-over lomo. Poutine unicorn roof party, fam sriracha pinterest activated charcoal tattooed meh semiotics. Kitsch meggings cronut post-ironic.",
    },
    {
      id: 3,
      title: "Whatsapp-like App",
      desc: "Hell of messenger bag tumeric mixtape woke squid normcore tacos semiotics occupy try-hard XOXO. Slow-carb schlitz selfies, pok pok tattooed farm-to-table dreamcatcher chicharrones food truck letterpress. Hammock offal pabst affogato, kogi pitchfork ethical kale chips vaporware tumeric raw denim DIY synth jean shorts. Edison bulb authentic chicharrones craft beer, typewriter flexitarian poke pork belly everyday carry iceland sartorial vegan shoreditch lomo before they sold out.",
    },
    {
      id: 4,
      title: "Netflix-like App",
      desc: "Trust fund fashion axe keffiyeh, wolf air plant +1 tousled YOLO raw denim ugh hammock iceland pug austin man braid. Pitchfork cronut shabby chic, migas fanny pack brunch occupy adaptogen umami bicycle rights cardigan. 3 wolf moon paleo vaporware chillwave four loko salvia. Semiotics cred echo park squid.",
    },
  ];

  return (
    <section id="projects">
      <Container>
        <h2 className="fw-bold text-cyan-400 mt-5 mb-4">Projects</h2>
        <Row className="g-4">
          {projectArray.map((project) => {
            const { id, title, desc } = project;
            return (
              <ProjectModal
                key={id}
                title={title}
                pic={nodes.find((_, index) => {
                  return index + 1 === id;
                })}
                desc={desc}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export const query = graphql`
  {
    allFile(
      filter: {
        relativePath: { regex: "/projects/" }
        publicURL: { regex: "/png/" }
      }
    ) {
      totalCount
      nodes {
        id
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default Projects;
