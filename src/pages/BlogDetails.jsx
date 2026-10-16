import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  User,
  Folder,
  MessageSquare,
  Search,
  ArrowLeft,
  ArrowRight,
  Share2,
  Check,
  Phone,
  Mail,
  Send,
  ChevronRight,
  Home as HomeIcon
} from 'lucide-react';
import { blogsData, getBlogBySlug, getRecentBlogs, getAllCategories, getAllTags } from '../data/blogs';
import './BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find blog by slug, fallback to first blog if slug doesn't match
  const blog = getBlogBySlug(slug) || blogsData[0];

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Find previous and next blogs
  const currentIndex = blogsData.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogsData.length - 1 ? blogsData[currentIndex + 1] : null;

  // Sidebar data
  const recentBlogs = getRecentBlogs(4, blog.id);
  const categories = getAllCategories();
  const allTags = getAllTags();

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const match = blogsData.find((b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (match) {
      navigate(`/blog/${match.slug}`);
      setSearchQuery('');
    } else {
      alert(`No blogs found matching "${searchQuery}".`);
    }
  };

  // Share link copy state
  const [copied, setCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Comment Form State
  const [commentsList, setCommentsList] = useState([
    {
      id: 1,
      name: 'James Weighell',
      date: 'June 24, 2021 at 6:45 am',
      text: 'Insightful article! Digital transformation in modern services has become imperative. Thanks for sharing these valuable keys.'
    },
    {
      id: 2,
      name: 'A WordPress Commenter',
      date: 'June 24, 2021 at 8:12 am',
      text: 'Very thorough breakdown of the challenges and technology implementations. Looking forward to more posts.'
    }
  ]);

  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    website: '',
    comment: ''
  });
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentForm.name.trim() || !commentForm.comment.trim()) return;

    const newComment = {
      id: Date.now(),
      name: commentForm.name,
      date: 'Just now',
      text: commentForm.comment
    };

    setCommentsList([newComment, ...commentsList]);
    setCommentForm({ name: '', email: '', website: '', comment: '' });
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 4000);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* =========================================================================
          PAGE BANNER (Exact breadcrumbs & dark circuit theme)
          ========================================================================= */}
      <section className="blog-details-banner">
        <div className="container">
          <h1 className="banner-title">Blog Details</h1>
          <ul className="blog-details-breadcrumbs">
            <li>
              <Link to="/">
                <HomeIcon size={14} style={{ marginRight: '4px' }} />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight size={13} />
              <Link to="/#blog">Blog</Link>
            </li>
            <li>
              <ChevronRight size={13} />
              <span>{blog.category}</span>
            </li>
            <li>
              <ChevronRight size={13} />
              <span className="current-crumb">{blog.title}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* =========================================================================
          MAIN 2-COLUMN SECTION (Article on Left, Sidebar on Right)
          ========================================================================= */}
      <div className="container">
        <div className="blog-details-container">
          {/* ----------------- LEFT: MAIN ARTICLE ----------------- */}
          <main>
            <article className="blog-article-card">
              {/* Featured Image */}
              <div className="blog-article-featured">
                <img src={blog.img} alt={blog.title} />
              </div>

              <div className="blog-article-body">
                {/* Meta Row */}
                <div className="blog-article-meta">
                  <div className="blog-article-meta-item">
                    <Calendar size={15} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="blog-article-meta-item">
                    <User size={15} />
                    <span>By {blog.author}</span>
                  </div>
                  <div className="blog-article-meta-item">
                    <Folder size={15} />
                    <span>{blog.category}</span>
                  </div>
                  <div className="blog-article-meta-item">
                    <MessageSquare size={15} />
                    <span>{commentsList.length} Comments</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="blog-article-title">{blog.title}</h2>

                {/* Render Rich HTML Content */}
                <div
                  className="blog-article-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Footer Bar: Tags and Share Buttons */}
                <div className="blog-article-footer-bar">
                  <div className="blog-tags-list">
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#08203A' }}>
                      Tags:
                    </span>
                    {blog.tags.map((tag, idx) => (
                      <span key={idx} className="blog-tag-badge">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="blog-share-btns">
                    <span className="blog-share-label">Share:</span>
                    <button
                      onClick={handleCopyLink}
                      className="blog-share-icon-btn"
                      title="Copy Article Link"
                    >
                      {copied ? <Check size={16} color="#10B981" /> : <Share2 size={16} />}
                    </button>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-share-icon-btn"
                      title="Share on Twitter/X"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-share-icon-btn"
                      title="Share on LinkedIn"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blog.title + ' ' + window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blog-share-icon-btn"
                      title="Share on WhatsApp"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Author Info Box */}
                <div className="blog-author-box">
                  <div className="blog-author-avatar">N</div>
                  <div className="blog-author-info">
                    <h4>Nuventraa Team</h4>
                    <p>
                      Passionate enterprise technology architects and consultants sharing insights on digital transformation, cloud architecture, and modern product engineering.
                    </p>
                  </div>
                </div>

                {/* Previous & Next Post Navigation */}
                <div className="blog-post-navigation">
                  {prevBlog ? (
                    <Link to={`/blog/${prevBlog.slug}`} className="blog-nav-card">
                      <div className="blog-nav-thumb">
                        <img src={prevBlog.img} alt={prevBlog.title} />
                      </div>
                      <div className="blog-nav-details">
                        <div className="nav-direction">
                          <ArrowLeft size={12} /> Previous Post
                        </div>
                        <h5 className="nav-title">{prevBlog.title}</h5>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextBlog ? (
                    <Link to={`/blog/${nextBlog.slug}`} className="blog-nav-card" style={{ textAlign: 'right' }}>
                      <div className="blog-nav-details">
                        <div className="nav-direction" style={{ justifyContent: 'flex-end' }}>
                          Next Post <ArrowRight size={12} />
                        </div>
                        <h5 className="nav-title">{nextBlog.title}</h5>
                      </div>
                      <div className="blog-nav-thumb">
                        <img src={nextBlog.img} alt={nextBlog.title} />
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>

                {/* Comments Section */}
                <section className="blog-comments-section">
                  <h3 className="blog-comments-title">
                    Comments ({commentsList.length})
                  </h3>

                  <div className="blog-comments-list">
                    {commentsList.map((c) => (
                      <div key={c.id} className="blog-comment-item">
                        <div className="blog-comment-avatar">
                          {c.name.charAt(0)}
                        </div>
                        <div className="blog-comment-content">
                          <h5 className="comment-author-name">{c.name}</h5>
                          <div className="comment-date">{c.date}</div>
                          <p className="comment-text">{c.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Leave a Comment Form */}
                  <div className="blog-comment-form-wrap">
                    <h4 className="blog-comment-form-title">Leave A Comment</h4>
                    {commentSuccess && (
                      <div style={{ background: '#DCFCE7', color: '#166534', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.88rem' }}>
                        ✓ Thank you! Your comment has been posted successfully.
                      </div>
                    )}
                    <form onSubmit={handleCommentSubmit}>
                      <div className="blog-form-grid">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          className="blog-input-field"
                          value={commentForm.name}
                          onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email *"
                          className="blog-input-field"
                          value={commentForm.email}
                          onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        />
                      </div>
                      <input
                        type="url"
                        placeholder="Website URL (optional)"
                        className="blog-input-field"
                        style={{ marginBottom: '1rem' }}
                        value={commentForm.website}
                        onChange={(e) => setCommentForm({ ...commentForm, website: e.target.value })}
                      />
                      <textarea
                        required
                        rows="5"
                        placeholder="Your Comment *"
                        className="blog-textarea-field"
                        style={{ marginBottom: '1.25rem' }}
                        value={commentForm.comment}
                        onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                      />
                      <button type="submit" className="blog-submit-btn">
                        <span>Post Comment</span>
                        <Send size={15} />
                      </button>
                    </form>
                  </div>
                </section>

              </div>
            </article>
          </main>

          {/* ----------------- RIGHT: SIDEBAR ----------------- */}
          <aside className="blog-sidebar">
            {/* Widget 1: Search */}
            <div className="blog-widget">
              <h4 className="blog-widget-title">Search</h4>
              <form onSubmit={handleSearch} className="blog-search-form">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="blog-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="blog-search-btn" aria-label="Submit search">
                  <Search size={18} />
                </button>
              </form>
            </div>

            {/* Widget 2: Recent Posts */}
            <div className="blog-widget">
              <h4 className="blog-widget-title">Recent Posts</h4>
              <div className="blog-recent-list">
                {recentBlogs.map((item) => (
                  <Link key={item.id} to={`/blog/${item.slug}`} className="blog-recent-item">
                    <div className="blog-recent-thumb">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="blog-recent-details">
                      <div className="recent-date">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                      </div>
                      <h5 className="recent-title">{item.title}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Widget 3: Categories */}
            <div className="blog-widget">
              <h4 className="blog-widget-title">Categories</h4>
              <ul className="blog-categories-list">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/blog/${recentBlogs[0]?.slug || blog.slug}`}
                      className="blog-category-link"
                    >
                      <span>{cat.name}</span>
                      <span className="blog-category-count">({cat.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Widget 4: Popular Tags */}
            <div className="blog-widget">
              <h4 className="blog-widget-title">Popular Tags</h4>
              <div className="blog-sidebar-tags">
                {allTags.map((tag, idx) => (
                  <span key={idx} className="blog-tag-badge">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Widget 5: Help & Consultation Box */}
            <div className="blog-cta-widget">
              <h3>Need Any Help?</h3>
              <p>Consult our IT solutions &amp; enterprise automation architects today.</p>
              <a href="tel:+916370861668" className="blog-cta-phone">
                <Phone size={16} />
                <span>+91-6370861668</span>
              </a>
              <Link to="/contact" className="blog-cta-btn">
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
