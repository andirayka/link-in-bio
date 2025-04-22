const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="card bg-base-100 shadow-md transition-transform hover:scale-105">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <a href={link} className="btn btn-sm btn-primary" target="_blank">
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
