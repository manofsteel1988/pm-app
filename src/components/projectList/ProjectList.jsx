import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";

import "./ProjectList.css";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            {project.assignedUsersList.map((user) => (
              <ul>
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              </ul>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
