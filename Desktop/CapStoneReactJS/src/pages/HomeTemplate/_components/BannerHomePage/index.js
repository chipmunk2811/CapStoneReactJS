import React from 'react'
import "./style.css";

export default function BannerHomePage() {
  return (
    <div className="elementor-container elementor-column-gap-default d-flex pt-5">
      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img alt='' width={960} height={400} src="./img/banner_1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-column elementor-col-50 elementor-top-column elementor-element" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-widget elementor-widget-image" data-element_type="widget" data-widget_type="image.default">
            <div className="elementor-widget-container">
              <img width={960} height={400} alt='' src="./img/banner_2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
