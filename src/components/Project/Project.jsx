import React , {useEffect} from 'react'
import "./Project.css";
import ProjectTest from "/public/projectImages/netflix_clone/netflix-home.png"
import Aos from 'aos';
function Project({project}) {

    useEffect(() => {
        Aos.init({duration: 1500})
        return () => {
            // cleanup
        };
    }, []);


  return (
    <>
        <a href={project.link} data-aos={project.animation} target="blank" className="container project" id="project-1">
          <div className="project-img project-container-upper">
            <img src={project.image} alt="Project demo" />
          </div>
          <div className="project-footer">
            <p>{project.name}</p>
          </div>
        </a>
    </>
  )
}

export default Project