import React from 'react';


function Projects() {
    return (
        <section id="projs">
            <h2>My Projects</h2>
            <div className="blueIT">
                <a className="github" href="https://github.com/Nesnah1307/blue-it"></a>
                <a className="deployed" href="https://blue-it-dinosaur.herokuapp.com/">BlueIT</a>
            </div>
            
            <div className="README">
                <a className="github" href="https://github.com/Nesnah1307/pro-readme-generator">Pro README Generator</a>
            </div>
            
            <div className="killer">
            <a className="github" href="https://github.com/Nesnah1307/time-killer-3000"></a>
            <a className="deployed" href="https://nesnah1307.github.io/time-killer-3000/">Time Killer 3000</a>
            </div>

            <div className="budget">
                <a className="github" href="https://github.com/Nesnah1307/ghost-pepper-ranch"></a>
                <a className="deployed" href="https://shrouded-garden-23181.herokuapp.com/">Budget Tracker</a>
            </div>

            <div className="spoiled">
                <a className="github" href="https://github.com/Nesnah1307/spoiled-milk"></a>
                <a className="deployed" href="https://dry-inlet-29870.herokuapp.com/">Spoiled Milk</a>
            </div>
        </section>
    )

}

export default Projects;