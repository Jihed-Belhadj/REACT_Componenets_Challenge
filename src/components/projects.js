import proj1 from '../images/proj1.jpg'
import proj2 from '../images/proj2.jpg'
import proj3 from '../images/proj3.jpg'
import proj4 from '../images/proj4.jpg'

function Projets() {
    const projects=[
        {name:"Project 1", url:proj1, descrp:"ceci est le projet numéro1"},
        {name:"Project 2", url:proj2, descrp:"ceci est le projet numéro2"},
        {name:"Project 3", url:proj3, descrp:"ceci est le projet numéro3"},
        {name:"Project 4", url:proj4, descrp:"ceci est le projet numéro4"}]
        

    return (
        <>  
      <section id="projects">
        <h2 className="text-important">Projects</h2>
        <div className="projects-container">
            {
            projects.map(el=>
            <div className="project-card">
            <img src={el.url} alt="project" />
            <h3>{el.name}</h3>
            <p>
              {el.descrp}
            </p>
            <p><a href="#">Github Link</a></p>
            </div>
            )}
          
            
          </div>
          </section>
          {/* 
          <div className="project-card">
            <img src={proj2} alt="project" />
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
         
          <div className="project-card">
            <img src={proj3} alt="project" />
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>
          
          <div className="project-card">
            <img src={proj4} alt="project" />
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>  
          </div> 
          */}


          </>    
    );
  }
  
  export default Projets;