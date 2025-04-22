const SocialButton = ({ title, link, buttonColor }) => {
  return (
    <a className={`btn btn-${buttonColor}`} href={link} target="_blank">
      {title}
    </a>
  );
};

export default SocialButton;
