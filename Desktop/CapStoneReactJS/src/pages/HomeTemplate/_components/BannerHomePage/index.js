import React from 'react'
import "./style.css";

export default function BannerHomePage() {
  return (
    <div className="elementor-container elementor-column-gap-default d-flex pt-5">
      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img alt='' width={960} height={400} src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_1.jpg" className="attachment-large size-large" loading="lazy" srcSet="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_1.jpg 960w, http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_1-300x125.jpg 300w, http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_1-768x320.jpg 768w" sizes="(max-width: 960px) 100vw, 960px" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img width={960} height={400} alt='' src="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_2.jpg" className="attachment-large size-large" loading="lazy" srcSet="http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_2.jpg 960w, http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_2-300x125.jpg 300w, http://demo.amytheme.com/movie/demo/elementor-book-tickets/wp-content/uploads/sites/12/2022/05/banner_2-768x320.jpg 768w" sizes="(max-width: 960px) 100vw, 960px" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
