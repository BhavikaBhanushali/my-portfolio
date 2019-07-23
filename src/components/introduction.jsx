import React, { Component } from "react";

export default class Introduction extends Component {
	render() {
		return (
			<div>
				<section
					id="colorlib-hero"
					className="js-fullheight"
					data-section="home"
				>
					<div className="flexslider js-fullheight">
						<ul className="slides">
							<li style={{ backgroundImage: "url(images/img-9.jpg)" }}>
								<div className="overlay" />
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
											<div className="slider-text-inner js-fullheight">
												<div className="desc">
													<h1>Hi! I'm Bhavika</h1>
													<p>
														<a
															href="https://drive.google.com/open?id=1osFDX47QYjGOOStQW0XPzqVYQlfOVJbt"
															className="btn btn-primary btn-learn"
														>
															View CV <i className="icon-eye2" />
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li style={{ backgroundImage: "url(images/img_bg_1.jpg)" }}>
								<div className="overlay" />
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1>
														I am <br />a Developer
													</h1>

													<p>
														<a
															href="https://github.com/BhavikaBhanushali/my-portfolio"
															className="btn btn-primary btn-learn"
														>
															View Portfolio <i className="icon-briefcase3" />
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
}
