/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

// export const Blog = ({ exp, skill, proyect }) => {
export const Skill = ({}) => {
  const navigate = useNavigate();

  return (
    <div>
      <section class="skills">
        <div class="content">
          <div class="development-wrapper">
            <h2 class="development-title">Skills</h2>
            <ul class="skills-bar-container">
              <li>
                <div class="progressbar-title">
                  <h3>HTML5</h3>
                  <span class="percent" id="html-pourcent"></span>
                </div>
                <div class="bar-container" data-percent="95">
                  <span class="progressbar" id="progress-html"></span>
                </div>
              </li>
              <li>
                <div class="progressbar-title">
                  <h3>CSS / SASS</h3>
                  <span class="percent" id="css-pourcent"></span>
                </div>
                <div class="bar-container" data-percent="85">
                  <span class="progressbar" id="progress-css"></span>
                </div>
              </li>
              <li>
                <div class="progressbar-title">
                  <h3>JavaScript / jQuery</h3>
                  <span class="percent" id="javascript-pourcent"></span>
                </div>
                <div class="bar-container" data-percent="80">
                  <span class="progressbar" id="progress-javascript"></span>
                </div>
              </li>
              <li>
                <div class="progressbar-title">
                  <h3>PHP</h3>
                  <span class="percent" id="php-pourcent"></span>
                </div>
                <div class="bar-container" data-percent="65">
                  <span class="progressbar" id="progress-php"></span>
                </div>
              </li>
              <li>
                <div class="progressbar-title">
                  <h3>AngularJS</h3>
                  <span class="percent" id="angular-pourcent"></span>
                </div>
                <div class="bar-container" data-percent="70">
                  <span class="progressbar" id="progress-angular"></span>
                </div>
              </li>
            </ul>
          </div>
          <div class="tools-knowledge-wrapper">
            <div class="tools-wrapper">
              <h2 class="title">Tools</h2>
              <ul class="tools">
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Photoshop
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Adobe Illustrator
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Sublime text
                </li>
              </ul>
            </div>
            <div class="knowledge-wrapper">
              <h2 class="title">Knowledge</h2>
              <ul class="knowledge">
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Wireframing
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  Responsive design
                </li>
                <li>
                  <i class="fa fa-check" aria-hidden="true"></i>
                  ...
                </li>
              </ul>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="clear"></div>
      </section>
      <section class="resume">
        <div class="content">
            <a href="#" target="_blank">
            <div class="btn-resume">
                <i class="fa fa-download fa-2x" aria-hidden="true"></i>
                <span>Download my resume</span>
            </div>
            </a>
        </div>
    </section>
    </div>
  );
};