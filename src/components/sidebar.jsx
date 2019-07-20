import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div>
					<nav
						href="#navbar"
						className="js-colorlib-nav-toggle colorlib-nav-toggle"
						data-toggle="collapse"
						data-target="#navbar"
						aria-expanded="false"
						aria-controls="navbar"
					>
						<i />
					</nav>
					<aside
						id="colorlib-aside"
						role="complementary"
						className="border js-fullheight"
					>
						<div className="text-center">
							<div
								className="author-img"
								style={{ backgroundImage: "url(images/about.jpg)" }}
							/>
							<h1 id="colorlib-logo">
								<a href="index.html">Bhavika Bhanushali</a>
							</h1>
							<span className="position">
								<a href="#">Web Developer & Analyst</a> in USA
							</span>
							<span className="email">
								<i className="icon-mail" />{" "}
								<a
									classNamae="emaillink"
									href="mailto:bhavika@csu.fullerton.edu"
								>
									bhavika@csu.fullerton.edu
								</a>
							</span>
						</div>
						<nav id="colorlib-main-menu" role="navigation" className="navbar">
							<div id="navbar" className="collapse">
								<ul>
									<li className="active">
										<a href="#home" data-nav-section="home">
											Home
										</a>
									</li>
									<li>
										<a href="#about" data-nav-section="about">
											About
										</a>
									</li>
									<li>
										<a href="#skills" data-nav-section="skills">
											Skills
										</a>
									</li>
									<li>
										<a href="#education" data-nav-section="education">
											Education
										</a>
									</li>
									<li>
										<a href="#experience" data-nav-section="experience">
											Experience
										</a>
									</li>
									<li>
										<a href="#work" data-nav-section="work">
											Work
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<nav id="colorlib-main-menu">
							<div className="icon-menu">
								<ul>
									<li>
										<a
											href="http://www.facebook.com/bhavika.bhanushali.37"
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="icon-facebook2" />
										</a>
									</li>
									<li>
										<a
											href="http://www.linkedin.com/in/bhavikabhanushali"
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="icon-linkedin2" />
										</a>
									</li>
									<li>
										<a
											href="http://www.github.com/BhavikaBhanushali"
											rel="noopener noreferrer"
											target="_blank"
										>
											<i className="icon-github" />
										</a>
									</li>
									<li>
										<a
											href="http://www.instagram.com/capricious_bhavi"
											rel="noopener noreferrer"
										>
											<i className="icon-instagram" />
										</a>
									</li>
								</ul>
							</div>
						</nav>
						<div className="colorlib-footer">
							<p>
								<small>
									Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
									<i className="icon-beer" aria-hidden="true" />
								</small>
							</p>
						</div>
					</aside>
				</div>
			</div>
		);
	}
}
