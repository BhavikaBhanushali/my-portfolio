import React, { Component } from "react";

export default class Education extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-education" data-section="education">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">Education</span>
								<h2 className="colorlib-heading animate-box">Education</h2>
							</div>
						</div>
						<div className="row">
							<div
								className="col-md-12 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<div className="fancy-collapse-panel">
									<div
										className="panel-group"
										id="accordion"
										role="tablist"
										aria-multiselectable="true"
									>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingOne">
												<h4 className="panel-title">
													<a
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseOne"
														aria-expanded="true"
														aria-controls="collapseOne"
													>
														Master of Science in Computer Science
													</a>
												</h4>
											</div>
											<div
												id="collapseOne"
												className="panel-collapse collapse in"
												role="tabpanel"
												aria-labelledby="headingOne"
											>
												<div className="panel-body">
													<div className="row">
														<div className="col-md-6">
															<p>
																California State University, Fullerton
																<br />
																August 2017 - May 2019
																<br />
																GPA : 3.76 / 4.0
															</p>
														</div>
														<div className="col-md-6">
															<p>
																Related Courses :
																<ul>
																	<li>Data Structures and Algorithms</li>
																	<li>
																		Web Front-End Engineering for Internet
																		Applications
																	</li>
																	<li>
																		Web Back-End Engineering for Enterprise
																		Applications
																	</li>
																	<li>Software Design and Architecture</li>
																	<li>Advance Database Management Systems</li>
																</ul>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingTwo">
												<h4 className="panel-title">
													<a
														className="collapsed"
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseTwo"
														aria-expanded="false"
														aria-controls="collapseTwo"
													>
														Bachelors of Engineering in Information Technology
													</a>
												</h4>
											</div>
											<div
												id="collapseTwo"
												className="panel-collapse collapse"
												role="tabpanel"
												aria-labelledby="headingTwo"
											>
												<div className="panel-body">
													<div className="row">
														<div className="col-md-6">
															<p>
																K. J. Somaiya Institute of Engineering and
																Information Technology
																<br />
																(University of Mumbai)
																<br />
																August 2012 - May 2016
																<br />
																CGPA : 7.44 / 10
															</p>
														</div>
														<div className="col-md-6">
															<p>
																Related Courses :
																<ul>
																	<li>Big Data Analytics</li>
																	<li>Operating Systems</li>
																	<li>Database Management Systems</li>
																	<li>Web Programming</li>
																	<li>
																		Data Minning and Business Intelligence
																	</li>
																</ul>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div
												className="panel-heading"
												role="tab"
												id="headingFive"
											>
												<h4 className="panel-title">
													<a
														className="collapsed"
														data-toggle="collapse"
														data-parent="#accordion"
														href="#collapseFive"
														aria-expanded="false"
														aria-controls="collapseFive"
													>
														High School Secondary Education
													</a>
												</h4>
											</div>
											<div
												id="collapseFive"
												className="panel-collapse collapse"
												role="tabpanel"
												aria-labelledby="headingFive"
											>
												<div className="panel-body">
													<div className="row">
														<div className="col-md-6">
															<p>
																K. J. Somaiya College of Science and Commerce
																<br />
																July 2010 - May 2012
															</p>
														</div>
														<div className="col-md-6">
															<p>
																Related Courses :
																<ul>
																	<li>Physics</li>
																	<li>Chemistry</li>
																	<li>Mathematics</li>
																	<li>Biology</li>
																</ul>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
