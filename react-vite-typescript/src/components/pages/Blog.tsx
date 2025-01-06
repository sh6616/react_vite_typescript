const Blog = () => {
  return (
    <div className="page-container">
      <h1>作者博客</h1>
      <div className="blog-list">
        <div className="blog-item">
          <h3>这是一篇示例博客标题</h3>
          <p>这里是博客的简短描述，您可以在这里展示博客文章的预览内容...</p>
          <a href="#" className="read-more">阅读更多</a>
        </div>
        <div className="blog-item">
          <h3>另一篇博客文章</h3>
          <p>这是另一篇博客文章的预览内容...</p>
          <a href="#" className="read-more">阅读更多</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
