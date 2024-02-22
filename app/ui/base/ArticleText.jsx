// 'use client' ;

import Link from "next/link";

export default function ArticleText({title, children, link, buttonText, target}) {
  return (
    <article className="article-text">
      <h2>
        <span className="article-text-title">
         {title} 
        </span>
      </h2>
      { children }
      <div className="article-btn-container">
        <Link target= {target} className="btn" href={ link }>
          <span></span>
          <span>
            {buttonText}
          </span>
        </Link>
      </div>
    </article>
  )
}