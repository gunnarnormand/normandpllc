      <!-- footer start -->
			<div class="row pattern-bg z-depth-2 margin-top-3" style="background-image: url(<?php echo get_field('footer_pattern', 'option') ?>);">
				<div class="col s12 l4 center-align">
					<i class="small material-icons">phone</i>
					<a class="flow-text" href="tel:407-603-6031">407-603-6031</a>
					<p>(You can even text us with this number!)</p>
				</div>
				<div class="col s12 l4 center-align">
					<i class="small material-icons">email</i>
					<a class="flow-text" href="mailto:firm@smarterclient.com">firm@ednormand.com</a>
				</div>
				<div class="col s12 l4 center-align">
					<i class="small material-icons">navigation</i>
					<a href="http://maps.google.com/?q=3165 McCrory Place, Suite 175, Orlando, FL 32803" target="_blank" class="flow-text">3165 McCrory Place, Suite 175, Orlando, FL 32803</a>
					<p>(by appointment only)</p>
				</div>
			</div>
			<div id="googleMap"></div>
			<footer id="footer" class="page-footer lighten-4" role="contentinfo">
				<div class="container">
					<div class="row">
						<div class="col s12 center-align">
							<img  class=" brand-logo center" src="<?php echo get_field('footer_logo', 'option') ?>" alt="main-logo">
							<p class="text-lighten-4">if robin hood had a law firm</p>
						</div>
						<div class="col s4 push-s4 center-align ">
							<div class="social-icon-row-footer">
								<div class="col s4">
									<a class="social-icon facebook" href="https://www.facebook.com/normandlawpllc/" target="_blank"></a>
								</div>
								<div class="col s4">
									<a class="social-icon linkedin" href="https://www.linkedin.com/in/ednormand/" target="_blank"></a>
								</div>
								<div class="col s4">
									<a class="social-icon twitter" href="https://twitter.com/normandlawpllc/" target="_blank"></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						<div class="row">
							<div class="col s6">
								<a class="btn-flat copyright">© Normand PLLC 2018</a>
							</div>
							<div class="col s6">
								<!--Privacy Policy Modal Trigger -->
								<a class="right waves-effect btn-flat modal-trigger" href="#privacy-modal">Privacy Policy</a>
								<!--Disclaimer Modal Trigger -->
								<a class="right waves-effect btn-flat modal-trigger" href="#disclaimer-modal">Disclaimer</a>
							</div>
							<div class="col s12 center-align">
								<a href="http://gunnar.tech/" target="_blank">
									<div class="chip theme-by waves-effect waves-light">
										theme by: gunnar.tech
									</div>
								</a>
							</div>
						</div>
					</div>
					<!--Privacy Policy Modal Structure -->
					<div id="privacy-modal" class="modal modal-fixed-footer">
						<div class="modal-content row">
							<div class="col s12">
								<h4>Website Privacy &amp; Security Statement</h4>
								<?php echo get_field('privacy_policy', 'option') ?>
							</div>
						</div>
						<div class="modal-footer">
							<a href="#" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
						</div>
					</div>
					<!--Disclaimer Modal Structure -->
					<div id="disclaimer-modal" class="modal modal-fixed-footer">
						<div class="modal-content row">
              <div class="col s12">
                <h4>Disclaimer for Normand PLLC</h4>
  					    <?php echo get_field('disclaimer', 'option') ?>
              </div>
						</div>
						<div class="modal-footer">
							<a href="#" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
						</div>
					</div>
				</div>
			</footer>
			<div class="svg-footer-wrapper">
				<div id="svgFooter">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
						<polygon class="svg--sm" fill="white" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
						<polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
					</svg>
				</div>
			</div>
			<!-- footer end -->
		<!-- wrapper end	 -->
    </div>
    <?php wp_footer(); ?>
  </body>
</html>
