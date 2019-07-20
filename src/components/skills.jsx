import React, { Component } from "react";

export default class Skills extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-skills" data-section="skills">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">Skills</span>
								<h2 className="colorlib-heading">
									Here are some of my expertise
								</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-6 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Programming Languages</h3>
										<table className="table table-borderless">
											<tbody>
												<tr>
													<td>C</td>
													<td>C++</td>
													<td>Java</td>
													<td>JavaScript</td>
												</tr>
												<tr>
													<td>HTML5</td>
													<td>CSS3</td>
													<td>Python</td>
													<td>JSON</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-md-6 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<i className="icon-data" />
									</span>
									<div className="desc">
										<h3>Database and Big Data Systems</h3>
										<table className="table table-borderless">
											<tbody>
												<tr>
													<td>MySQL</td>
													<td>Microsoft SQL Server</td>
													<td>SQLyog</td>
													<td>HADOOP</td>
												</tr>
												<tr>
													<td>SQLite</td>
													<td>MongoDB</td>
													<td>Cassendra</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-md-6 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Framework, Libraries, and Platforms</h3>
										<table className="table table-borderless">
											<tbody>
												<tr>
													<td>ReactJS</td>
													<td>HighchartsJS</td>
													<td>NodeJS</td>
													<td>jQuery</td>
												</tr>
												<tr>
													<td>Bootstrap</td>
													<td>WordPress</td>
													<td>Google Apps Script</td>
													<td>AWS</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="col-md-6 text-center animate-box">
								<div className="services color-4">
									<span className="icon">
										<i className="icon-layers2" />
									</span>
									<div className="desc">
										<h3>Tools, and IDE</h3>
										<table className="table table-borderless">
											<tbody>
												<tr>
													<td>Git</td>
													<td>Visual Studio</td>
													<td>Adobe Creative Cloud</td>
													<td>VMware</td>
												</tr>
												<tr>
													<td>WAMP</td>
													<td>Microsoft PowerBI</td>
													<td>Tableau</td>
													<td>AWS</td>
												</tr>
											</tbody>
										</table>
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
