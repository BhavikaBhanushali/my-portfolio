import React, { Component } from "react";

export default class Experience extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="experience">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">Experience</span>
								<h2 className="colorlib-heading animate-box">
									Work Experience
								</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInLeft"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-1">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													<a href="#">Programmer - Student Assistant</a>{" "}
													<span>March 2019 - May 2019</span>
												</h2>
												<ul>
													<li>
														Collaborated with a team on various development and
														data analysis projects.
													</li>
													<li>
														Designed different VBA Macros to automate data
														related tasks include everyday Excel task to clean
														up and format data.
													</li>
													<li>
														Performed data scraping, data cleansing using SPSS
														and developed a dashboard using Power BI for
														interactive visualizations and analysis.
													</li>
													<li>
														Developed Tableau visualizations and dashboards
														using Tableau Desktop.
													</li>
												</ul>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInRight"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-2">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													<a href="#">Graduate Student Assistant</a>{" "}
													<span>August 2018 - May 2019</span>
												</h2>
												<ul>
													<li>
														Manage and update the department's website using
														HTML, CSS, JavaScript and worked with interface
														designers and layout editors to create a better user
														interface using the latest technologies in web
														development.
													</li>
													<li>
														Retrieved data from multiple sources and produced
														reports to help the engineering team in developing
														AI Chat Bot application.
													</li>
													<li>
														Assisted head of the department for generating
														various codebooks for qualitative analysis.
													</li>
												</ul>
											</div>
										</div>
									</article>
									<article
										className="timeline-entry animate-box"
										data-animate-effect="fadeInLeft"
									>
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-3">
												<i className="icon-pen2" />
											</div>
											<div className="timeline-label">
												<h2>
													<a href="#">Joint Associate Analyst</a>{" "}
													<span>June 2016 - August 2016</span>
												</h2>
												<ul>
													<li>
														Contributed to front-end and database development of
														web applications.
													</li>
													<li>
														Analyzed the data and developed a dynamic web-based
														Dashboard using HTML, CSS, jQuery, JSON, SQL for
														data analysis which helped the user to Review the
														products Estimated Sales Value and Targeted Sales
														Value.
													</li>
													<li>
														Conducted periodical assessments to check the
														functioning of systems/applications and solicited
														feedback from users regarding the same.
													</li>
												</ul>
											</div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
