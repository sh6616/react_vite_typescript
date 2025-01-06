const About = () => {
  return (
    <div className="page-container">
      <h1>关于作者</h1>
      <div className="about-content">
        <div className="author-info">
          <img src="https://via.placeholder.com/150" alt="Author" className="author-avatar" />
          <h2>作者名字</h2>
          <p className="author-title">全栈开发工程师</p>
        </div>
        <div className="author-description">
          <h3>个人简介</h3>
          <p>这里是关于作者的详细介绍，包括专业背景、技能特长等信息...</p>
          <h3>联系方式</h3>
          <ul className="contact-list">
            <li>Email: example@email.com</li>
            <li>GitHub: github.com/example</li>
            <li>LinkedIn: linkedin.com/in/example</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
